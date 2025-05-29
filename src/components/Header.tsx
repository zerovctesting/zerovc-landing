
import { X, Linkedin, Send, FileText } from "lucide-react";
import InvestmentForm from "./InvestmentForm";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-neon-green font-mono">zerovc.xyz</span>
        <div className="flex items-center gap-4">
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
            <X className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/company/zerovc" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/60 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://t.me/zerovcstudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/60 hover:text-white transition-colors"
          >
            <Send className="w-5 h-5" />
          </a>
          <a 
            href="https://substack.com/@zerovc" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/60 hover:text-white transition-colors"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;