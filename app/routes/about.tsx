import Header from "~/components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">À propos de moi</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Qui suis-je ?</h2>
          <p className="text-gray-600 mb-6">
            Je suis Benjamin Jacob, un étudiant passionné par le développement web à l'école Holberton.
            Mon parcours m'a permis de développer une solide base en programmation et une grande curiosité
            pour les nouvelles technologies.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mon parcours</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-800">Formation Holberton School</h3>
              <p className="text-gray-600">Formation intensive en développement web et programmation</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Compétences techniques</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Front-end</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>HTML5 / CSS3</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Back-end</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Centres d'intérêt</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">🚀</span>
                Nouvelles technologies
              </li>
              <li className="flex items-center">
                <span className="mr-2">💡</span>
                Résolution de problèmes
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌐</span>
                Développement web
              </li>
              <li className="flex items-center">
                <span className="mr-2">📚</span>
                Apprentissage continu
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
