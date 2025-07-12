import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/ThemeProvider";
import hrAnalysisImage from "@assets/Hr_ Analysis_1749069315238.webp";
import geofencingImage from "@assets/Geofencing_1749069315238.webp";
import waferImage from "@assets/wafer_1749069315238.webp";
import forestFireImage from "@assets/Forest_Fire_1749069315238.webp";

const projects = [
  {
    id: 1,
    title: "HR Analysis Dashboard",
    description: "Created comprehensive Power BI dashboard analyzing employee attendance and performance metrics with day-wise trends and pattern identification. Implemented Row-Level Security (RLS) for data privacy, advanced DAX calculations for attendance metrics, and automated refresh cycles. Features include attendance percentage tracking, WFHSL analysis, and daily trend visualizations with interactive filters.",
    image: hrAnalysisImage,
    technologies: ["Excel", "Power BI", "DAX", "Power Query Editor", "RLS", "Data Modeling"],
    categories: ["dashboard", "data-analysis"],
    github: "https://github.com/Dhananjay1509/Bharat-Soft-Solution/tree/main/Power%20BI/T1",
    demo: null
  },
  {
    id: 2,
    title: "Forest Fire Risk Prediction System",
    description: "Developed a forest fire risk prediction model using Ridge Regression (98.4% accuracy) with a responsive Gradio web interface and Flask RESTful API. Features real-time forest fire risk assessment based on environmental factors and weather conditions.",
    image: forestFireImage,
    technologies: ["Python", "Numpy", "Pandas", "Scikit-learn", "Gradio", "Regression", "Flask", "RESTful API", "HTML/CSS"],
    categories: ["ml", "machine-learning"],
    github: "https://github.com/Dhananjay1509/forest-fire-prediction",
    demo: "https://huggingface.co/spaces/dhananjay1509/forest-fire-prediction"
  },
  {
    id: 3,
    title: "Wafer Fault Detection System",
    description: "End-to-end ML application that detects manufacturing defects in semiconductor wafers with 95% accuracy, featuring automated model selection and cloud deployment with CI/CD pipeline. Implemented comprehensive data validation and model monitoring.",
    image: waferImage,
    technologies: ["Python", "Flask","Pandas", "NumPy", "Matplotlib", "Scikit-learn", "XGBoost", "Random Forest", "K-Means Clustering", "Hyperparameter Tuning", "MongoDB", "JSON", "PyCharm", "Visual Studio Code"],
    categories: ["ml", "machine-learning"],
    github: "https://github.com/Dhananjay1509/wafer_fault_detection",
    demo: null
  },
  {
    id: 4,
    title: "Advanced Geofencing System",
    description: "Developed a Kotlin-based Android application that uses geofencing technology to deliver personalized location-triggered marketing offers and notifications to customers within predefined virtual boundaries. Enhanced customer engagement with targeted campaigns.",
    image: geofencingImage,
    technologies: ["Java", "Kotlin", "Android", "Geolocation APIs", "Retail Marketing"],
    categories: ["mobile"],
    github: "https://github.com/Dhananjay1509/Advanced-Geofencing",
    demo: null
  },
  {
    id: 5,
    title: "Power BI Sales & Performance Dashboard",
    description: "Built interactive dashboards with custom visuals and KPIs that improved decision-making by 25% featuring geographic mapping and advanced filtering. Optimized data models using DAX functions and automated refresh workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
     technologies: ["Excel", "Power BI", "Power BI service", "DAX", "Power Query Editor", "Data Modeling"],
    categories: ["dashboard", "data-analysis"],
    github: "https://github.com/Dhananjay1509/Bharat-Soft-Solution/tree/main/Power%20BI/T2",
    demo: null
  },
  {
    id: 6,
    title: "University Admission Prediction System",
    description: "Built linear regression model with Python libraries to predict university admission probabilities with 89.7% accuracy. Created interactive Streamlit web app for real-time predictions with integrated visualizations deployed on Streamlit Cloud.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Numpy", "Seaborn"],
    categories: ["web", "ml", "machine-learning"],
    github: "https://github.com/Dhananjay1509/Admission_LR",
    demo: "https://admissionlr.streamlit.app/"
  }
];

const filters = [
  { label: "All", value: "all" },
  { label: "ML", value: "ml" },
  { label: "Dashboard", value: "dashboard" },
  { label: "Web App", value: "web" },
  { label: "Mobile", value: "mobile" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { theme } = useTheme();

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.categories.includes(activeFilter)
  );

  return (
    <section id="work" className="py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">My Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my portfolio of data analysis, machine learning, and dashboard development projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className="transition-all duration-300"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`card-hover bg-card dark:bg-card border-border dark:border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/10 ${
                activeFilter === "all" ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-background/90 dark:bg-background/90 hover:bg-background dark:hover:bg-background transition-all duration-300 hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    {project.demo && (
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-background/90 dark:bg-background/90 hover:bg-background dark:hover:bg-background transition-all duration-300 hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo!, "_blank");
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground dark:text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground dark:text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge px-3 py-1 rounded-full text-xs font-mono bg-primary/10 dark:bg-primary/20 border border-primary/30 dark:border-primary/40 text-primary dark:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  {project.demo ? (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
