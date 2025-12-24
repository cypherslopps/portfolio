function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-7 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} SolidDev. Built with passion.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-2 bg-muted text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            {"Let's"} Talk
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
