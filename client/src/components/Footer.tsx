import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card dark:bg-card py-8 border-t border-border dark:border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground">
            © 2024 Dhananjay Nerkar. All rights reserved. | Built with passion for data and technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
