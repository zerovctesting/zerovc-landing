
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Test Supabase connection
    const testConnection = async () => {
      try {
        const { error } = await supabase.from('subscribers').select('count', { count: 'exact' });
        if (error) throw error;
        setIsLoading(false);
      } catch (err) {
        console.error('Supabase connection error:', err);
        // We'll still show the page even if Supabase fails
        setIsLoading(false);
        setError("Database connection issue");
      }
    };

    testConnection();
  }, []);

  // Still show the page even if there's an error, just log it
  console.log('Supabase connection status:', { isLoading, error });

  return (
    <div className="bg-dark min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Projects />
      <Vision />
      <Footer />
    </div>
  );
};

export default Index;
