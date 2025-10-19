import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card shadow-lg" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold glow-text">D.V.V AKHIL</div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm hover:text-primary transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-sm hover:text-primary transition-colors">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-primary to-blue-400 hover:opacity-90">
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>;
};
export default Header;