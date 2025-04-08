
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Submitted",
        description: "We'll be in touch with you shortly!",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding section-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-blob w-[60rem] h-[60rem] top-0 -right-1/3 bg-terralex-purple/5 animate-pulse-slow"></div>
        <div className="bg-gradient-blob w-[50rem] h-[50rem] bottom-0 -left-1/3 bg-terralex-teal/5 animate-float"></div>
        
        {/* Animated lines */}
        <div className="animated-line w-1/3 h-px top-20 left-0 animate-shimmer"></div>
        <div className="animated-line w-1/2 h-px bottom-40 right-0 animate-shimmer delay-700"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-28 h-28 border border-terralex-purple/10 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-20 h-20 border border-terralex-teal/10 rounded-full animate-rotate-slow"></div>
        
        {/* Sparkles */}
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-terralex-purple/20 rounded-full sparkle"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-terralex-teal/20 rounded-full sparkle"></div>
      </div>

      <div className="terralex-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-monument mb-4">
              Start Your <span className="text-gradient">AI Transformation</span>
            </h2>
            <p className="text-foreground/70 mb-8">
              Ready to revolutionize your business operations? Schedule a free consultation
              with our AI experts and discover how Terralex can transform your company.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-terralex-purple/10 rounded-md text-terralex-purple">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-foreground/70">info@terralex.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-terralex-purple/10 rounded-md text-terralex-purple">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-foreground/70">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-terralex-purple/10 rounded-md text-terralex-purple">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Live Chat</h3>
                  <p className="text-foreground/70">
                    Available Monday-Friday, 9am-5pm EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="brutalist-card bg-background/80 backdrop-blur-sm">
              <h3 className="text-xl font-monument mb-6">Request a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-1"
                  >
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your automation needs..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </div>
            <div className="absolute -top-3 -right-3 w-full h-full border border-foreground/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
