import Header from "~/components/Header";
import ProgressBar from "~/components/ProgressBar";

export default function About() {
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

  const ecommerceSkills = [
    { name: "WooCommerce/Shopify", percentage: 90, color: "emerald" },
    { name: "Marketing Digital", percentage: 80, color: "cyan" },
    { name: "Collecte De Leads", percentage: 70, color: "teal" },
    { name: "Gestion Client", percentage: 80, color: "sky" }
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        {/* Section Présentation */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-8">
            <img
              src="/images/benjamin-picture.png"
              alt="Benjamin Jacob"
              className="w-32 h-32 rounded-full mr-8 shadow-lg border-4 border-white"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Benjamin Jacob</h1>
              <p className="text-xl text-gray-600 mb-4">
                Développeur web &amp; mobile
              </p>
              <p className="text-gray-600">
                Développeur en formation, passionné par les nouvelles technologies et
                motivé par l&apos;envie de créer des solutions logicielles efficaces et innovantes.
              </p>
            </div>
          </div>
        </div>

        {/* Section Expérience */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Parcours Professionnel Numérique</h2>
          <div className="border-l-4 border-blue-500 pl-6 mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-800">Gérant d&apos;une activité E-commerce</h3>
              <span className="text-gray-600">Février 2017 - Janvier 2022</span>
            </div>
            <p className="text-gray-600 mb-4">
              Entrepreneur spécialisé dans la création et la gestion de boutiques en ligne Shopify et WordPress.
              Expertise en marketing digital et techniques de vente en ligne.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-700 mb-2">Développement E-commerce</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Création de sites web sur Shopify et WordPress</li>
                  <li>Personnalisation, Sécurisation et optimisation des plateformes</li>
                  <li>Intégration de solutions de paiement et logistique</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 mb-2">Marketing Digital</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Gestion de campagnes d&apos;acquisition et de retargeting sur Facebook et Instagram Ads</li>
                  <li>Stratégies de placement sur Snapchat</li>
                  <li>Optimisation SEO interne, SEO externe et campagnes SEA d&apos;acquisition et de retargeting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Compétences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Développement</h2>
            {mainSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">E-commerce</h2>
            {ecommerceSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Technologies</h2>
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

        {/* Section Formation */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Formation</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">RNCP Niveau 5 - Développeur Web et Web Mobile</h3>
                  <p className="text-gray-600">Holberton School, Thonon-les-Bains</p>
                </div>
                <span className="text-gray-600">Février 2024 - Actuellement</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Formation intensive de développement web</li>
                <li>Projets collaboratifs et individuels</li>
                <li>Gestion de projets logiciels</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">BAC STG Option Mercatique</h3>
                  <p className="text-gray-600">Lycée Anna de Noailles, Evian-les-Bains</p>
                </div>
                <span className="text-gray-600">2011</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section IA */}
        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Outils d&apos;Intelligence Artificielle</h3>
          
          {/* Cartes d'outils IA */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* ChatGPT */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <img
                    src="/ai-logos/chatgpt-logo.png"
                    alt="ChatGPT Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <h4 className="font-semibold text-gray-800">ChatGPT</h4>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Perplexity */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <img
                    src="/ai-logos/perplexity-logo.png"
                    alt="Perplexity Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <h4 className="font-semibold text-gray-800">Perplexity</h4>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Midjourney */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <img
                    src="/ai-logos/midjourney-logo.png"
                    alt="Midjourney Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <h4 className="font-semibold text-gray-800">Midjourney</h4>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Leonardo */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                  <img
                    src="/ai-logos/leonardo-logo.png"
                    alt="Leonardo Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <h4 className="font-semibold text-gray-800">Leonardo</h4>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-pink-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Graphique d'apprentissage */}
          <div className="relative h-32 bg-gray-50 rounded-lg p-4 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
              <div className="w-1/4 h-40% bg-green-400 rounded-t-lg mx-1 transform hover:scale-y-110 transition-transform" style={{ height: '40%' }}></div>
              <div className="w-1/4 h-60% bg-blue-400 rounded-t-lg mx-1 transform hover:scale-y-110 transition-transform" style={{ height: '60%' }}></div>
              <div className="w-1/4 h-80% bg-purple-400 rounded-t-lg mx-1 transform hover:scale-y-110 transition-transform" style={{ height: '80%' }}></div>
              <div className="w-1/4 h-95% bg-pink-400 rounded-t-lg mx-1 transform hover:scale-y-110 transition-transform" style={{ height: '95%' }}></div>
            </div>
            <div className="absolute top-2 left-0 w-full text-center text-sm font-semibold text-gray-700">
              Progression d&apos;apprentissage
            </div>
          </div>

          <div className="mt-6 text-center text-gray-600 text-sm">
            Passionné par l&apos;apprentissage continu et l&apos;innovation technologique
          </div>
        </div>
      </main>
    </>
  );
}
