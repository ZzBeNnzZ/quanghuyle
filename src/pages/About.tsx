import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-accent" />
          </div>

          <div className="space-y-8 animate-fade-in">
            <Card className="p-8 shadow-elegant border-border/50 hover:shadow-glow transition-smooth">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-accent/10 rounded-full">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-heading font-semibold text-primary mb-4">
                    Education
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Texas A&M University
                      </h3>
                      <p className="text-lg text-accent font-medium mb-2">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="text-muted-foreground mb-3">
                        College Station, TX • GPA: 3.80
                      </p>
                      <div className="pt-3 border-t border-border/50">
                        <p className="text-sm font-semibold text-foreground mb-2">
                          Relevant Coursework:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Design and Analysis of Algorithms</li>
                          <li>Networks and Distributed Processing</li>
                          <li>Parallel Computing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-elegant border-border/50 hover:shadow-glow transition-smooth">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-accent/10 rounded-full">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-heading font-semibold text-primary mb-4">
                    Background
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a passionate Computer Science student at Texas A&M University with a strong 
                      academic record and hands-on experience in software development. My journey in 
                      tech has taken me through various domains including high-performance computing, 
                      AI systems, and cybersecurity testing.
                    </p>
                    <p>
                      Currently working as a Student Technician at Texas A&M High Performance Research 
                      Computing, I manage support for HPC researchers and develop web-based resources 
                      to enhance user access to documentation. Previously, I contributed to AI reasoning 
                      improvements at Scale AI and validated enterprise security products at SonicWall.
                    </p>
                    <p>
                      Beyond professional work, I'm passionate about game development and have created 
                      multiple projects using Unity and Godot. I enjoy building interactive experiences 
                      that combine creativity with technical problem-solving.
                    </p>
                    <p className="text-accent font-medium">
                      I'm actively seeking full-time Software Engineering opportunities where I can 
                      apply my skills in backend development, system optimization, and AI integration.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
