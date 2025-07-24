import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Dinesh Reddy
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Front-End Developer & Cloud Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                I craft responsive web applications with modern frameworks and deploy scalable solutions in the cloud. 
                Passionate about creating seamless user experiences and optimizing software delivery processes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover:scale-105 transition-bounce glow-effect"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/DineshReddyy5S" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow hover:glow-effect"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/dineshreddyy5s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow hover:glow-effect"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:dineshreddyy5@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow hover:glow-effect"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square rounded-full overflow-hidden card-shadow glow-effect border-4 border-primary/20">
                <img 
                  src={heroPortrait} 
                  alt="Dinesh Reddy Y" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-glow-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;