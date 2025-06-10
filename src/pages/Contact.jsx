import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const contacts = [
  {
    icon: <FaEnvelope size={24} />,
    text: 'varshavish48@gmail.com',
  },
  {
    icon: <FaGithub size={24} />,
    text: 'https://github.com/varsha-vish',
    href: 'https://github.com/varsha-vish',
  },
  {
    icon: <FaLinkedin size={24} />,
    text: 'https://www.linkedin.com/in/varsha-v-527b61bb/',
    href: 'https://www.linkedin.com/in/varsha-v-527b61bb/',
  },
];

const Contact = () => {
  return (
    <div className="bg-teal-700 min-h-screen px-6 py-12">
      <h1 className="text-white text-5xl font-light mb-10">CONTACT</h1>
      <div className="space-y-8">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className="bg-[#6d4c41] text-white rounded-full p-4 shadow-lg">
              {contact.icon}
            </div>
            <a
              href={contact.href}
              className="text-white text-xl hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
