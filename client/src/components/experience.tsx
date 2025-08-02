import { CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "EXCELR",
      period: "May 2024 - August 2024",
      duration: "3 months",
      category: "Cybersecurity",
      color: "navy",
      achievements: [
        "Gained foundational knowledge in cybersecurity tools and techniques",
        "Developed expertise in threat analysis and security protocols"
      ]
    },
    {
      title: "Data Science Intern",
      company: "CodSoft",
      period: "April 2024 - June 2024",
      duration: "2 months",
      category: "Data Science",
      color: "emerald",
      achievements: [
        "Extracted actionable insights from complex datasets using Python",
        "Developed data-driven strategies for business decision making"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Bharat Intern",
      period: "May 2024 - June 2024",
      duration: "1 month",
      category: "Machine Learning",
      color: "orange",
      achievements: [
        "Developed and trained ML models to solve real-world problems",
        "Utilized Python libraries including scikit-learn and TensorFlow"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Techno Hack",
      period: "May 2024 - June 2024",
      duration: "1 month",
      category: "Web Development",
      color: "purple",
      achievements: [
        "Built responsive web pages including portfolio and authentication systems",
        "Implemented login authentication using HTML, CSS, and JavaScript"
      ]
    }
  ];

  const colorClasses = {
    navy: "bg-navy-100 text-navy-800",
    emerald: "bg-emerald-100 text-emerald-800",
    orange: "bg-orange-100 text-orange-800",
    purple: "bg-purple-100 text-purple-800"
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">Professional internships and achievements</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-navy-600 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.period}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`${colorClasses[exp.color as keyof typeof colorClasses]} px-3 py-1 rounded-full text-sm font-medium`}>
                    {exp.category}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2 text-gray-700">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <CheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" size={16} />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
