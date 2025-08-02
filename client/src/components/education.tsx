import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech Computer Science",
      institution: "Gayatri Women's Engineering College",
      period: "August 2022 - August 2026",
      cgpa: "8.33",
      icon: GraduationCap,
      color: "navy"
    },
    {
      degree: "Intermediate",
      institution: "Bhaskara Junior College",
      period: "August 2020 - August 2022",
      cgpa: "8.98",
      icon: School,
      color: "emerald"
    },
    {
      degree: "High School",
      institution: "Viveka English Medium High School",
      period: "August 2010 - August 2020",
      cgpa: "8.44",
      icon: BookOpen,
      color: "orange"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic journey and achievements</p>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            const colorClasses = {
              navy: {
                bg: "bg-navy-50",
                text: "text-navy-600",
                iconBg: "bg-gradient-to-br from-navy-100 to-blue-100"
              },
              emerald: {
                bg: "bg-emerald-50",
                text: "text-emerald-600",
                iconBg: "bg-gradient-to-br from-emerald-100 to-green-100"
              },
              orange: {
                bg: "bg-orange-50",
                text: "text-orange-600",
                iconBg: "bg-gradient-to-br from-orange-100 to-yellow-100"
              }
            };

            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-navy-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-600 mb-4">{edu.period}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className={`text-center ${colorClasses[edu.color as keyof typeof colorClasses].bg} px-6 py-3 rounded-lg`}>
                      <p className={`text-2xl font-bold ${colorClasses[edu.color as keyof typeof colorClasses].text}`}>{edu.cgpa}</p>
                      <p className="text-sm text-gray-600">CGPA</p>
                    </div>
                    <div className={`hidden lg:block w-16 h-16 ${colorClasses[edu.color as keyof typeof colorClasses].iconBg} rounded-full flex items-center justify-center`}>
                      <Icon className={`${colorClasses[edu.color as keyof typeof colorClasses].text} text-xl`} size={24} />
                    </div>
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
