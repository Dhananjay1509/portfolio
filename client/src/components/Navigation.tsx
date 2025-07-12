import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 dark:bg-background/95 backdrop-blur-sm border-b border-border/50 dark:border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold gradient-text">Dhananjay Nerkar</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-link text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.substring(1) ? "active text-primary" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-10 h-10 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30 bg-card/20 dark:bg-card/10"
              onClick={() => window.open("https://github.com/Dhananjay1509", "_blank")}
            >
              <Github className="h-5 w-5 text-foreground dark:text-foreground" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-10 h-10 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30 bg-card/20 dark:bg-card/10"
              onClick={() => window.open("https://www.linkedin.com/in/dhananjay-nerkar", "_blank")}
            >
              <Linkedin className="h-5 w-5 text-foreground dark:text-foreground" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-10 h-10 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30 bg-card/20 dark:bg-card/10"
              onClick={() => window.open("mailto:nerkarr.dhananjay@gmail.com")}
            >
              <Mail className="h-5 w-5 text-foreground dark:text-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30 bg-card/20 dark:bg-card/10"
            >
              {theme === "light" ? <Moon className="h-5 w-5 text-foreground dark:text-foreground" /> : <Sun className="h-5 w-5 text-foreground dark:text-foreground" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30 bg-card/20 dark:bg-card/10"
            >
              {theme === "light" ? <Moon className="h-5 w-5 text-foreground dark:text-foreground" /> : <Sun className="h-5 w-5 text-foreground dark:text-foreground" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30 bg-card/20 dark:bg-card/10"
            >
              {isOpen ? <X className="h-5 w-5 text-foreground dark:text-foreground" /> : <Menu className="h-5 w-5 text-foreground dark:text-foreground" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card/95 dark:bg-card/95 backdrop-blur-sm border-t border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1) ? "text-primary" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex space-x-3 px-3 py-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30 bg-card/20 dark:bg-card/10"
                onClick={() => {
                  window.open("https://github.com/Dhananjay1509", "_blank");
                  setIsOpen(false);
                }}
              >
                <Github className="h-5 w-5 text-foreground dark:text-foreground" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30 bg-card/20 dark:bg-card/10"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/dhananjay-nerkar", "_blank");
                  setIsOpen(false);
                }}
              >
                <Linkedin className="h-5 w-5 text-foreground dark:text-foreground" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30 bg-card/20 dark:bg-card/10"
                onClick={() => {
                  window.open("mailto:nerkarr.dhananjay@gmail.com");
                  setIsOpen(false);
                }}
              >
                <Mail className="h-5 w-5 text-foreground dark:text-foreground" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
