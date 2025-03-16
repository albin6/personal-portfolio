
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with the MERN stack. Features include user authentication, product catalog, shopping cart, and payment processing.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Social Media Dashboard",
      description: "A responsive dashboard that aggregates and displays social media metrics and analytics in real-time using various APIs.",
      technologies: ["React", "Chart.js", "Node.js", "Express", "MongoDB", "Social Media APIs"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user roles, and project organization features.",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Blog Platform",
      description: "A dynamic blogging platform with markdown support, comments, user profiles, and content management system.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Markdown"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">My <span className="gradient-text">Projects</span></h2>
          <p className="text-lg text-gray-700">
            Here are some of the projects I've worked on. Each one represents different challenges and learning experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden border-none shadow-md animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-tech-blue hover:bg-tech-blue/90">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
