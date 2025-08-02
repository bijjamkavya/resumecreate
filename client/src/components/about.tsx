import { MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to continuous learning and staying current with industry trends
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm an aspiring full-stack web developer with a strong foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js). Currently pursuing my B.Tech in Computer Science at Gayatri Women's Engineering College.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm proficient in HTML, CSS, and JavaScript, with a passion for building responsive, user-friendly applications. As a quick learner and team player, I'm dedicated to continuous skill development and staying current with industry trends.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-navy-600 mb-2">8.33</h3>
                <p className="text-gray-600">Current CGPA</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-navy-600 mb-2">4+</h3>
                <p className="text-gray-600">Major Projects</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-navy-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="text-navy-600 w-5 h-5" />
                  <span className="ml-3 text-gray-700">Visakhapatnam, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-navy-600 w-5 h-5" />
                  <span className="ml-3 text-gray-700">lakshmidurgatirumani2005@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-navy-600 w-5 h-5" />
                  <span className="ml-3 text-gray-700">+91 9652104883</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Languages</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">English</span>
                  <span className="text-emerald-600 text-sm">Full Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Telugu</span>
                  <span className="text-emerald-600 text-sm">Full Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Hindi</span>
                  <span className="text-emerald-600 text-sm">Professional Working</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
