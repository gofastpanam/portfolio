import { useEffect, useRef, useCallback, useState, useMemo } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  distance: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  const colors = useMemo(() => [
    'rgba(147, 197, 253, 0.4)',   // Bleu clair
    'rgba(139, 92, 246, 0.3)',    // Violet
    'rgba(59, 130, 246, 0.3)',    // Bleu
    'rgba(199, 210, 254, 0.3)',   // Indigo très clair
  ], []);

  const createParticles = useCallback((width: number, height: number) => {
    const particleCount = Math.floor((width * height) / 4000); 
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      newParticles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 1.2 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.15 + 0.1,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        distance: 120
      });
    }

    particles.current = newParticles;
  }, [colors]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Fond transparent pour laisser voir le dégradé
    ctx.clearRect(0, 0, width, height);

    // Effet de "poussière d'étoiles" plus subtil
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 0.6;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
      ctx.fill();
    }

    particles.current.forEach((particle, i) => {
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < particle.distance) {
        // Force de répulsion inversée
        const force = (particle.distance - distance) / particle.distance;
        const angle = Math.atan2(dy, dx);
        // Direction opposée à la souris (d'où le signe négatif)
        const targetX = particle.x - Math.cos(angle) * force * 0.8;
        const targetY = particle.y - Math.sin(angle) * force * 0.8;
        
        // Mouvement plus doux
        particle.x += (targetX - particle.x) * 0.03;
        particle.y += (targetY - particle.y) * 0.03;
      } else {
        // Ajout d'un léger mouvement aléatoire
        particle.vx += (Math.random() - 0.5) * 0.002;
        particle.vy += (Math.random() - 0.5) * 0.002;
        particle.vx *= 0.95; // Plus d'amortissement
        particle.vy *= 0.95;
        
        // Retour plus lent vers la position de base
        const dx = particle.baseX - particle.x;
        const dy = particle.baseY - particle.y;
        particle.x += dx * 0.01;
        particle.y += dy * 0.01;
        
        particle.x += particle.vx;
        particle.y += particle.vy;
      }

      const glow = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size * 4
      );
      
      glow.addColorStop(0, particle.color);
      glow.addColorStop(0.5, particle.color.replace(', 0.', ', ' + (particle.alpha * 0.3).toFixed(2) + ')'));
      glow.addColorStop(1, particle.color.replace(', 0.', ', 0)'));

      ctx.beginPath();
      ctx.fillStyle = glow;
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();

      particles.current.forEach((particle2, j) => {
        if (i === j) return;
        const dx = particle.x - particle2.x;
        const dy = particle.y - particle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) {
          ctx.beginPath();
          const opacity = 0.05 * (1 - distance / 80);
          ctx.strokeStyle = 'rgba(147, 197, 253, ' + opacity + ')';
          ctx.lineWidth = 0.2;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.stroke();
        }
      });
    });
  }, [mouse]);

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
      createParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
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
}