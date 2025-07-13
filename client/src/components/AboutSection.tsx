import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import profileImage from "@assets/profile_1749069315238.png";

const skillGroups = [
  {
    title: "Programming & Tools",
    items: ["Python", "C", "C++", "SQL", "MySQL", "MongoDB", "JSON", "XML"],
    color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
  },
  {
    title: "Data Science & Analysis",
    items: [
      "Data Analysis", "EDA", "Statistics",
      "Analytical Thinking", "Decision-Making", "Attention to Detail", "Research Skill"
    ],
    color: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Machine Learning",
    items: ["Machine Learning", "Scikit-learn", "XGBoost", "Random Forest"],
    color: "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400"
  },
  {
    title: "Libraries & Frameworks",
    items: ["NumPy & Pandas", "Matplotlib", "Seaborn", "Flask"],
    color: "bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400"
  },
  {
    title: "BI & Visualization",
    items: ["Power BI", "Tableau", "Power Query Editor", "Pivot Tables"],
    color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-600 dark:text-cyan-400"
  },
  {
    title: "Dev Tools & IDEs",
    items: ["Git", "GitHub", "VS Code", "PyCharm", "OOPs"],
    color: "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
  },
  {
    title: "Soft Skills",
    items: ["Communication"],
    color: "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400"
  }
];

export default function AboutSection() {
  const { theme } = useTheme();
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
    <section id="about" ref={sectionRef} className="py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Centered profile section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex justify-center mb-6">
            <img
              src={profileImage}
              alt="Dhananjay Nerkar"
              className="w-48 h-48 rounded-full object-cover border-4 border-primary/20 shadow-xl"
            />
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">Dhananjay Nerkar</h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
            Hi, I'm <strong>Dhananjay Nerkar</strong> — a data analyst with 1 year of hands-on experience and a strong foundation in business analytics. Currently, I’m working as a <strong>Data Analyst Intern at Bharat Software Solutions</strong>, where I analyze operational and sales data to support strategic decision-making and improve reporting workflows.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
            My expertise lies in <strong>Python scripting</strong>, <strong>Power BI dashboards</strong>, and <strong>data wrangling</strong>, with practical experience in automating reports, tracking KPIs, and uncovering insights from complex datasets. I’ve contributed to impactful projects, including <strong>supply chain analysis</strong> and <strong>wafer fault prediction using machine learning</strong>.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            I’m continually building my skill set through real-world data science projects that blend <strong>statistics</strong>, <strong>machine learning</strong>, and <strong>data visualization</strong>. Whether it's improving process efficiency or discovering trends in customer behavior, I’m driven by curiosity and a passion for turning data into value.
          </p>

          <Button
            onClick={() => window.open("https://docs.google.com/document/d/1_F1Ec12v3PbnyQGlcf57ML-cV-fHoXCZ-gQTDwDURD4/edit?tab=t.0", "_blank")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Skills section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, groupIndex) => (
              <div 
                key={group.title}
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${groupIndex * 100}ms` }}
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300">
                  <h4 className="text-xl font-bold text-foreground mb-4 border-b border-border/30 pb-2">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, index) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-500 hover:scale-105 ${
                          group.color
                        } ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${(groupIndex * 100) + (index * 50)}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
