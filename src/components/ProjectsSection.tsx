import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with the MERN stack. Features include user authentication, product catalog, shopping cart, and payment processing.",
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
      ],
      liveLink: "https://cell-sphere-shop.vercel.app/https://cell-sphere-shop.vercel.app/",
      githubLink: "https://github.com/albin6/cell-sphere-MERN",
      image:
        "https://res.cloudinary.com/dkph7vdgg/image/upload/v1736265225/cell-sphere_tkefoi.png",
    },
    {
      title: "SocialiteX",
      description:
        "SocialiteX is a responsive social media platform built with a modern tech stack, including Next.js, PostgreSQL, Prisma, ShadCN, Tailwind CSS, and Clerk for secure authentication.",
      technologies: [
        "Next.js",
        "Postgresql",
        "Clerk"
      ],
      liveLink: "https://socialitex.vercel.app",
      githubLink: "https://github.com/albin6/socialitex-nextjs",
      image:
        "https://res.cloudinary.com/dkph7vdgg/image/upload/v1736265107/socialitex_kuxjlf.png",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-700">
            Here are some of the projects I've worked on. Each one represents
            different challenges and learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card overflow-hidden border-none shadow-md animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-tech-blue hover:bg-tech-blue/90"
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-tech-blue text-tech-blue hover:bg-tech-blue/10"
          >
            <a
              href="https://github.com/albin6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
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
