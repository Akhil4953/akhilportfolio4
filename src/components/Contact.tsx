import { Button } from "@/components/ui/button";
import { Mail, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to transform your ideas into intelligent solutions? Let's connect and create something amazing.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-blue-400 hover:opacity-90 text-lg px-12 py-6 mb-12 animate-glow"
            asChild
          >
            <a href="mailto:donthamsettiakhil@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              donthamsettiakhil@gmail.com
            </a>
          </Button>

          {/* Social Links */}
          <div className="glass-card rounded-2xl p-8 inline-block">
            <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
            <div className="flex gap-6 justify-center">
              <a
                href="https://www.instagram.com/introvert_0614?igsh=MXZxbzFydGU0OWgwdg=="
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/20 transition-all cursor-pointer">
                  <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/veera-venkata-akhil-donthamsetti-8538b731a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
