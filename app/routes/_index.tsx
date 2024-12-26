import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Benjamin Jacob - Développeur Web" },
    { name: "description", content: "Portfolio de Benjamin Jacob, étudiant développeur chez Holberton" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Benjamin Jacob</h1>
          <p className="text-xl text-gray-600 mb-8">Développeur Web | Étudiant chez Holberton</p>
          <div className="flex justify-center space-x-4">
            <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Voir mes projets
            </a>
            <a href="/contact" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
              Me contacter
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Compétences</h2>
            <ul className="space-y-2">
              <li>C</li>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Formation</h2>
            <p>Étudiant en développement web chez Holberton Thonon</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Objectifs</h2>
            <p>Devenir un développeur full-stack compétent et créatif</p>
          </div>
        </section>
      </main>
    </div>
  );
}
