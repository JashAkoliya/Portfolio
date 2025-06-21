import React, { useState } from 'react';

const techStack = {
  'Website Development': ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  'Mobile App Development': ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Java (Android)', 'Firebase'],
  'Data Engineering': ['Apache Spark', 'Apache Kafka', 'Airflow', 'Hadoop', 'Azure Data Factory', 'Snowflake'],
  'Backend & API Development': ['Node.js', 'Express.js', 'Python (Django/Flask)', 'Laravel', 'Go', 'GraphQL', 'REST APIs'],
  'Database': ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase DB', 'Redis', 'SQLite'],
  'Server': ['AWS EC2', 'Azure VM', 'Nginx', 'Docker', 'Kubernetes', 'Linux'],
};

const TechnologyRepo = () => {
  const [active, setActive] = useState(null);

  const toggle = (key) => {
    setActive(active === key ? null : key);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Our Technology Repository</h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          In the era of the ever-growing, ever-expanding market, every business faces challenges like never before! But as a leading app development company in India, we help you rewrite the map of innovative strategy and execution through AI-driven applications, blockchain solutions, and IoT-powered systems.
        </p>

        <div className="space-y-4">
          {Object.keys(techStack).map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <button
                onClick={() => toggle(category)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-teal-700"
              >
                {category}
                <span className="text-xl">{active === category ? '-' : '+'}</span>
              </button>
              {active === category && (
                <ul className="mt-4 ml-2 list-disc list-inside text-gray-700">
                  {techStack[category].map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyRepo;
