import { ArrowRight, Download, Linkedin, Mail, Phone } from "lucide-react";
import profileImage from "@assets/lucky 22_1754117919618.jpg";

export default function Hero() {
  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const headerOffset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-navy-600 via-blue-700 to-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-wide">Lakshmi Durga</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-100 font-medium">
                Full Stack Web Developer
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                Aspiring full-stack developer specializing in the MERN stack. Passionate about building responsive, user-friendly applications with clean code and modern design.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleViewWork}
                className="inline-flex items-center justify-center px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-navy-800 font-semibold rounded-lg transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/lakshmi-durga-tirumani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white text-2xl transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:lakshmidurgatirumani2005@gmail.com" 
                className="text-blue-100 hover:text-white text-2xl transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+919652104883" 
                className="text-blue-100 hover:text-white text-2xl transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src={profileImage} 
                    alt="Lakshmi Durga Tirumani - Full Stack Developer" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-cyan-400 rounded-full opacity-15 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
