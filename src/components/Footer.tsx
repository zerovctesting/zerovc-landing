
import { X, Linkedin, Send, FileText } from "lucide-react";
import InvestmentForm from "./InvestmentForm";

const Footer = () => {
  return (
    <section className="bg-dark text-white py-20 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold font-mono leading-tight">
          Join the future of
          <span className="text-neon-green"> hypercapitalism.</span>
        </h2>

        <p className="text-gray-400 mt-4">
          No Drag, No BS, Just Doing Things.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex justify-center items-center gap-6">
            <InvestmentForm>
              <button className="text-white/60 hover:text-white transition-colors">
                <span className="text-white/60 hover:text-white transition-colors">Invest</span>
              </button>
            </InvestmentForm>
            <a 
              href="https://x.com/zerovcstudio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/company/zerovc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://t.me/zerovcstudio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors"
            >
              <Send className="w-6 h-6" />
            </a>
            <a 
              href="https://substack.com/@zerovc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;