import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Cloud, MessageSquare, Activity, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Scalable Web-Based Group Chat Application',
      description: 'A full-stack group chat application deployed in the cloud with auto-scaling capabilities and load balancing for high-performance communication.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Docker', 'AWS EC2', 'Load Balancing'],
      features: [
        'Real-time messaging system',
        'Docker containerization',
        'AWS EC2 deployment',
        'Auto-scaling implementation',
        'Load balancing for high traffic'
      ],
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Medical Chatbot',
      description: 'An intelligent medical chatbot designed to provide health-related suggestions and assist users in symptom assessment and treatment guidance.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Healthcare APIs'],
      features: [
        'Symptom assessment interface',
        'Treatment recommendations',
        'Health query processing',
        'Medical knowledge base',
        'User-friendly interaction'
      ],
      icon: MessageSquare,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'VM Performance Monitoring System',
      description: 'A comprehensive monitoring solution for Virtual Machine performance counters using AWS CloudWatch and VPC configurations.',
      technologies: ['AWS EC2', 'CloudWatch', 'VPC', 'Performance Monitoring'],
      features: [
        'Multi-VM communication setup',
        'Real-time performance tracking',
        'CloudWatch integration',
        'VPC network configuration',
        'Performance metrics dashboard'
      ],
      icon: Activity,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud-Deployed Group Chat Application',
      description: 'A robust group chat application with complete CI/CD pipeline and cloud deployment strategy for scalable communication.',
      technologies: ['JavaScript', 'AWS', 'EC2', 'Repository Management', 'DevOps'],
      features: [
        'Local development and testing',
        'Docker image creation',
        'AWS repository integration',
        'Cloud deployment automation',
        'High traffic handling'
      ],
      icon: Cloud,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my academic projects demonstrating expertise in web development, cloud computing, and system design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-shadow hover:glow-effect transition-smooth hover:scale-105 border-border/50 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                    <project.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-foreground line-clamp-2">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 gradient-primary text-primary-foreground hover:scale-105 transition-bounce"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;