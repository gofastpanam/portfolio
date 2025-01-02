import { Link } from "@remix-run/react";
import Header from "~/components/Header";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Les Design Patterns en Python",
      excerpt: "Découvrez comment utiliser efficacement les design patterns pour améliorer la qualité de votre code Python...",
      date: "3 Janvier 2025",
      category: "Python",
      image: "/images/python-patterns.jpg",
      readTime: "5 min",
      tags: ["Python", "Design Patterns", "Clean Code"]
    },
    {
      id: 2,
      title: "Améliorez votre SEO avec SEO Titan : Guide complet",
      excerpt: "Découvrez comment SEO Titan vous aide à analyser vos pages web et optimiser votre SEO grâce à des rapports détaillés et des suggestions concrètes.",
      date: "2 Janvier 2025",
      category: "SEO",
      image: "/images/seotitan.jpg",
      readTime: "7 min",
      tags: ["SEO", "Analyse web", "Optimisation"]
    },
    {
      id: 3,
      title: "Créer une UI moderne avec Tailwind",
      excerpt: "Les meilleures pratiques pour créer des interfaces utilisateur modernes et réactives avec Tailwind CSS...",
      date: "31 Décembre 2024",
      category: "Frontend",
      image: "/images/modern-ui.jpg",
      readTime: "6 min",
      tags: ["Tailwind", "CSS", "UI/UX"]
    },
    {
      id: 4,
      title: "SEO Titan : Analyse Technique et Architecture",
      excerpt: "Plongée dans les coulisses de SEO Titan : découvrez comment j&aposai développé un outil d&aposanalyse SEO puissant en Python...",
      date: "30 Décembre 2024",
      category: "SEO",
      image: "/images/seotitan-architecture.jpg",
      readTime: "10 min",
      tags: ["Python", "SEO", "Architecture"]
    },
    {
      id: 5,
      title: "Techniques Avancées de Web Scraping avec SEO Titan",
      excerpt: "Comment SEO Titan utilise le web scraping éthique pour analyser et améliorer le référencement de vos pages...",
      date: "29 Décembre 2024",
      category: "SEO",
      image: "/images/seotitan-scraping.jpg",
      readTime: "8 min",
      tags: ["Web Scraping", "Python", "SEO"]
    },
    {
      id: 6,
      title: "SafeMessage : Cryptographie Moderne en C",
      excerpt: "Exploration détaillée de l&aposimplémentation du chiffrement de César dans SafeMessage et des principes de cryptographie...",
      date: "28 Décembre 2024",
      category: "Sécurité",
      image: "/images/safemessage-crypto.jpg",
      readTime: "9 min",
      tags: ["C", "Cryptographie", "Sécurité"]
    },
    {
      id: 7,
      title: "Optimisation des Performances avec SEO Titan",
      excerpt: "Comment j&aposai optimisé SEO Titan pour analyser rapidement des milliers de pages web. Techniques et astuces...",
      date: "27 Décembre 2024",
      category: "Performance",
      image: "/images/seotitan-performance.jpg",
      readTime: "7 min",
      tags: ["Python", "Performance", "SEO"]
    },
    {
      id: 8,
      title: "Interface en Ligne de Commande : Le Cas de SafeMessage",
      excerpt: "Création d&aposune CLI intuitive et ergonomique en C. Retour d&aposexpérience sur SafeMessage...",
      date: "26 Décembre 2024",
      category: "CLI",
      image: "/images/safemessage-cli.jpg",
      readTime: "6 min",
      tags: ["C", "CLI", "UX"]
    },
    {
      id: 9,
      title: "Analyse SEO Automatisée avec Python",
      excerpt: "Comment automatiser l&aposanalyse SEO de vos sites web avec Python. Techniques utilisées dans SEO Titan...",
      date: "25 Décembre 2024",
      category: "Automatisation",
      image: "/images/seo-automation.jpg",
      readTime: "8 min",
      tags: ["Python", "SEO", "Automatisation"]
    },
    {
      id: 10,
      title: "Tests Unitaires en C : L&aposExemple de SafeMessage",
      excerpt: "Mise en place de tests unitaires robustes pour des applications C. Retour d&aposexpérience sur SafeMessage...",
      date: "24 Décembre 2024",
      category: "Testing",
      image: "/images/safemessage-testing.jpg",
      readTime: "7 min",
      tags: ["C", "Testing", "Qualité"]
    },
    {
      id: 11,
      title: "Gestion de la Mémoire en C : Cas Pratiques",
      excerpt: "Techniques avancées de gestion de la mémoire en C, illustrées par des exemples concrets de SafeMessage...",
      date: "23 Décembre 2024",
      category: "Programmation",
      image: "/images/c-memory.jpg",
      readTime: "11 min",
      tags: ["C", "Mémoire", "Optimisation"]
    },
    {
      id: 12,
      title: "SEO Technique : Au-delà des Bases",
      excerpt: "Techniques avancées de SEO technique implémentées dans SEO Titan. De l&aposanalyse à l&aposoptimisation...",
      date: "22 Décembre 2024",
      category: "SEO",
      image: "/images/technical-seo.jpg",
      readTime: "9 min",
      tags: ["SEO", "Technique", "Optimisation"]
    },
    {
      id: 13,
      title: "Cryptographie en C : Implémentation et Sécurité",
      excerpt: "Guide approfondi sur l&aposimplémentation sécurisée d&aposalgorithmes de cryptographie en C...",
      date: "21 Décembre 2024",
      category: "Sécurité",
      image: "/images/c-cryptography.jpg",
      readTime: "10 min",
      tags: ["C", "Cryptographie", "Sécurité"]
    },
    {
      id: 14,
      title: "Analyse de Performance SEO avec Python",
      excerpt: "Comment SEO Titan analyse et améliore les performances de vos pages pour un meilleur référencement...",
      date: "20 Décembre 2024",
      category: "SEO",
      image: "/images/seo-performance.jpg",
      readTime: "8 min",
      tags: ["SEO", "Python", "Performance"]
    },
    {
      id: 15,
      title: "Développement Multiplateforme en C",
      excerpt: "Retour d&aposexpérience sur le développement de SafeMessage pour différentes plateformes...",
      date: "19 Décembre 2024",
      category: "C",
      image: "/images/c-multiplatform.jpg",
      readTime: "7 min",
      tags: ["C", "Multiplateforme", "Développement"]
    },
    {
      id: 16,
      title: "SEO et Machine Learning : Le Futur",
      excerpt: "Comment SEO Titan utilise le machine learning pour prédire et améliorer le référencement...",
      date: "18 Décembre 2024",
      category: "SEO",
      image: "/images/seo-ml.jpg",
      readTime: "12 min",
      tags: ["SEO", "Machine Learning", "IA"]
    },
    {
      id: 17,
      title: "Sécurité des Applications CLI en C",
      excerpt: "Bonnes pratiques de sécurité pour les applications en ligne de commande, illustrées par SafeMessage...",
      date: "17 Décembre 2024",
      category: "Sécurité",
      image: "/images/cli-security.jpg",
      readTime: "9 min",
      tags: ["C", "Sécurité", "CLI"]
    },
    {
      id: 18,
      title: "Optimisation des Rapports SEO",
      excerpt: "Comment SEO Titan génère des rapports SEO clairs et actionnables. De l&aposanalyse à la présentation...",
      date: "16 Décembre 2024",
      category: "SEO",
      image: "/images/seo-reports.jpg",
      readTime: "6 min",
      tags: ["SEO", "Reporting", "UX"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* En-tête du Blog */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient mb-4">
            Blog Tech
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mes articles sur le développement, les nouvelles technologies et mes retours d&aposexpérience.
          </p>
        </div>

        {/* Grille des Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image de l'article avec overlay au survol */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium z-20">
                  {post.category}
                </span>
              </div>

              {/* Contenu de l'article */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} de lecture</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bouton Lire la suite */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Lire la suite
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow-rotate"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Restez informé des derniers articles
              </h2>
              <p className="text-gray-600 mb-6">
                Inscrivez-vous à la newsletter pour ne manquer aucun article et recevoir des contenus exclusifs.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  S&aposinscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}