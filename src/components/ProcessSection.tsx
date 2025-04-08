
import { ArrowRight, Lightbulb, Search, Wrench, LineChart } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "1. Consultation",
      description:
        "We begin with a comprehensive analysis of your business processes, identifying opportunities for AI automation.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "2. Solution Design",
      description:
        "Our team designs custom AI solutions tailored to your specific business needs and objectives.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "3. Implementation",
      description:
        "We seamlessly integrate our AI automation tools into your existing workflows with minimal disruption.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "4. Optimization",
      description:
        "Continuous monitoring and refinement ensure optimal performance and evolving with your business needs.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-foreground/5 section-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-blob w-[45rem] h-[45rem] bottom-0 -right-1/4 bg-terralex-purple/5 animate-pulse-slow"></div>
        <div className="bg-gradient-blob w-[40rem] h-[40rem] -top-1/4 -left-1/4 bg-terralex-teal/5 animate-float"></div>
        <div className="animated-line w-full top-20 animate-shimmer delay-1000"></div>
        <div className="animated-line w-1/3 bottom-10 left-0 animate-shimmer"></div>
        
        {/* Animated circles */}
        <div className="absolute top-40 right-10 w-4 h-4 bg-terralex-purple/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-terralex-teal/10 rounded-full animate-float"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-background opacity-10"></div>
      </div>
      
      <div className="terralex-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-monument mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-foreground/70">
            Our streamlined approach takes you from initial consultation to full
            implementation, ensuring a smooth transition to AI-powered operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-16 left-1/2 w-full h-px bg-foreground/20 hidden lg:block">
                  <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-terralex-purple w-4 h-4" />
                </div>
              )}
              
              <div className="brutalist-card h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-terralex-purple/10 flex items-center justify-center mb-6 text-terralex-purple">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 brutalist-card bg-gradient-to-br from-terralex-purple/5 to-terralex-teal/5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-monument mb-4">Ready to start your AI transformation?</h3>
              <p className="text-foreground/70 mb-6">
                Our team of experts is ready to guide you through the process and help
                you harness the power of AI for your business.
              </p>
              <a href="#contact" className="button-primary">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="hidden md:block">
              <div className="relative p-6 border border-foreground/20 rounded-lg bg-background/50 backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-terralex-purple to-terralex-teal"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-terralex-purple"></div>
                    <div className="text-sm font-medium">Initial Assessment: 2-3 days</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-terralex-purple/70"></div>
                    <div className="text-sm font-medium">Solution Design: 1-2 weeks</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-terralex-teal"></div>
                    <div className="text-sm font-medium">Implementation: 2-4 weeks</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-terralex-teal/70"></div>
                    <div className="text-sm font-medium">Ongoing Support: Continuous</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
