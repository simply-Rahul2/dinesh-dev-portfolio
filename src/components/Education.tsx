import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's in Software Engineering",
      institution: "Blekinge Institute of Technology",
      location: "Sweden",
      period: "Graduate Degree",
      description: "Advanced studies in software engineering principles, methodologies, and modern development practices.",
      highlights: [
        "Advanced Software Architecture",
        "Cloud Computing & DevOps",
        "Research in Software Engineering",
        "Project Management",
        "Software Quality Assurance"
      ],
      type: "masters"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Blekinge Institute of Technology", 
      location: "Sweden",
      period: "Undergraduate Degree",
      description: "Comprehensive foundation in computer science fundamentals, programming, and software development.",
      highlights: [
        "Data Structures & Algorithms",
        "Software Development Lifecycle",
        "Database Management Systems",
        "Web Technologies",
        "Object-Oriented Programming"
      ],
      type: "bachelors"
    }
  ];

  return (
    <section id="education" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">
            Educational Background
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation from Blekinge Institute of Technology, Sweden
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className={`card-shadow hover:glow-effect transition-smooth border-border/50 overflow-hidden animate-fade-in ${
                edu.type === 'masters' ? 'hover:scale-105' : 'hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Badge 
                          variant="outline" 
                          className="border-primary text-primary font-medium"
                        >
                          {edu.institution}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Areas of Study</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <div 
                        key={highlightIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Institution Highlight */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Blekinge Institute of Technology (BTH)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BTH is a renowned Swedish university known for its excellence in technology education and research. 
              The institution emphasizes practical learning, innovation, and preparing students for global careers 
              in technology and engineering fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;