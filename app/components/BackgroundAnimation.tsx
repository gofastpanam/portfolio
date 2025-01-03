import { useEffect, useRef, useCallback, useState, useMemo } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  vx: number;
  vy: number;
  angle: number;
  speed: number;
  radius: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  const colors = useMemo(() => [
    'rgba(147, 197, 253, 0.25)',  // Bleu clair
    'rgba(139, 92, 246, 0.2)',    // Violet
    'rgba(59, 130, 246, 0.2)',    // Bleu
    'rgba(199, 210, 254, 0.15)',  // Indigo très clair
  ], []);

  const createParticles = useCallback(() => {
    const particleCount = 50; // Nombre fixe de particules
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 150 + 50; // Distance du curseur entre 50 et 200 pixels
      
      newParticles.push({
        x: mousePosition.x + Math.cos(angle) * radius,
        y: mousePosition.y + Math.sin(angle) * radius,
        size: Math.random() * 1 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.15 + 0.05,
        vx: 0,
        vy: 0,
        angle: angle,
        speed: Math.random() * 0.0005 + 0.0002, // Vitesse très lente
        radius: radius
      });
    }
    return newParticles;
  }, [colors, mousePosition]);

  const updateParticles = useCallback((particles: Particle[]) => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    particles.forEach(particle => {
      // Mise à jour de l'angle pour un mouvement circulaire très lent
      particle.angle += particle.speed;
      
      // Calcul de la nouvelle position
      particle.x = mousePosition.x + Math.cos(particle.angle) * particle.radius;
      particle.y = mousePosition.y + Math.sin(particle.angle) * particle.radius;

      // Effet de lueur
      const glow = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size * 2
      );
      
      glow.addColorStop(0, particle.color);
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [mousePosition]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    if (particlesRef.current) {
      updateParticles(particlesRef.current);
    }
  }, [updateParticles]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawParticles(ctx, canvas.width, canvas.height);
    animationFrameId.current = requestAnimationFrame(animate);
  }, [drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = createParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, createParticles]);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-conic from-blue-900 via-slate-900 to-purple-900 animate-gradient-slow opacity-40"></div>
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none relative z-10"
      />
    </div>
  );
};

export default BackgroundAnimation;