
import { Robot, Database, BarChart, Activity, Cloud, Brain } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      title: "Artificial Intelligence",
      description: "Developing intelligent systems that simulate human thinking and decision-making, enabling automation and advanced problem-solving across various industries.",
      icon: Robot,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Science",
      description: "Applying statistical analysis, machine learning, and predictive modeling to extract actionable insights from complex data sets and drive strategic decision-making.",
      icon: Database,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Analytics",
      description: "Utilizing advanced analytical techniques to interpret data, patterns, trends, and insights.",
      icon: BarChart,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Visualization",
      description: "Transforming data into compelling visual representations using charts, graphs, and dashboards to facilitate understanding and support data-driven decisions.",
      icon: Activity,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud",
      description: "Leveraging cloud platforms for scalable computing resources, storage, and services to enhance flexibility, efficiency and collaboration in data management.",
      icon: Cloud,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Gen AI & LLM",
      description: "Harnessing advanced generative AI techniques and large language models to create sophisticated, human-like text and content.",
      icon: Brain,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-orange-400 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="text-orange-500" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {tech.title}
              </h3>
              
              <p className="text-white/90 leading-relaxed text-sm">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
