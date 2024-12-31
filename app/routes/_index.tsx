import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import ProgressBar from "~/components/ProgressBar";

export default function Index() {
  const mainSkills = [
    { name: "Front-end", percentage: 70, color: "blue" },
    { name: "Back-end", percentage: 70, color: "indigo" },
    { name: "WordPress", percentage: 90, color: "green" },
    { name: "Photoshop", percentage: 60, color: "purple" }
  ];

  const technicalSkills = [
    { name: "HTML/CSS", percentage: 70 },
    { name: "JavaScript", percentage: 50 },
    { name: "Python", percentage: 70 },
    { name: "C", percentage: 60 }
  ];

  const recentProjects = [
    {
      title: "Memory Game",
      description: "Jeu de mémoire en Python avec Tkinter",
      icon: "",
      image: "/images/memory-game.jpg",
      tags: ["Python", "Tkinter", "UI Design"]
    },
    {
      title: "SafeMessage",
      description: "Application de chiffrement en C",
      icon: "",
      image: "/images/safemessage.jpg",
      tags: ["C", "Cryptographie", "Sécurité"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-8">
            <img
              src="/images/benjamin-picture.png"
              alt="Benjamin Jacob"
              className="w-48 h-48 rounded-full mx-auto shadow-lg border-4 border-white"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Benjamin Jacob</h1>
          <p className="text-xl text-gray-600 mb-8">
            Développeur web en formation à Holberton School, passionné par l&apos;apprentissage
            et la création d&apos;applications
          </p>
          <div className="relative w-48 h-48 mx-auto mb-12 transform hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
            <img
              src="/images/holberton.png"
              alt="Holberton Logo"
              className="relative w-full h-full object-contain"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir mes projets
            </Link>
            <Link
              to="/about"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Compétences</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Main Skills */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Domaines d&apos;expertise</h3>
              {mainSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>

            {/* Technical Skills */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Compétences techniques</h3>
              {technicalSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill.name}
                  percentage={skill.percentage}
                  color="blue"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projets Récents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {recentProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{project.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/gofastpanam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
