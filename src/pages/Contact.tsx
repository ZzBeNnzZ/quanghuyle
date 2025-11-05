import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Download } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "qhuy.le04@gmail.com",
    href: "mailto:qhuy.le04@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(346) 715-4412",
    href: "tel:+13467154412",
    color: "text-green-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/huyben",
    href: "https://linkedin.com/in/huyben",
    color: "text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ZzBeNnzZ",
    href: "https://github.com/ZzBeNnzZ",
    color: "text-gray-700",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "College Station, TX",
    href: null,
    color: "text-red-500",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-in text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently seeking full-time Software Engineering opportunities. 
              Feel free to reach out if you'd like to discuss potential roles or collaborations!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={method.label}
                  className="p-6 shadow-elegant border-border/50 hover:shadow-glow transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-accent/10`}>
                      <Icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-primary hover:text-accent transition-smooth font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-primary font-medium">{method.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 shadow-elegant border-border/50 gradient-sapphire text-center animate-fade-in">
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                Download Resume
              </h3>
              <p className="text-blue-100 mb-6">
                Get a copy of my full resume with detailed work experience and projects
              </p>
              <Button
                className="bg-white text-primary hover:bg-blue-50"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-8 shadow-elegant border-border/50 gradient-luxury text-center animate-fade-in">
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                Schedule a Call
              </h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how I can contribute to your team's success
              </p>
              <a href="mailto:qhuy.le04@gmail.com?subject=Schedule a Call">
                <Button
                  className="bg-white text-primary hover:bg-blue-50"
                  size="lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </a>
            </Card>
          </div>

          {/* Availability Notice */}
          <Card className="mt-8 p-6 border-accent/30 bg-accent/5 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 animate-pulse" />
              <div>
                <h4 className="font-semibold text-primary mb-2">Currently Available</h4>
                <p className="text-muted-foreground">
                  Open to full-time Software Engineering positions starting immediately. 
                  Interested in roles involving backend development, system optimization, 
                  HPC, or AI integration.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
