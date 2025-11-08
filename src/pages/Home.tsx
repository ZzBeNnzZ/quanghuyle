import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen">
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-midnight">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-4">
                Computer Science Student
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 tracking-tight">
              Quang Huy Le
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-body leading-relaxed max-w-3xl mx-auto">
              Software Developer specializing in{" "}
              <span className="text-accent font-semibold">
                High-Performance Computing
              </span>
              ,
              <span className="text-accent font-semibold"> AI Integration</span>
              , and
              <span className="text-accent font-semibold">
                {" "}
                Full-Stack Development
              </span>
            </p>

            {/* <p className="text-lg text-blue-200/80 mb-12 font-body max-w-2xl mx-auto">
              Texas A&M University • GPA: 3.80 • Available for Software
              Engineering roles
            </p> */}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/projects">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white shadow-glow group px-8 py-6 text-lg font-semibold"
                >
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-accent hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/ZzBeNnzZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-smooth"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/huyben"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-smooth"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:qhuy.le04@gmail.com"
                className="text-white/70 hover:text-accent transition-smooth"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default Home;
