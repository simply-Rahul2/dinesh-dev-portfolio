import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
      icon: '💻'
    },
    {
      title: 'Frontend Frameworks',
      skills: ['React', 'Angular', 'HTML5', 'CSS3', 'Responsive Design'],
      icon: '🎨'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS EC2', 'AWS VPC', 'CloudWatch', 'Docker', 'Kubernetes', 'CI/CD'],
      icon: '☁️'
    },
    {
      title: 'Development Tools',
      skills: ['VS Code', 'IntelliJ', 'Eclipse', 'Git', 'Bitbucket', 'Android Studio'],
      icon: '🛠️'
    },
    {
      title: 'Architecture & Patterns',
      skills: ['Microservices', 'Monolithic', 'OOP', 'REST APIs', 'DevOps'],
      icon: '🏗️'
    },
    {
      title: 'Methodologies',
      skills: ['Agile', 'Waterfall', 'Scrum', 'TDD', 'Code Review'],
      icon: '📋'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="card-shadow hover:glow-effect transition-smooth hover:scale-105 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operating Systems */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Operating Systems</h3>
          <div className="flex justify-center gap-4">
            <Badge 
              variant="outline" 
              className="border-primary text-primary px-4 py-2 text-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Windows
            </Badge>
            <Badge 
              variant="outline" 
              className="border-primary text-primary px-4 py-2 text-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Linux
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;