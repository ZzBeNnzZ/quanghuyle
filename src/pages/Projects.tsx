import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Gamepad2, Globe, Brain, FolderOpen } from "lucide-react";
import { projects, Project } from "@/data/projectsData";
import { Link } from "react-router-dom";

const categoryIcons = {
  game: Gamepad2,
  web: Globe,
  ai: Brain,
  other: FolderOpen,
};

const categoryNames = {
  game: "Games",
  web: "Web Apps",
  ai: "AI Projects",
  other: "Other",
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Project["category"] | "all">("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter((p) => p.category === selectedCategory);

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Projects
            </h1>
            <div className="w-24 h-1 bg-accent mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore my portfolio of games, web applications, and AI-powered projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 animate-fade-in">
            {categories.map((category) => {
              const Icon = category !== "all" ? categoryIcons[category as Project["category"]] : FolderOpen;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category as Project["category"] | "all")}
                  className={`${
                    selectedCategory === category
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "border-border/50 hover:border-accent/50"
                  } transition-smooth`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category === "all" ? "All Projects" : categoryNames[category as Project["category"]]}
                </Button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="p-8 shadow-elegant border-border/50 hover:shadow-glow transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const Icon = categoryIcons[project.category];
                      return <Icon className="w-6 h-6 text-accent" />;
                    })()}
                    <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5">
                      {categoryNames[project.category]}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>

                <h2 className="text-2xl font-heading font-semibold text-primary mb-3">
                  {project.title}
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                  <Link to={`/projects/${project.id}`}>
                    <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-accent/30">
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-accent/30">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;
