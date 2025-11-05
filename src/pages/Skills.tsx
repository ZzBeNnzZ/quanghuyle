import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Boxes, Wrench, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "C++", "C#", "Python", "Java", "JavaScript", 
      "HTML/CSS", "Haskell", "R", "SQL (MySQL)"
    ],
  },
  {
    title: "Frameworks",
    icon: Boxes,
    skills: [
      "React", "Flask", "Streamlit", "Node.js", 
      "Pandas", "NumPy", "Scikit-learn", "TensorFlow"
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      "Git", "GitHub", "VSCode", "IntelliJ", 
      "Jupyter Notebook", "WSL", "Unity", "Godot", 
      "MongoDB", "Axios"
    ],
  },
  {
    title: "Platforms",
    icon: Monitor,
    skills: ["Linux", "HPC Clusters", "WebGL"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Technical Skills
            </h1>
            <div className="w-24 h-1 bg-accent mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive overview of my technical expertise across languages, frameworks, and tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="p-8 shadow-elegant border-border/50 hover:shadow-glow transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-heading font-semibold text-primary">
                      {category.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-secondary hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-smooth px-4 py-2 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills Note */}
          <Card className="mt-8 p-8 shadow-elegant border-border/50 gradient-sapphire animate-fade-in">
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold text-white mb-3">
                Continuous Learning
              </h3>
              <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying current with the latest 
                technologies in software development, AI, and systems programming. Open to 
                learning new tools and frameworks as needed for project requirements.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Skills;
