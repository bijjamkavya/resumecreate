import { Code, Globe, Database, Monitor } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "navy",
      skills: ["Python", "Java", "C", "C++"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "emerald",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "Express"]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "orange",
      skills: ["SQL", "MongoDB", "VS Code"]
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      color: "purple",
      skills: ["Windows", "Linux"]
    }
  ];

  const colorClasses = {
    navy: {
      bg: "bg-gradient-to-br from-navy-50 to-blue-50",
      iconBg: "bg-navy-600",
      text: "text-gray-900"
    },
    emerald: {
      bg: "bg-gradient-to-br from-emerald-50 to-green-50",
      iconBg: "bg-emerald-600",
      text: "text-gray-900"
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-50 to-yellow-50",
      iconBg: "bg-orange-600",
      text: "text-gray-900"
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-purple-600",
      text: "text-gray-900"
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">Technical expertise and tools I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const classes = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <div key={index} className={`${classes.bg} p-8 rounded-xl`}>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${classes.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-white text-xl" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${classes.text}`}>{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* MERN Stack Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">MERN Stack Specialist</h3>
            <p className="text-lg mb-6">Full-stack web development using MongoDB, Express.js, React.js, and Node.js</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Database className="text-emerald-300" size={20} />
                </div>
                <span className="text-sm">MongoDB</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="text-blue-300" size={20} />
                </div>
                <span className="text-sm">Express.js</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Code className="text-cyan-300" size={20} />
                </div>
                <span className="text-sm">React.js</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Monitor className="text-green-300" size={20} />
                </div>
                <span className="text-sm">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
