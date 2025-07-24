import { Card, CardContent } from '@/components/ui/card';
import { Code, Cloud, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Expert in React, Angular, and modern JavaScript frameworks'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'AWS certified with hands-on experience in EC2, VPC, and CloudWatch'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong background in Agile methodologies and DevOps practices'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Focused on optimizing applications for speed and scalability'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-foreground">Professional Summary</h3>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                I am a highly motivated Front-End Developer with expertise in optimizing software delivery processes. 
                I specialize in creating responsive, user-friendly web applications using modern frameworks and best practices.
              </p>
              <p>
                My experience spans across HTML, CSS, JavaScript, React, and Angular for frontend development, 
                complemented by strong knowledge of REST APIs for seamless backend integration. I'm particularly 
                passionate about cloud technologies, especially AWS, where I've implemented scalable solutions.
              </p>
              <p>
                With a solid foundation in CI/CD pipelines and DevOps practices, I ensure efficient deployment 
                and delivery of web applications. My academic background from Blekinge Institute of Technology, 
                Sweden, has provided me with both theoretical knowledge and practical skills in software engineering.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="card-shadow hover:glow-effect transition-smooth hover:scale-105 border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <highlight.icon size={32} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;