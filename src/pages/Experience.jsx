import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Wepa.Digital",
      companyDescription: "Paper Manufacturing company – Smart Factory",
      duration: "06/2024 – 05/2025",
      responsibilities: [
        "Developed 2 smart factory web applications from scratch using Vue JS, typescript and Flask.",
        "Collaborate with global cross functional team in an Agile Scrum environment to define, design and ship new features.",
        "Develop reusable components and write automated tests using Cypress.",
        "Work closely with backend developers to integrate APIs.",
        "Stay updated with latest cutting-edge technologies to bring best practices to the team."
      ],
      tags: ["Vue.js", "TypeScript", "Flask", "Cypress", "Agile"]
    },
    {
      title: "Senior Technical Analyst",
      company: "Nepa",
      companyDescription: "Market Research company",
      duration: "09/2021 – 06/2024",
      responsibilities: [
        "Automated manual process by creating a desktop app using Python and PyQT, resulting in a drastic reduction from 3 hours of work to a mere 2 mins.",
        "Worked on web development project utilizing Vue JS framework, Flask, Node JS, Docker, MongoDB, GCP, TeamCity.",
        "Developed a Python script for reading data packages, now an integral tool within the team's workflow.",
        "Collaborate with Global Project Managers to configure the Brand Tracking Dashboards using tech stack Google Cloud Platform (GCP), Git, R, and TeamCity. Delivered more than 50 Brand Tracker dashboards to clients within SLA."
      ],
      tags: ["Python", "PyQT", "Vue.js", "Flask", "Node.js", "Docker", "MongoDB", "GCP"]
    },
    {
      title: "Associate Digital Innovation Engineer",
      company: "Buckman",
      companyDescription: "Paper and Leather company",
      duration: "06/2020 - 08/2021",
      responsibilities: [
        "Performed statistical and root cause analysis of live data.",
        "Prepared regular reports using Excel/Power BI.",
        "Conducted thorough end-to-end testing of web and mobile apps, identifying and documenting defects using Jira platform.",
        "Created wireframes for web and mobile versions using the Balsamiq tool.",
        "Involved in Controller setup and map process measurements data in SQL server."
      ],
      tags: ["Data Analysis", "Power BI", "Jira", "Balsamiq", "SQL Server"]
    },
    {
      title: "Technical Engineer",
      company: "Ecolab Nalco Water",
      companyDescription: "Fortune 500",
      duration: "04/2018 - 11/2019",
      responsibilities: [
        "Data mining using Excel / Python – Analysing real-time streaming data troubleshoot Cooling water systems issues, focusing on identifying and predicting membrane issues.",
        "Utilized data analysis techniques to anticipate the optimal time for performing CIP cleaning, ensuring prevention of potential system problems.",
        "Performed root cause analysis of live streaming data."
      ],
      tags: ["Python", "Excel", "Data Mining", "Real-time Analytics"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">EXPERIENCE</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 rounded"></div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 via-cyan-200 to-indigo-200"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 ml-20">
            {/* Timeline dot */}
            <div className="absolute -left-12 top-6 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
            
            {/* Experience card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              {/* Header section */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 border-b border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h2>
                    <div className="flex items-center gap-2 text-teal-700 mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="font-medium text-lg">{exp.company}</span>
                      <span className="text-gray-600 text-sm">({exp.companyDescription})</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-white text-teal-700 text-xs font-medium rounded-full border border-teal-200 hover:bg-teal-50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities & Achievements</h3>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-16 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Career Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">7+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
            <div className="text-gray-600">Dashboards Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
            <div className="text-gray-600">Web Apps Built and Maintained</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;