import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const prevPathRef = useRef(location.pathname);
  const [prevPath, setPrevPath] = useState<string | null>(null);
  const [showPrevExit, setShowPrevExit] = useState(false);
  const [collapsePrev, setCollapsePrev] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track previous active link to animate its underline out
  useEffect(() => {
    const old = prevPathRef.current;
    if (old !== location.pathname) {
      setPrevPath(old);
      setShowPrevExit(true);
      setCollapsePrev(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (showPrevExit) {
      const raf = requestAnimationFrame(() => setCollapsePrev(true));
      const t = setTimeout(() => {
        setShowPrevExit(false);
        setCollapsePrev(false);
        prevPathRef.current = location.pathname;
      }, 300);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(t);
      };
    } else {
      prevPathRef.current = location.pathname;
    }
  }, [showPrevExit, location.pathname]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled
        ? "bg-card/95 backdrop-blur-md shadow-elegant"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className={`text-2xl font-heading font-bold ${isHome ? "text-white" : "text-accent"}`}>
            QH
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-8 ${isHome && !isScrolled ? "text-white" : ""}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm font-medium transition-smooth relative group ${
                  isActive(item.path)
                    ? isHome && !isScrolled ? "text-white" : "text-accent"
                    : isHome && !isScrolled ? "text-white hover:text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
                {showPrevExit && prevPath === item.path && !isActive(item.path) && (
                  <span
                    className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      collapsePrev ? "w-0" : "w-full"
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 font-body text-sm font-medium transition-smooth ${isActive(item.path)
                  ? "text-accent"
                  : "text-foreground hover:text-accent"
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
