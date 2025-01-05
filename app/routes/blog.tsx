import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import BackgroundAnimation from "~/components/BackgroundAnimation";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Le Chiffrement de César : Une Introduction à la Cryptographie Antique",
      excerpt: "Découvrez le chiffrement de César, une méthode historique de cryptographie, son fonctionnement et une implémentation moderne en C avec le programme SafeMessage.",
      date: "5 Janvier 2025",
      category: "Sécurité",
      image: "/images/caesar-cipher.jpg",
      readTime: "8 min",
      tags: ["Cryptographie", "C", "Sécurité", "Algorithmes"],
      slug: "chiffrement-cesar"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Header />
      <BackgroundAnimation />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm bg-gray-700 text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-400 mb-4">{post.date}</div>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition duration-300"
                >
                  Lire la suite
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
