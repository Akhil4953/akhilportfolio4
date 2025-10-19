import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const words = ["Code", "Learn", "Automate", "Repeat"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--gradient-glow)] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--gradient-glow)] animate-pulse delay-1000" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Rotating ring animation */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-64 h-64">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ring" />
            
            {/* Rotating word */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold glow-text transition-all duration-500">
                {words[currentWord]}
              </span>
            </div>
            
            {/* Inner circuit pattern */}
            <div className="absolute inset-8 rounded-full border border-primary/20 animate-ring" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          DONTHAMSETTI VEERA<br />
          <span className="glow-text">VENKATA AKHIL</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
          I'm Akhil — a Python developer passionate about crafting intelligent systems using AI and Large Language Models (LLMs). I turn complex ideas into efficient, working solutions that make technology simpler and smarter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary to-blue-400 hover:opacity-90 text-lg px-8 animate-glow"
          >
            Work with me
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
          >
            Let's Collaborate
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
