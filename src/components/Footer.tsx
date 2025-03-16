import { Github, Linkedin, Mail, ArrowUp, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-tech-dark py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-10 w-10 rounded-md bg-gradient-to-r from-tech-blue to-tech-purple flex items-center justify-center">
              <Code className="h-6 w-6 text-tech-offwhite" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Your Name</h3>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/albin6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/albin-aji-aa0ab0312/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-300" />
            </a>
            <a
              href="mailto:albinpariyarath.pvt@gmail.com"
              className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-400 hover:text-tech-offwhite transition-colors px-3 py-1 rounded-full hover:bg-black/30"
            >
              Home
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-400 hover:text-tech-offwhite transition-colors px-3 py-1 rounded-full hover:bg-black/30"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-400 hover:text-tech-offwhite transition-colors px-3 py-1 rounded-full hover:bg-black/30"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-400 hover:text-tech-offwhite transition-colors px-3 py-1 rounded-full hover:bg-black/30"
            >
              Contact
            </button>
          </div>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          
          <p className="text-gray-500 mb-8">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="bg-black/30 hover:bg-black/50 text-gray-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
