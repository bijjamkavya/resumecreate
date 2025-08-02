import { FileText, Layers, Brain, BarChart3, Code, Plus } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Python Programming",
      description: "Advanced Python certification for data science and web development",
      icon: FileText,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "MERN Stack",
      description: "Full-stack web development with MongoDB, Express, React, Node.js",
      icon: Layers,
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Machine Learning",
      description: "ML algorithms, model training, and real-world problem solving",
      icon: Brain,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Data Science",
      description: "Data analysis, visualization, and insights extraction using Python",
      icon: BarChart3,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Web Development",
      description: "Modern web development with HTML, CSS, JavaScript, and frameworks",
      icon: Code,
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "More to Come",
      description: "Continuously learning and earning new certifications",
      icon: Plus,
      color: "from-red-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Certificates & Achievements</h2>
          <p className="text-xl text-gray-600">Professional certifications and learning milestones</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white text-2xl" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
