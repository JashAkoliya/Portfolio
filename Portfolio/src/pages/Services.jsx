import React from 'react';
import {
  Code, Smartphone, Cpu, Cloud, BarChart3, Database, Globe2
} from 'lucide-react'; // Optional icons (install lucide-react)

const services = [
  {
    title: 'AI / ML',
    icon: <Cpu size={28} className="text-teal-600" />,
    description: `Unlock smarter business solutions with AI & ML. We build predictive models, recommendation engines, chatbots, and intelligent automation pipelines tailored for industries like healthcare, fintech, and logistics.`,
  },
  {
    title: 'Web Development',
    icon: <Code size={28} className="text-teal-600" />,
    description: `Build responsive, secure, and scalable websites using modern tech stacks like React, Next.js, Node.js, and Django. We cover everything from business sites to SaaS dashboards and admin portals.`,
  },
  {
    title: 'Mobile App Development',
    icon: <Smartphone size={28} className="text-teal-600" />,
    description: `We develop high-performance iOS and Android apps using Flutter, React Native, and native platforms. Get engaging, intuitive, and scalable apps built for users — from startups to enterprise mobility.`,
  },
  {
    title: 'Data Engineering',
    icon: <Database size={28} className="text-teal-600" />,
    description: `Turn raw data into insights with robust pipelines. We specialize in ETL/ELT, real-time data streaming, and warehouse solutions using Spark, Kafka, Airflow, and Azure Synapse.`,
  },
  {
    title: 'Cloud Solutions',
    icon: <Cloud size={28} className="text-teal-600" />,
    description: `Migrate, scale, and manage your infrastructure on AWS, Azure, or GCP. Our DevOps and cloud experts design secure, cost-effective, and high-availability cloud systems tailored to your business needs.`,
  },
  {
    title: 'Dashboards & Analytics',
    icon: <BarChart3 size={28} className="text-teal-600" />,
    description: `Make data-driven decisions with custom dashboards built using Power BI, Tableau, or embedded analytics. Track KPIs, analyze trends, and monitor your performance in real-time.`,
  },
  {
    title: 'IoT Solutions',
    icon: <Globe2 size={28} className="text-teal-600" />,
    description: `Connect smart devices and automate operations. We build IoT systems with sensor integration, cloud sync, and real-time analytics for industries like manufacturing, healthcare, and logistics.`,
  },
    {
    title: 'UI / UX Design',
    icon: <Code size={28} className="text-teal-600" />, // Replace with a better icon if needed
    description: `Design stunning, intuitive interfaces that drive engagement and usability. Our UI/UX experts create user-centered designs using Figma, Adobe XD, and design systems tailored to your brand.`,
  },
  {
    title: 'DevOps & Automation',
    icon: <Cpu size={28} className="text-teal-600" />, // Replace with a gear or automation icon
    description: `Accelerate development and delivery with CI/CD pipelines, infrastructure as code, and containerization using Docker, Kubernetes, Jenkins, and GitHub Actions.`,
  },
];

const Services = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-teal-700">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
