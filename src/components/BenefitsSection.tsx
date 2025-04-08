
import { TrendingUp, Clock, DollarSign, Scale, Target, BrainCircuit, LucideIcon } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitProps) => (
  <div className="brutalist-card">
    <div className="flex flex-col sm:flex-row gap-4 items-start">
      <div className="p-3 bg-terralex-purple/10 rounded-md text-terralex-purple">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increased Efficiency",
      description:
        "Automate repetitive tasks and streamline workflows to boost overall business efficiency by up to 85%.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Savings",
      description:
        "Free up valuable time for your team to focus on strategic initiatives and creative problem-solving.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description:
        "Reduce operational costs by minimizing manual labor and optimizing resource allocation.",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Scalability",
      description:
        "Scale your operations effortlessly with AI systems that grow alongside your business.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Competitive Advantage",
      description:
        "Stay ahead of the competition with cutting-edge AI technologies previously only available to large enterprises.",
    },
  ];

  return (
    <section id="benefits" className="section-padding section-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-blob w-[50rem] h-[50rem] top-1/3 -right-1/4 bg-terralex-purple/5 animate-pulse-slow"></div>
        <div className="bg-gradient-blob w-[40rem] h-[40rem] -top-20 -left-20 bg-terralex-teal/5 animate-float"></div>
        <div className="animated-line w-1/3 top-1/3 left-0 animate-shimmer"></div>
        <div className="animated-line w-1/2 bottom-1/4 right-0 animate-shimmer"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/4 w-6 h-6 border border-terralex-purple/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 border border-terralex-teal/20 rounded-full animate-float"></div>
      </div>
      
      <div className="terralex-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-monument mb-6">
              Why Choose <span className="text-gradient">AI Automation</span>
            </h2>
            <p className="text-foreground/70 mb-8 text-lg">
              AI automation delivers transformative benefits, positioning your 
              business for sustainable growth and success in today's competitive landscape.
            </p>
            
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-terralex-purple via-terralex-teal to-transparent"></div>
              <div className="space-y-4 pl-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-terralex-purple"></div>
                    <BenefitCard {...benefit} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-square max-w-lg mx-auto relative">
              <div className="absolute inset-0 border border-foreground/20 rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-terralex-purple/5 to-terralex-teal/5"></div>
              </div>
              
              <div className="absolute inset-10 backdrop-blur-sm bg-background/30 border border-foreground/20 rounded-lg p-6">
                <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                  <div className="w-24 h-24 rounded-full bg-terralex-purple/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-terralex-purple/20 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-terralex-purple flex items-center justify-center text-white">
                        <BrainCircuit className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-monument mb-3">AI Transformation</h3>
                    <p className="text-foreground/70">
                      We've helped 250+ companies achieve an average of 85% increase in operational 
                      efficiency through our custom AI automation solutions.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="p-3 border border-foreground/20 rounded-lg">
                      <div className="text-2xl font-monument text-terralex-purple">30%</div>
                      <div className="text-sm text-foreground/70">Cost Reduction</div>
                    </div>
                    <div className="p-3 border border-foreground/20 rounded-lg">
                      <div className="text-2xl font-monument text-terralex-teal">2.5x</div>
                      <div className="text-sm text-foreground/70">Growth Potential</div>
                    </div>
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

export default BenefitsSection;
