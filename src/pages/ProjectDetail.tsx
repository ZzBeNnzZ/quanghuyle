import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectById } from "@/data/projectsData";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-heading font-bold text-primary mb-6">
              Project Not Found
            </h1>
            <Link to="/projects">
              <Button variant="default" className="bg-accent hover:bg-accent/90">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <Link to="/projects">
            <Button variant="ghost" className="mb-8 hover:text-accent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5">
                  {project.category}
                </Badge>
                <span className="text-sm text-muted-foreground">{project.date}</span>
              </div>
              <h1 className="text-5xl font-heading font-bold text-primary mb-6">
                {project.title}
              </h1>
              <div className="w-24 h-1 bg-accent mb-6" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Embedded Demo */}
            {project.embedUrl && (
              <Card className="p-2 shadow-elegant border-border/50 mb-8">
                <iframe
                  src={project.embedUrl}
                  className="w-full h-[600px] rounded-lg"
                  title={`${project.title} Demo`}
                  allowFullScreen
                />
              </Card>
            )}

            {/* Technologies */}
            <Card className="p-8 shadow-elegant border-border/50 mb-8">
              <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} className="bg-accent/10 text-accent border-accent/30 px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Highlights */}
            <Card className="p-8 shadow-elegant border-border/50 mb-8">
              <h2 className="text-2xl font-heading font-semibold text-primary mb-6">
                Key Highlights
              </h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1.5 flex-shrink-0 font-bold">▪</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-accent/30">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
