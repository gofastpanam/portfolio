import { useEffect, useRef, useCallback, useMemo } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  vx: number;
  vy: number;
  life: number;
}

interface MousePosition {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePosition = useRef<MousePosition>({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const animationFrameId = useRef<number>();

  const colors = useMemo(() => [
    'rgba(147, 197, 253, 0.8)',  // Bleu clair
    'rgba(139, 92, 246, 0.8)',   // Violet
    'rgba(59, 130, 246, 0.8)',   // Bleu
    'rgba(199, 210, 254, 0.8)',  // Indigo clair
  ], []);

  const createParticle = useCallback((x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    return {
      x,
      y,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1
    };
  }, [colors]);

  const updateParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    // Ajouter de nouvelles particules si la souris bouge
    const dx = mousePosition.current.x - mousePosition.current.prevX;
    const dy = mousePosition.current.y - mousePosition.current.prevY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 0) {
      const steps = Math.floor(distance / 5); // Une particule tous les 5 pixels

      for (let i = 0; i < steps; i++) {
        const x = mousePosition.current.prevX + (dx * i) / steps;
        const y = mousePosition.current.prevY + (dy * i) / steps;
        particlesRef.current.push(createParticle(x, y));
      }
    }

    mousePosition.current.prevX = mousePosition.current.x;
    mousePosition.current.prevY = mousePosition.current.y;

    // Mettre à jour et dessiner les particules
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.98;
      particle.vy *= 0.98;
      particle.life -= 0.02;
      particle.alpha = particle.life;

      if (particle.life > 0) {
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        
        glow.addColorStop(0, particle.color.replace('0.8)', particle.alpha + ')'));
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        return true;
      }
      return false;
    });
  }, [createParticle]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateParticles(ctx);
    animationFrameId.current = requestAnimationFrame(animate);
  }, [updateParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = event.clientX;
      mousePosition.current.y = event.clientY;
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
  }, [animate]);

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