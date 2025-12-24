const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            © {currentYear} Stefanos Biliousis. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
