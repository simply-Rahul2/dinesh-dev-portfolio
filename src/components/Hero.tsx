import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <div className="space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full glass-effect text-sm text-blue-300 mb-6">
                👋 Welcome to my portfolio
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-blue-400">
                  Dinesh Reddy
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
                Front-End Developer & Cloud Enthusiast
              </h2>
              
              <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                I craft exceptional web applications with modern frameworks and deploy scalable solutions in the cloud. 
                Based in Sweden, passionate about creating seamless user experiences and optimizing software delivery processes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 min-w-[160px]"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-400 transition-all duration-300 min-w-[160px]"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center pt-8">
              <a 
                href="https://github.com/Dineshreddy583" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 hover-lift"
              >
                <Github size={24} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dinesh-reddy-yeddula-460317356/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 hover-lift"
              >
                <Linkedin size={24} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="mailto:ydineshreddy83@gmail.com"
                className="group p-4 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 hover-lift"
              >
                <Mail size={24} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer" size={24} />
      </div>
    </section>
  );
};

export default Hero;