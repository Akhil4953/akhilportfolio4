const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <img
              src="https://res.cloudinary.com/dcocxq2ov/image/upload/v1760800567/Portfolio_image_fnxvd0.jpg"
              alt="Akhil Donthamsetti"
              className="relative rounded-2xl w-full aspect-square object-cover border-2 border-primary/30"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                Hi, I'm <span className="text-primary font-semibold">Donthamsetti Veera Venkata Akhil</span>, 
                a Python developer driven by curiosity and creativity. I specialize in designing AI-powered tools, 
                automation scripts, and language model integrations that solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                What makes me different is my ability to merge logic with innovation — I don't just write code; 
                I create systems that learn, adapt, and deliver impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Python", "AI/ML", "LLMs", "Automation", "Problem Solving"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
