
import { ArrowRight } from "lucide-react";
import TextAnimation from "./TextAnimation";
import AnimatedImage from "./AnimatedImage";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 section-padding relative overflow-hidden"
    >
      {/* Animated background gradients - enhanced visibility */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-terralex-purple/10 to-terralex-teal/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terralex-purple/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-terralex-teal/15 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-terralex-purple/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-terralex-teal/10 rounded-full filter blur-3xl animate-float"></div>
        
        {/* Additional gradient elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-terralex-purple/5 rounded-full filter blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-terralex-teal/5 rounded-full filter blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      {/* Animated background lines */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terralex-purple to-terralex-teal"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-px bg-terralex-purple/30"></div>
        <div className="absolute top-1/3 left-0 w-1/4 h-px bg-terralex-teal/30"></div>
        <div className="absolute bottom-1/4 left-0 w-1/3 h-px bg-terralex-purple/30"></div>
        <div className="absolute top-2/3 right-0 w-1/4 h-px bg-terralex-teal/30"></div>
      </div>

      {/* Decorative shapes and images */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 border border-terralex-purple/20 rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-terralex-teal/20 rounded-full"></div>
        <div className="absolute top-40 left-10 w-3 h-3 bg-terralex-purple/40 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-5 h-5 bg-terralex-teal/40 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-terralex-purple/30 rounded-full"></div>
        
        {/* Abstract grid pattern */}
        <div className="absolute inset-0 grid-background opacity-20"></div>
      </div>

      <div className="terralex-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-monument leading-tight tracking-tight">
              <span className="text-gradient">AI-Powered</span> Automation<br />
              For <TextAnimation />
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              Terralex transforms your business operations with cutting-edge AI solutions. 
              We automate workflows and processes for companies ready to embrace the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="button-primary">
                Start Your Transformation <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#process" className="button-outline">
                How It Works
              </a>
            </div>
            
            <div className="pt-8 flex gap-6 items-center">
              <div className="flex flex-col">
                <span className="text-3xl font-monument text-terralex-purple">250+</span>
                <span className="text-sm text-foreground/70">Companies Transformed</span>
              </div>
              <div className="w-px h-12 bg-foreground/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-monument text-terralex-teal">85%</span>
                <span className="text-sm text-foreground/70">Efficiency Increase</span>
              </div>
              <div className="w-px h-12 bg-foreground/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-monument text-terralex-purple">24/7</span>
                <span className="text-sm text-foreground/70">AI Operations</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <AnimatedImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
