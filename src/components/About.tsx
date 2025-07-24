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
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-white">Professional Summary</h3>
            <div className="text-lg text-slate-300 leading-relaxed space-y-4">
              <p>
                I am a highly motivated Front-End Developer with expertise in optimizing software delivery processes. 
                Based in Sweden, I specialize in creating responsive, user-friendly web applications using modern frameworks and best practices.
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
                className="glass-effect border-slate-700/50 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                      <highlight.icon size={32} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    {highlight.title}
                  </h4>
                  <p className="text-slate-400 text-sm">
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