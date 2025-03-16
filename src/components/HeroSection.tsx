import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Server, Globe } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-tech-dark -z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-tech-blue opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-tech-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-tech-indigo opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-blue via-tech-purple to-tech-indigo opacity-20 blur-xl animate-pulse-slow"></div>
              <div className="relative h-24 w-24 rounded-full bg-gradient-to-r from-tech-blue to-tech-purple flex items-center justify-center">
                <Code className="h-12 w-12 text-tech-offwhite" />
              </div>
            </div>
          </div>

          <h1 className="mb-6 animate-fade-in">
            <span className="text-gradient">Hi, I'm </span>
            <span className="gradient-text">Albin Aji</span>
          </h1>

          <h2
            className="text-2xl md:text-3xl mb-8 text-gray-300 font-normal animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            MERN Stack Developer crafting modern web applications
          </h2>

          <p
            className="text-lg text-gray-400 mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            I build full-stack applications with MongoDB, Express, React, and
            Node.js. Focused on creating responsive, user-friendly experiences
            with clean code.
          </p>

          <div
            className="flex flex-wrap gap-6 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-lg bg-tech-blue/10 flex items-center justify-center mb-2 border border-tech-blue/20">
                <Server className="h-6 w-6 text-tech-blue" />
              </div>
              <span className="text-sm font-medium text-gray-300">Backend</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-lg bg-tech-purple/10 flex items-center justify-center mb-2 border border-tech-purple/20">
                <Code className="h-6 w-6 text-tech-purple" />
              </div>
              <span className="text-sm font-medium text-gray-300">
                Frontend
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-lg bg-tech-indigo/10 flex items-center justify-center mb-2 border border-tech-indigo/20">
                <Globe className="h-6 w-6 text-tech-indigo" />
              </div>
              <span className="text-sm font-medium text-gray-300">
                Full Stack
              </span>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-tech-blue hover:bg-tech-blue/90 text-tech-offwhite"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-tech-blue text-tech-blue hover:bg-tech-blue/10"
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Scroll down"
            className="text-gray-400 hover:text-tech-offwhite hover:bg-black/30"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
