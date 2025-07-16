import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/AnimatedCounter";
import { TrendingUp, Users, Award, Code } from "lucide-react";

const stats = [
  {
    icon: Code,
    label: "Projects Completed",
    value: 15,
    suffix: "+",
    description: "Data analysis and ML projects"
  },
  {
    icon: TrendingUp,
    label: "Model Accuracy",
    value: 98,
    suffix: "%",
    description: "Best performing ML model"
  },
  {
    icon: Users,
    label: "Data Points Analyzed",
    value: 50,
    suffix: "K+",
    description: "Across various datasets"
  },
  {
    icon: Award,
    label: "Dashboard KPIs",
    value: 25,
    suffix: "+",
    description: "Interactive visualizations created"
  }
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">By the Numbers</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A snapshot of my data analysis journey and project impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`bg-card dark:bg-card border-border dark:border-border text-center transition-all duration-1000 card-hover hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}