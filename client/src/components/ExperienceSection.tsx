import { GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/ThemeProvider";

const education = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Sinhgad Institute of Technology, Lonavala",
    period: "August 2020 - May 2024",
    description: [
      "Completed undergraduate degree in Computer Engineering with a focus on machine learning, data analysis, and data science",
      "Built strong technical and problem-solving skills through academic projects and coursework",
      "Improved communication, collaboration, and adaptability by engaging with peers and instructors from diverse backgrounds",
      "Balanced technical growth with personal development throughout the four-year journey"
    ]
  },
  {
    degree: "HSC",
    institution: "Pratap College, Amalner",
    period: "2019 - 2020",
    description: [
      "Completed Higher Secondary education in the Science stream with core subjects: Mathematics, Physics, and Chemistry",
      "Built a strong foundation in logical thinking and problem-solving through academic coursework",
      "Excelled in Mathematics and developed a genuine interest in Chemistry, especially in understanding molecular interactions and real-life applications",
      "This curiosity in science improved my structured thinking and influenced my choice to pursue Computer Engineering"
    ]
  }
];

const experience = [
  {
    title: "Data Analyst Intern",
    company: "Bharat Software Solutions",
    period: "Starting August 2024 | Baner, Pune, India",
    responsibilities: [
      "Extracted, cleaned, and analyzed large datasets using SQL, Python, and Excel to uncover trends and support strategic decision-making, improving outcomes by 25%",
      "Designed and deployed interactive dashboards in Tableau and Power BI to visualize KPIs and performance metrics for executive-level stakeholders",
      "Automated recurring reporting workflows using Python, saving 15 hours of manual effort per week and increasing data accuracy by 30%",
      "Collaborated with cross-functional teams to streamline reporting processes and deliver impactful business insights"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Oasis Infobyte",
    period: "February 2023 - March 2023 | Pune, India",
    responsibilities: [
      "Transformed raw datasets into structured formats through data preprocessing and cleaning, enhancing data quality for downstream analysis.",
      "Conducted exploratory data analysis (EDA) to uncover patterns, trends, and anomalies, facilitating data-driven decision-making.",
      "Built and implemented machine learning models, including predictive algorithms, using Python, pandas, and scikit-learn.",
      "Completed five diverse projects such as car price prediction and Iris dataset clustering, gaining hands-on experience in feature engineering, model evaluation, and data visualization with Matplotlib."
    ]
  }
];

export default function ExperienceSection() {
  const { theme } = useTheme();
  return (
    <section id="experience" className="py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="text-primary mr-3 h-6 w-6" />
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-2"></div>
                  <Card className="bg-background border-border">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h4>
                      <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mb-4">{edu.period}</p>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        {edu.description.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="text-primary mr-2 mt-1 h-3 w-3 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Briefcase className="text-primary mr-3 h-6 w-6" />
              Experience
            </h3>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-2"></div>
                  <Card className="bg-background border-border">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">{exp.title}</h4>
                      <p className="text-foreground font-medium mb-1">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="text-primary mr-2 mt-1 h-3 w-3 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

