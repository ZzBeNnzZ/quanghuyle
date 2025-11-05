import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Texas A&M High Performance Research Computing",
    role: "Student Technician",
    location: "College Station, TX",
    period: "Feb. 2025 – Present",
    current: true,
    achievements: [
      "Manage and resolve support tickets for HPRC researchers, and troubleshoot Linux environment issues to streamline researcher workflows",
      "Develop and maintain web-based resources to enhance HPRC's Knowledge Base and streamline user access to HPC documentation",
      "Implemented real-time output streaming in Drona Job Composer by integrating subprocess pipelines to capture and display live execution results in the UI, enhancing user feedback and tutorial interactivity",
    ],
    technologies: ["Linux", "HPC", "Python", "Web Development"],
  },
  {
    company: "Scale AI",
    role: "Technical Advisor Intern",
    location: "Remote",
    period: "Mar. 2025 – Oct. 2025",
    current: false,
    achievements: [
      "Refine generative AI outputs by identifying failure modes and applying research-driven improvements, enhancing reasoning reliability for end-user tasks",
      "Contribute to technical solutions and content that advance AI reasoning and performance",
    ],
    technologies: ["AI/ML", "Python", "Technical Writing"],
  },
  {
    company: "SonicWall",
    role: "Test Engineering Intern",
    location: "Milpitas, CA",
    period: "Jun. 2025 – Aug. 2025",
    current: false,
    achievements: [
      "Implemented and executed 30+ comprehensive test cases validating policy inheritance, exclusions, and file detection accuracy, reducing regression risk and ensuring product readiness for release cycles",
      "Designed and executed a scalable multi-endpoint test framework, streamlining cross-environment validation and cutting manual effort",
      "Tested SonicWall's under-development antivirus product, ensuring robust IOA detection, reliable quarantine mechanisms, and consistent policy enforcement",
    ],
    technologies: ["Testing", "Automation", "Security", "Python"],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Experience
            </h1>
            <div className="w-24 h-1 bg-accent" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
              My professional journey through high-performance computing, AI systems, and cybersecurity
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-glow" />

                  <Card className="ml-8 md:ml-20 p-8 shadow-elegant border-border/50 hover:shadow-glow transition-smooth">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="w-5 h-5 text-accent" />
                          <h2 className="text-2xl font-heading font-semibold text-primary">
                            {exp.role}
                          </h2>
                        </div>
                        <h3 className="text-xl text-accent font-medium mb-3">
                          {exp.company}
                        </h3>
                      </div>
                      {exp.current && (
                        <Badge className="bg-accent text-white w-fit">Current Position</Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-accent mt-1.5 flex-shrink-0">▪</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-accent/30 text-accent bg-accent/5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
