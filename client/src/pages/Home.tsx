import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SuperGrokBackground from "@/components/SuperGrokBackground";
import CanvasBackground from "@/components/CanvasBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <CanvasBackground />
      <SuperGrokBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
