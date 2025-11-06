import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-2xl font-heading font-bold ${isHome ? "text-white" : "text-accent"}`}
          >
            QH
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-8 ${isHome && !isScrolled ? "text-white" : ""}`}>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  // onClick={(e) => handleNavClick(e, item.path)}
                  className={`font-body text-sm font-medium transition-colors duration-300 ease-in-out relative group ${
                    active
                      ? isHome && !isScrolled
                        ? "text-white"
                        : "text-accent"
                      : isHome && !isScrolled
                        ? "text-white hover:text-accent"
                        : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-full bg-accent origin-left
                    transition-transform duration-300 ease-in-out
                    transform ${active ? "scale-x-100" : "group-hover:scale-x-100 scale-x-0"}`}
                    style={{ viewTransitionName: `nav-underline-${item.path}` }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => {
                  // handleNavClick(e, item.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`block py-3 font-body text-sm font-medium transition-smooth ${
                  isActive(item.path) ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;