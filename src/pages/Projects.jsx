import React from 'react';

const projects = [
  {
    name: 'Tic Tac Toe',
    description: 'Classic two-player game built with React.',
    image: 'https://via.placeholder.com/600x300?text=Tic+Tac+Toe',
    url: 'https://tic-tac-toe-vue-js-project.vercel.app/',
  },
  {
    name: 'Whack a Mole',
    description: 'Fast-paced game with moles popping up.',
    image: 'https://via.placeholder.com/600x300?text=Whack+a+Mole',
    url: 'https://whack-a-mole-seven-eta.vercel.app/',
  },
  {
    name: 'GS Hydro Tech Company',
    description: 'Website for GS Hydro Tech Company showcasing their services and products.',
    image: 'https://via.placeholder.com/600x300?text=Trivia+Quiz',
    url: 'https://varsha-vish.github.io/GS-Hydro-Tech/',
  },
];

const Projects = () => {
  return (
    <div className="bg-teal-700 min-h-screen px-4 py-10">
      <h1 className="text-white text-5xl font-light mb-10 text-center">PROJECTS</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={project.url}
              title={project.name}
              className="w-full h-64"
            ></iframe>
            <div className="p-5">
              <h2 className="text-teal-600 text-2xl font-semibold">{project.name}</h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
