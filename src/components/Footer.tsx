import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Dinesh Reddy Y
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Front-End Developer based in Sweden, passionate about creating exceptional web experiences 
              and scalable cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#education', label: 'Education' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-2">
              <a 
                href="mailto:ydineshreddy83@gmail.com"
                className="text-muted-foreground hover:text-primary transition-smooth text-sm block"
              >
                ydineshreddy83@gmail.com
              </a>
              <a 
                href="tel:+46769641050"
                className="text-muted-foreground hover:text-primary transition-smooth text-sm block"
              >
                +46 76-964-1050
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com/Dineshreddy583" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dinesh-reddy-yeddula-460317356/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ydineshreddy83@gmail.com"
                className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Dinesh Reddy Y. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;