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

  const languages = [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Intermédiaire" }
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
                Développeur web & mobile
              </p>
              <p className="text-gray-600">
                Développeur en formation, passionné par les nouvelles technologies et
                motivé par l'envie de créer des solutions logicielles efficaces et innovantes.
              </p>
            </div>
          </div>
        </div>

        {/* Section Expérience */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Parcours Professionnel Numérique</h2>
          <div className="border-l-4 border-blue-500 pl-6 mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-800">Gérant d'une activité E-commerce</h3>
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
                  <li>Gestion de campagnes d'acquisition et de retargeting sur Facebook et Instagram Ads</li>
                  <li>Stratégies de placement sur Snapchat</li>
                  <li>Optimisation SEO interne, SEO externe et campagnes SEA d'acquisition et de retargeting</li>
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

        {/* Section Langues */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Langues</h2>
          <div className="grid grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">{language.name}</h3>
                <p className="text-gray-600">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
