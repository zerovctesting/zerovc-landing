
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

interface InvestmentFormProps {
  children: React.ReactNode;
}

const InvestmentForm = ({ children }: InvestmentFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('investment_inquiries')
        .insert([{ 
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message
        }]);

      if (error) throw error;

      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your interest. We'll be in touch soon."
      });
      
      // Reset form and close dialog
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: ""
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-dark border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-white font-mono">Investment Inquiry</DialogTitle>
          <DialogDescription className="text-gray-400">
            Interested in becoming an LP? Fill out this form and we'll get back to you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 backdrop-blur-lg text-white rounded-lg border border-white/10 focus:border-neon-green focus:outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 backdrop-blur-lg text-white rounded-lg border border-white/10 focus:border-neon-green focus:outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-1">
              Organization
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 backdrop-blur-lg text-white rounded-lg border border-white/10 focus:border-neon-green focus:outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 backdrop-blur-lg text-white rounded-lg border border-white/10 focus:border-neon-green focus:outline-none resize-none"
            />
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-neon-green text-dark hover:bg-neon-green/90 transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InvestmentForm;
