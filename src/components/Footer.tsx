const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Donthamsetti Veera Venkata Akhil. All rights reserved.
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built with <span className="text-primary">passion</span> and <span className="text-primary">innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
