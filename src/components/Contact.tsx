import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dineshreddyy5@gmail.com',
      href: 'mailto:dineshreddyy5@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '07669611050',
      href: 'tel:+447669611050',
      description: 'Give me a call'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'United Kingdom',
      href: null,
      description: 'Based in the UK'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: '@DineshReddyy5S',
      href: 'https://github.com/DineshReddyy5S',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'Dinesh Reddy Y',
      href: 'https://linkedin.com/in/dineshreddyy5s',
      description: 'Connect professionally'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a conversation about technology.
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  className="card-shadow hover:glow-effect transition-smooth border-border/50 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        <contact.icon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                        <p className="text-muted-foreground text-sm mb-1">{contact.description}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-primary hover:text-accent transition-smooth font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">{contact.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links & CTA */}
            <div className="space-y-6 animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
              
              {socialLinks.map((social, index) => (
                <Card 
                  key={index}
                  className="card-shadow hover:glow-effect transition-smooth border-border/50 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        <social.icon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1">{social.label}</h4>
                        <p className="text-muted-foreground text-sm mb-1">{social.description}</p>
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-smooth font-medium"
                        >
                          {social.username}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Call to Action */}
              <Card className="card-shadow bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Ready to Work Together?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    I'm currently available for freelance work, full-time positions, or consulting opportunities. 
                    Let's discuss how we can bring your ideas to life!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="gradient-primary text-primary-foreground hover:scale-105 transition-bounce glow-effect flex-1"
                      asChild
                    >
                      <a href="mailto:dineshreddyy5@gmail.com">
                        <Send className="mr-2 h-4 w-4" />
                        Send Email
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth flex-1"
                      asChild
                    >
                      <a href="https://linkedin.com/in/dineshreddyy5s" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;