
import { useEffect, useRef } from "react";

const AnimatedImage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas responsive
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Variables for animation
    const particles: Particle[] = [];
    const particleCount = 30;
    const connectionDistance = 100;
    const colors = ['#6056f9', '#12f7d6', '#ffffff'];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Connect particles
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96, 86, 249, ${1 - distance/connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <div className="absolute inset-0 border border-foreground/20 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-terralex-purple/10 to-terralex-teal/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terralex-purple to-terralex-teal"></div>
      </div>
      
      <div className="absolute top-10 left-10 right-10 bottom-10 border border-foreground/20 rounded-lg overflow-hidden backdrop-blur-sm bg-background/30">
        <div className="absolute top-0 right-0 w-1/2 h-1 bg-gradient-to-l from-terralex-purple to-terralex-teal"></div>
        
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center p-4">
            <div className="text-sm font-mono opacity-70">// AI.automation</div>
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-terralex-purple"></div>
              <div className="w-3 h-3 rounded-full bg-terralex-teal"></div>
            </div>
          </div>
          
          <div className="relative flex-grow">
            <canvas ref={canvasRef} className="absolute inset-0" />
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="py-1 px-3 border border-foreground/20 rounded text-xs">AI Processing</div>
              <div className="text-terralex-teal text-sm animate-pulse">● Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// TypeScript interface for particles
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export default AnimatedImage;
