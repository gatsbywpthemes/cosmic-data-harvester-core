
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="terralex-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <a href="#" className="flex items-center">
                <span className="text-foreground font-monument text-2xl">
                  TERRA<span className="text-terralex-purple">LEX</span>
                </span>
              </a>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Transforming SMBs with powerful AI automation solutions for marketing,
              operations, and logistics. Future-proof your business with Terralex.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Careers <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Marketing Automation
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Operations Automation
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Logistics Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Custom AI Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Documentation <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} Terralex AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </a>
            <span className="mx-2 text-foreground/40">|</span>
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
