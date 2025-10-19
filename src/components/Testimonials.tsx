import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial1.jpg";
import testimonial2 from "@/assets/testimonial2.jpg";
import testimonial3 from "@/assets/testimonial3.jpg";
import testimonial4 from "@/assets/testimonial4.jpg";
import testimonial5 from "@/assets/testimonial5.jpg";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CTO, TechVision Inc.",
    image: testimonial1,
    quote: "Akhil's expertise in AI and Python development is exceptional. He delivered a complex LLM integration that exceeded our expectations and transformed our customer service operations.",
  },
  {
    name: "Sarah Martinez",
    role: "Product Manager, DataFlow",
    image: testimonial2,
    quote: "Working with Akhil was a game-changer for our automation needs. His innovative approach and attention to detail resulted in a 300% increase in our processing efficiency.",
  },
  {
    name: "Raj Patel",
    role: "Lead Developer, AI Solutions",
    image: testimonial3,
    quote: "Akhil's ability to understand complex requirements and translate them into elegant, scalable solutions is remarkable. His code quality and documentation are outstanding.",
  },
  {
    name: "Emily Wong",
    role: "CEO, SmartSystems",
    image: testimonial4,
    quote: "The intelligent systems Akhil built for us have become the backbone of our platform. His dedication and technical prowess make him an invaluable partner.",
  },
  {
    name: "Lisa Thompson",
    role: "Director of Engineering, CloudTech",
    image: testimonial5,
    quote: "Akhil doesn't just code—he architects solutions that think ahead. His work on our machine learning pipeline has saved us countless hours and significantly improved accuracy.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 glow-text">
          Testimonials
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
          I'm grateful to have collaborated with amazing people and teams. Here's what they've shared 
          about working with me and the results we achieved together.
        </p>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-full blur-lg opacity-50" />
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-primary"
                />
              </div>

              <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              <div>
                <p className="text-xl font-bold glow-text">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="border-primary hover:bg-primary/10"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
