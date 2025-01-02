import { useState } from "react";
import Header from "~/components/Header";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "SEO TITAN - Conquer Rankings with Precision",
      description: "SEO TITAN est un outil d'analyse SEO avancé qui examine une page web et génère un rapport détaillé sur différents aspects SEO importants.",
      shortDescription: "Analyseur SEO avancé avec rapports détaillés et recommandations d'optimisation basées sur les meilleures pratiques.",
      technologies: ["Python", "BeautifulSoup4", "Requests", "Async/Await"],
      image: "/images/seotitan.jpg",
      github: "https://github.com/gofastpanam/SEO-TITAN",
      technicalDetails: {
        features: [
          "Architecture modulaire avec design patterns (Singleton, Strategy, Facade)",
          "Analyse technique complète (SSL, temps de chargement, mobile, HTTP headers)",
          "Parsing HTML avancé avec BeautifulSoup4",
          "Traitement asynchrone des requêtes avec aiohttp",
          "Système de cache avec LRU pour optimisation des performances",
          "Génération de rapports détaillés et priorisés"
        ],
        security: [
          "Validation stricte des URLs et entrées utilisateur",
          "Gestion sécurisée des sessions HTTP",
          "Protection contre les attaques courantes",
          "Timeouts et limites de requêtes configurables",
          "Nettoyage automatique des données sensibles"
        ],
        concepts: [
          "SOLID Principles et Clean Architecture",
          "Design Patterns (Singleton, Strategy, Facade)",
          "Programmation asynchrone et concurrence",
          "Optimisation des performances et mise en cache",
          "Tests unitaires et intégration continue"
        ],
        structure: [
          "main.py - Point d'entrée de l'application",
          "seoanalyzer/ - Package principal",
          "├── analyzer.py - Analyse SEO core",
          "├── suggestions.py - Moteur de recommandations",
          "└── report.py - Générateur de rapports",
          "tests/ - Tests unitaires et d'intégration"
        ],
        learnings: [
          "Architecture logicielle et design patterns",
          "Manipulation efficace des données web et HTML",
          "Optimisation des performances avec async/await",
          "Bonnes pratiques SEO techniques",
          "Tests et documentation professionnelle"
        ]
      }
    },
    {
      title: "ImageCypher - Hide in Plain Sight",
      description: "ImageCypher est une application de stéganographie qui permet de cacher des messages secrets dans des images. L'application combine la technique LSB (Least Significant Bit) avec un chiffrement AES robuste pour garantir la confidentialité des messages.",
      shortDescription: "Avec cette application de stéganographie, encodez vos messages dans les pixels d’une image via la méthode LSB et les sécurise avec un chiffrement AES robuste.",
      technologies: ["Python", "Pillow", "Cryptography", "AES"],
      image: "/images/imagecypher.jpg",
      github: "https://github.com/gofastpanam/ImageCypher",
      technicalDetails: {
        features: [
          "Stéganographie LSB pour cacher des messages dans les images",
          "Chiffrement AES des messages avant l'encodage",
          "Support des messages jusqu'à 1 MB",
          "Compatibilité avec PNG, JPG, JPEG et BMP",
          "Dérivation sécurisée des clés avec PBKDF2"
        ],
        security: [
          "Chiffrement AES via Fernet",
          "Dérivation des clés avec PBKDF2-HMAC-SHA256",
          "Validation stricte des entrées",
          "Protection contre les attaques courantes",
          "Nettoyage automatique des données sensibles"
        ],
        concepts: [
          "Stéganographie LSB",
          "Cryptographie AES",
          "Manipulation d'images",
          "Sécurité des données"
        ],
        structure: [
          "imagecipher.py - Code source principal",
          "requirements.txt - Dépendances Python",
        ],
        learnings: [
          "Programmation Python avancée",
          "Cryptographie et sécurité",
          "Manipulation d'images avec Pillow",
        ]
      }
    },
    {
      title: "Memory Game - Match the Mini Doges",
      description: "Memory Game est un jeu de mémoire mettant en vedette la collection Mini Doge Art, la première collection de 10 000 NFTs inscrite sur la blockchain Dogecoin.",
      shortDescription: "Testez votre mémoire en associant les paires de Mini Doges!",
      technologies: ["Python", "Tkinter", "PIL"],
      image: "/images/memory-game.jpg",
      github: "https://github.com/gofastpanam/memory_game",
      technicalDetails: {
        features: [
          "Interface graphique intuitive avec Tkinter",
          "Gestion optimisée de la mémoire (limite 100MB)",
          "Validation des images (format, taille, intégrité)",
          "Gestion des erreurs"
        ],
        structure: [
          "memory_game.py - Code principal du jeu",
          "card_back.png - Image du dos des cartes",
          "*.png - Images des Mini Doges",
          "requirements.txt - Dépendances Python"
        ],
        learnings: [
          "Manipulation d'images avec PIL",
          "Interface utilisateur avec Tkinter",
          "Gestion de la mémoire en Python",
          "Bonnes pratiques de sécurité"
        ]
      }
    },
    {
      title: "SafeMessage - Crack Caesar's code.",
      description: "SafeMessage est une application en C qui implémente le chiffrement de César, méthode de cryptage historique utilisée par Jules César pour ses communications militaires secrètes.",
      shortDescription: "Une application de chiffrement de César en C, incluant une analyse de fréquence et un mode de décryptage par bruteforce.",
      technologies: ["C", "Make"],
      image: "/images/safemessage.jpg",
      github: "https://github.com/gofastpanam/SafeMessage",
      technicalDetails: {
        features: [
          "Chiffrement/déchiffrement avec décalages -25 à +25",
          "Analyse de fréquence des lettres",
          "Mode bruteforce complet",
          "Préservation de la casse et caractères spéciaux"
        ],
        security: [
          "Protection contre les buffer overflow",
          "Validation des entrées utilisateur",
          "Gestion sécurisée des données",
          "Tests de sécurité systématiques"
        ],
        concepts: [
          "Arithmétique modulaire",
          "Analyse de fréquence",
          "Cryptanalyse basique"
        ],
        structure: [
          "SafeMessage.c - Code source principal",
          "Makefile - Script de compilation",
          "README.md - Documentation complète"
        ],
        learnings: [
          "Manipulation avancée des chaînes en C",
          "Gestion de la mémoire et pointeurs",
          "Cryptographie de base (César, fréquences)",
          "Sécurisation des entrées utilisateur",
          "Modularisation du code en C",
          "Utilisation de Make et GCC"
        ]
      }
    },
    {
      title: "StoryNest - Every Story Deserves a Name",
      shortDescription: "StoryNest est une application mobile en cours de développement alimentée par IA, conçue pour générer des contes pour enfants personnalisés captivants.",
      technologies: ["Typescript", "React Native", "Expo", "Firebase"],
      image: "/images/storynest.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mes Projets</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">
                  {expandedProject === index ? project.description : project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {expandedProject === index && project.technicalDetails && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Fonctionnalités clés</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {project.technicalDetails.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {project.technicalDetails.security && (
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Sécurité</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {project.technicalDetails.security.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.technicalDetails.concepts && (
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Concepts clés</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {project.technicalDetails.concepts.map((concept, i) => (
                            <li key={i}>{concept}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Structure du projet</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {project.technicalDetails.structure.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Apprentissages</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {project.technicalDetails.learnings.map((learning, i) => (
                          <li key={i}>{learning}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Voir sur GitHub
                    </a>
                  )}

                  {project.technicalDetails && (
                    <button
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {expandedProject === index ? "Voir moins" : "Voir plus"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
