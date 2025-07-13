import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveBackground from "@/components/InteractiveBackground";
import TypewriterEffect from "@/components/TypewriterEffect";
import { LiveAge, LiveTime } from "@/components/LiveStats";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/20 dark:bg-accent/30 rounded-lg blur-lg animate-pulse-glow rotate-45"></div>
      <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-primary/15 dark:bg-primary/25 rounded-full blur-lg animate-bounce-slow"></div>

      {/* Live Stats */}
      <div className="absolute top-20 left-8 z-20">
        <LiveAge />
      </div>
      <div className="absolute top-20 right-8 z-20">
        <LiveTime />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Dhananjay Nerkar</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 h-8">
            <TypewriterEffect 
              words={[
                "Data Analyst",
                "SQL Developer",
                "Power BI Developer",
                "Machine Learning Enthusiast"
              ]}
              speed={80}
              deleteSpeed={40}
              delayBetweenWords={2500}
            />
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-card/90 dark:bg-background/20 hover:bg-primary/20 dark:hover:bg-primary/20 hover:scale-110 transition-all duration-300 shadow-xl border-2 border-primary/30 dark:border-border/30 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50"
              onClick={() => window.open("https://github.com/Dhananjay1509", "_blank")}
            >
              <Github className="h-8 w-8 text-foreground dark:text-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-card/90 dark:bg-background/20 hover:bg-primary/20 dark:hover:bg-primary/20 hover:scale-110 transition-all duration-300 shadow-xl border-2 border-primary/30 dark:border-border/30 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50"
              onClick={() => window.open("https://www.linkedin.com/in/dhananjay-nerkar", "_blank")}
            >
              <Linkedin className="h-8 w-8 text-foreground dark:text-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-card/90 dark:bg-background/20 hover:bg-primary/20 dark:hover:bg-primary/20 hover:scale-110 transition-all duration-300 shadow-xl border-2 border-primary/30 dark:border-border/30 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50"
              onClick={() => window.open("mailto:nerkarr.dhananjay@gmail.com")}
            >
              <Mail className="h-8 w-8 text-foreground dark:text-foreground" />
            </Button>
          </div>

          <Button
            onClick={handleScrollToWork}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 animate-pulse-glow"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
}
