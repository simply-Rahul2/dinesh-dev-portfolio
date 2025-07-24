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
        <div className="flex justify-center items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in text-center">
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I craft responsive web applications with modern frameworks and deploy scalable solutions in the cloud. 
                Passionate about creating seamless user experiences and optimizing software delivery processes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <div className="flex gap-4 justify-center">
              <a 
                href="https://github.com/Dineshreddy583" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow hover:glow-effect"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dinesh-reddy-yeddula-460317356/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow hover:glow-effect"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:ydineshreddy83@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth card-shadow hover:glow-effect"
              >
                <Mail size={24} />
              </a>
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