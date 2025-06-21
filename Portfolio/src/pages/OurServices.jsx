import React, { useState } from 'react';

const services = {
  'AI/ML': `
At Data Globe, we harness the power of Artificial Intelligence and Machine Learning to help businesses unlock predictive insights and intelligent automation. Our AI/ML solutions include data-driven models for customer behavior, recommendation systems, fraud detection, image and speech recognition, and more. We ensure ethical, scalable, and performance-optimized implementations across industries like finance, healthcare, retail, and logistics.
  `,
  'Web Development': `
We design and develop secure, responsive, and high-performance websites that reflect your brand and business goals. Our full-stack web development services cover everything from custom UI/UX design and frontend frameworks (React, Vue, Angular) to backend development (Node.js, Django, Laravel) and database integration. Whether it's a corporate website, e-commerce platform, or SaaS dashboard — we deliver robust web solutions.
  `,
  'Mobile App Development': `
Our mobile app development team builds user-friendly, feature-rich apps for both Android and iOS platforms. Using technologies like React Native, Flutter, and native development kits, we create applications that are scalable, intuitive, and visually engaging. From social apps and booking systems to enterprise-level mobility solutions — we handle the full development lifecycle with Agile practices.
  `,
  'Data Engineering': `
Turn your raw data into actionable insights with our expert data engineering services. We build end-to-end data pipelines, implement scalable ETL/ELT workflows, and design data lakes and warehouses using tools like Apache Spark, Kafka, and Azure Synapse. Whether it's batch or real-time processing, we ensure your data infrastructure is reliable, efficient, and ready for analytics or AI.
  `,
  'Cloud': `
Leverage the full potential of cloud computing with our cloud consulting and implementation services. We help businesses migrate to, build on, and optimize for the cloud using platforms like AWS, Microsoft Azure, and Google Cloud. Our services include cloud architecture design, cost optimization, security implementation, DevOps pipelines, and serverless computing — ensuring scalability and business continuity.
  `,
  'Dashboards': `
Make smarter business decisions with interactive, real-time dashboards. We build custom dashboards using Power BI, Tableau, and open-source tools to give you insights into key metrics and KPIs. Whether it's sales performance, operational efficiency, or financial forecasting — our dashboards are designed for clarity, drill-down analysis, and executive-level reporting.
  `,
  'IOT': `
Connect and control the physical world with our IoT solutions. We design and implement smart systems that collect, transmit, and analyze data from sensors and devices — powering innovations in home automation, smart manufacturing, healthcare monitoring, and logistics tracking. Our IoT services include hardware integration, embedded systems, cloud syncing, and secure data communication protocols.
  `
};


const OurServices = () => {
  const [activeService, setActiveService] = useState('AI/ML');

  return (
    <section className="py-16 px-6 md:px-10 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar (Tabs) */}
        <div className="md:w-1/3 space-y-3">
          {Object.keys(services).map((service) => (
            <button
              key={service}
              onClick={() => setActiveService(service)}
              className={`w-full text-left px-4 py-2 rounded-md transition duration-200 font-medium ${
                activeService === service
                  ? 'bg-gray-900 text-white'
                  : 'bg-white hover:bg-gray-200'
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4">{activeService}</h3>
          <p className="text-gray-700 leading-relaxed">{services[activeService]}</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
