
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Database, Code, Globe } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="h-8 w-8 mb-4 text-tech-blue" />,
      items: ["React", "Redux", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"]
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 mb-4 text-tech-purple" />,
      items: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Authentication", "JWT", "OAuth"]
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 mb-4 text-tech-blue" />,
      items: ["MongoDB", "Mongoose", "SQL", "Firebase", "Data Modeling"]
    },
    {
      category: "Tools & Others",
      icon: <Code className="h-8 w-8 mb-4 text-tech-purple" />,
      items: ["Git", "GitHub", "VS Code", "Webpack", "npm", "Jest", "Docker", "CI/CD"]
    }
  ];

  return (
    <section id="about" className="section-padding bg-tech-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-lg text-gray-700">
            I'm a passionate MERN stack developer with a strong foundation in building scalable web applications.
            With expertise in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="mb-6 gradient-text">My Journey</h3>
            <p className="text-gray-700 mb-4">
              My development journey began when I built my first website using HTML and CSS. Since then, I've consistently expanded my skill set to include modern frameworks and tools like React, Node.js, and MongoDB.
            </p>
            <p className="text-gray-700 mb-4">
              I've had the opportunity to work on diverse projects ranging from e-commerce platforms to social networking applications, honing my problem-solving abilities and technical expertise along the way.
            </p>
            <p className="text-gray-700">
              What drives me is the blend of creativity and logic that web development offers. I'm constantly learning new technologies and approaches to stay at the forefront of this ever-evolving field.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="mb-6 gradient-text">My Approach</h3>
            <p className="text-gray-700 mb-4">
              I believe in building applications that are not only functionally sound but also provide exceptional user experiences. My development process emphasizes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Clean, maintainable code following best practices</li>
              <li>Responsive design that works seamlessly across all devices</li>
              <li>Performance optimization for fast-loading applications</li>
              <li>Scalable architecture that can grow with business needs</li>
              <li>Secure development practices to protect user data</li>
              <li>Comprehensive testing to ensure reliability</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-center mb-10 gradient-text">Technical Skills</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillSet, index) => (
            <Card key={index} className="animate-fade-in border-none shadow-md" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="text-center mb-2">
                  {skillSet.icon}
                  <h4 className="text-xl font-semibold mb-4">{skillSet.category}</h4>
                </div>
                <ul className="space-y-1">
                  {skillSet.items.map((skill, idx) => (
                    <li key={idx} className="text-gray-700 text-center">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
