
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const faqs: FaqItem[] = [
    {
      question: "What is AI automation and how can it benefit my company?",
      answer:
        "AI automation uses artificial intelligence to perform tasks that typically require human intelligence. For companies, this means streamlining operations, reducing costs, increasing efficiency, and enabling scalability without proportionally increasing overhead.",
    },
    {
      question: "How long does it take to implement your AI solutions?",
      answer:
        "Implementation timelines vary depending on the complexity of your business and the scope of the automation. Typically, our projects range from 2-8 weeks from initial consultation to full implementation, with most companies seeing results within the first month.",
    },
    {
      question: "Do I need technical expertise to use your solutions?",
      answer:
        "No, our solutions are designed to be user-friendly and accessible to non-technical users. We provide comprehensive training and ongoing support to ensure your team can effectively use our AI tools without specialized technical knowledge.",
    },
    {
      question: "How much does AI automation with Terralex cost?",
      answer:
        "Our pricing is customized based on the specific needs and scale of your business. We offer flexible packages starting from $2,500 for initial implementation, with monthly subscription options for ongoing support and optimization. We're committed to ensuring a strong ROI for all clients.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with companies across various industries including retail, manufacturing, healthcare, logistics, professional services, and technology. Our solutions are customized to address the specific challenges and opportunities in each industry.",
    },
    {
      question: "How secure is your AI automation platform?",
      answer:
        "Security is our top priority. Our platform is built with enterprise-grade security features, including end-to-end encryption, regular security audits, and compliance with industry standards. We ensure your data is protected at every step of the process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-foreground/5 section-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-blob w-[45rem] h-[45rem] -bottom-20 -left-20 bg-terralex-purple/5 animate-pulse-slow"></div>
        <div className="bg-gradient-blob w-[35rem] h-[35rem] -top-10 right-0 bg-terralex-teal/5 animate-float"></div>
        
        {/* Animated lines */}
        <div className="animated-line w-1/2 h-px top-32 left-0 animate-shimmer"></div>
        <div className="animated-line w-2/3 h-px bottom-20 right-0 animate-shimmer delay-500"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-24 h-24 border border-terralex-purple/10 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 border border-terralex-teal/10 rounded-full animate-rotate-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-background opacity-10"></div>
      </div>
      
      <div className="terralex-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-monument mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-foreground/70">
            Get answers to common questions about our AI automation solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="brutalist-card overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-terralex-purple" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                <div
                  className={`px-6 pb-4 transition-all duration-300 ease-in-out ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-foreground/70">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-foreground/70">
              Still have questions? We're here to help.
            </p>
            <a href="#contact" className="button-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
