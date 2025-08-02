import { TrendingUp, FileText, Bot, ShoppingCart, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "COVID-19 Tracker Web App",
      description: "Developed a real-time COVID tracker using React.js with country-wise statistics and interactive visualizations. Features dynamic graphs, maps, and dropdown filters for user-friendly access with live data from disease.sh API.",
      icon: TrendingUp,
      color: "from-red-400 to-red-600",
      technologies: [
        { name: "React.js", color: "bg-blue-100 text-blue-800" },
        { name: "API Integration", color: "bg-green-100 text-green-800" },
        { name: "Data Visualization", color: "bg-purple-100 text-purple-800" },
        { name: "Responsive Design", color: "bg-yellow-100 text-yellow-800" }
      ]
    },
    {
      title: "MeeSeva Web Portal with Admin Panel",
      description: "Built a full-stack MeeSeva portal using MERN stack with secure login and dynamic service application forms. Users can apply for certificates, make payments, and track status updates while admins manage applications.",
      icon: FileText,
      color: "from-blue-400 to-blue-600",
      technologies: [
        { name: "MERN Stack", color: "bg-green-100 text-green-800" },
        { name: "Authentication", color: "bg-red-100 text-red-800" },
        { name: "Admin Panel", color: "bg-blue-100 text-blue-800" },
        { name: "Payment Integration", color: "bg-purple-100 text-purple-800" }
      ]
    },
    {
      title: "Multilingual Chatbot with Voice & Text",
      description: "Developed a chatbot supporting multilingual text and voice interactions using MERN stack. Features language selection for personalized conversations, OpenAI integration for smart responses, and Google APIs for translation.",
      icon: Bot,
      color: "from-emerald-400 to-emerald-600",
      technologies: [
        { name: "MERN Stack", color: "bg-green-100 text-green-800" },
        { name: "OpenAI API", color: "bg-purple-100 text-purple-800" },
        { name: "Google APIs", color: "bg-red-100 text-red-800" },
        { name: "Voice Recognition", color: "bg-blue-100 text-blue-800" }
      ]
    },
    {
      title: "Amazon Clone with Visual Search & Color Matching",
      description: "Developed a full-featured Amazon Clone using MERN stack with product browsing, cart, and secure checkout. Implemented innovative photo upload feature that finds products matching dominant colors in uploaded images.",
      icon: ShoppingCart,
      color: "from-orange-400 to-orange-600",
      technologies: [
        { name: "MERN Stack", color: "bg-green-100 text-green-800" },
        { name: "Image Processing", color: "bg-purple-100 text-purple-800" },
        { name: "Color Detection", color: "bg-yellow-100 text-yellow-800" },
        { name: "E-commerce", color: "bg-blue-100 text-blue-800" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Showcasing my technical skills through real-world applications</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <div key={index} className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <Icon className="text-white text-4xl" size={64} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`${tech.color} px-3 py-1 rounded-full text-sm font-medium`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="flex items-center text-navy-600 hover:text-navy-800 font-medium transition-colors">
                      <Github className="mr-2" size={16} />
                      Code
                    </a>
                    <a href="#" className="flex items-center text-emerald-600 hover:text-emerald-800 font-medium transition-colors">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
