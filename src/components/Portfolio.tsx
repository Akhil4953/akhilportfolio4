import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  {
    title: "Neural Network Optimizer",
    description: "AI-powered system for optimizing neural network architectures using advanced machine learning techniques.",
    image: project1,
  },
  {
    title: "Automation Pipeline",
    description: "Intelligent automation framework that streamlines complex workflows and increases productivity by 300%.",
    image: project2,
  },
  {
    title: "LLM Integration Suite",
    description: "Comprehensive toolkit for integrating large language models into enterprise applications seamlessly.",
    image: project3,
  },
  {
    title: "Smart System Architecture",
    description: "Scalable intelligent system design that adapts to changing requirements and learns from user interactions.",
    image: project4,
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 glow-text">
          Portfolio
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
          Here are a few projects that showcase my skills in Python programming, AI development, 
          and intelligent automation. Each one reflects my approach to combining technical depth with creative problem-solving.
        </p>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold mb-2 glow-text">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-foreground/80 text-lg">
                  {projects[currentIndex].description}
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
              {projects.map((_, index) => (
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

export default Portfolio;
