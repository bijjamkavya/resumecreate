import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Lakshmi Durga Tirumani</h3>
            <p className="text-blue-200">Full Stack Web Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/lakshmi-durga-tirumani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white text-xl transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:lakshmidurgatirumani2005@gmail.com" 
              className="text-blue-200 hover:text-white text-xl transition-colors"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+919652104883" 
              className="text-blue-200 hover:text-white text-xl transition-colors"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-blue-200">&copy; 2024 Lakshmi Durga Tirumani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
