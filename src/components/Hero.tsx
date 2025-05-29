
import { Mail } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setEmail("");
      setMessage("Thanks for subscribing!");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-dark text-white py-32 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full mb-8">
          <span className="text-neon-green font-mono text-sm">ZeroVC.xyz</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-mono leading-tight">
          We launch businesses at
          <br className="hidden sm:block" /> 
          <span className="text-neon-green"> the speed of AI.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-up [animation-delay:500ms]">
          Traditional venture models are outdated. We build, validate, and exit faster than ever before.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-up [animation-delay:750ms]">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md px-4 sm:px-0">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white/5 backdrop-blur-lg text-white rounded-lg border border-white/10 focus:border-neon-green focus:outline-none"
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-neon-green text-dark font-semibold rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Mail className="h-4 w-4" />
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {message && (
            <p className="w-full text-center text-sm text-neon-green">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
