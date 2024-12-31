import Header from "~/components/Header";
import ProgressBar from "~/components/ProgressBar";

export default function About() {
  const mainSkills = [
    { name: "WordPress", percentage: 90, color: "green" },
    { name: "Front-end", percentage: 60, color: "blue" },
    { name: "Back-end", percentage: 70, color: "indigo" },
    { name: "Photoshop", percentage: 55, color: "purple" }
  ];

  const technicalSkills = [
    { name: "HTML/CSS", percentage: 65 },
    { name: "JavaScript", percentage: 50 },
    { name: "Python", percentage: 75 },
    { name: "C", percentage: 60 }
  ];

  const softSkills = [
    { name: "Travail d'équipe", percentage: 85, color: "yellow" },
    { name: "Communication", percentage: 80, color: "orange" },
    { name: "Résolution de problèmes", percentage: 75, color: "red" },
    { name: "Gestion de projet", percentage: 70, color: "pink" }
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        {/* Section Présentation */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <img
              src="/images/benjamin-picture.png"
              alt="Benjamin Jacob"
              className="w-32 h-32 rounded-full mr-8 shadow-lg border-4 border-white"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Qui suis-je ?</h2>
              <p className="text-gray-600 mb-6">
                Je suis Benjamin Jacob, un étudiant passionné par le développement web à l&apos;école Holberton.
                Mon parcours m&apos;a permis de développer une solide base en programmation et une grande curiosité
                pour les nouvelles technologies.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mon parcours</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-800">Formation Holberton School</h3>
              <p className="text-gray-600">Formation intensive en développement web et programmation</p>
            </div>
          </div>
        </div>

        {/* Section Compétences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Domaines d'expertise */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Domaines d&apos;expertise</h2>
            {mainSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>

          {/* Compétences techniques */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Compétences techniques</h2>
            {technicalSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                percentage={skill.percentage}
                color="blue"
              />
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Soft Skills</h2>
            {softSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
        </div>

        {/* Section Centres d'intérêt */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Centres d&apos;intérêt</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <span className="text-4xl mb-2">🚀</span>
              <h3 className="font-bold text-gray-800">Nouvelles technologies</h3>
              <p className="text-gray-600 text-sm">Veille technologique active</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-2">💡</span>
              <h3 className="font-bold text-gray-800">Résolution de problèmes</h3>
              <p className="text-gray-600 text-sm">Approche analytique</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-2">🌐</span>
              <h3 className="font-bold text-gray-800">Développement web</h3>
              <p className="text-gray-600 text-sm">Création d&apos;applications modernes</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-2">📚</span>
              <h3 className="font-bold text-gray-800">Apprentissage continu</h3>
              <p className="text-gray-600 text-sm">Formation permanente</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
