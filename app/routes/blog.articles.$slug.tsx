import { LoaderFunctionArgs, json, MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Header from "~/components/Header";
import BackgroundAnimation from "~/components/BackgroundAnimation";
import { promises as fs } from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

interface FrontMatter {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
}

interface LoaderData {
  content: string;
  frontMatter: FrontMatter;
  slug: string;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: "Article non trouvé" },
      { name: "description", content: "L'article demandé n'a pas été trouvé" },
    ];
  }

  const { frontMatter } = data;
  return [
    { title: frontMatter.title },
    { name: "description", content: frontMatter.description },
    { name: "author", content: frontMatter.author },
    { name: "keywords", content: frontMatter.tags.join(", ") },
    { property: "og:title", content: frontMatter.title },
    { property: "og:description", content: frontMatter.description },
    { property: "og:type", content: "article" },
    { property: "article:published_time", content: frontMatter.date },
    { property: "article:author", content: frontMatter.author },
    { property: "article:tag", content: frontMatter.tags.join(", ") },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  
  if (!slug) {
    throw new Response("Slug manquant", { status: 400 });
  }

  try {
    const postsDir = path.join(process.cwd(), 'app', 'posts');
    const filePath = path.join(postsDir, `${slug}.md`);
    
    try {
      const stats = await fs.stat(filePath);
      console.log("Le fichier existe, taille:", stats.size, "bytes");
    } catch (error) {
      console.error("Erreur lors de la vérification du fichier:", error);
      console.log("Tentative de lecture du répertoire posts...");
      const files = await fs.readdir(postsDir);
      console.log("Fichiers disponibles dans posts:", files);
      throw new Response("Article non trouvé", { status: 404 });
    }
    
    const source = await fs.readFile(filePath, 'utf-8');
    const { data: frontMatter, content: markdownContent } = matter(source);
    const htmlContent = marked.parse(markdownContent, { async: false }) as string;
    
    return json<LoaderData>({
      content: htmlContent,
      frontMatter: frontMatter as FrontMatter,
      slug
    });
  } catch (error) {
    console.error("Erreur dans le loader:", error);
    if (error instanceof Response) throw error;
    throw new Response("Erreur lors du chargement de l'article", { status: 500 });
  }
}

export default function BlogPost() {
  const { content, frontMatter } = useLoaderData<typeof loader>();
  
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Header />
      <BackgroundAnimation />
      
      <main className="container mx-auto px-4 py-12 relative z-20">
        <nav className="mb-8">
          <Link
            to="/blog"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded transition duration-300"
            prefetch="intent"
          >
            ← Retour aux articles
          </Link>
        </nav>

        <article className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">{frontMatter.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <time dateTime={frontMatter.date}>
                {new Date(frontMatter.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>Par {frontMatter.author}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {frontMatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-600/30 text-blue-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div 
            className="prose prose-invert max-w-none text-gray-100"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <style dangerouslySetInnerHTML={{ __html: `
            .prose h1 {
              font-size: 2.5rem !important;
              font-weight: 700 !important;
              margin-bottom: 2rem !important;
              padding-bottom: 1rem !important;
              border-bottom: 1px solid rgba(59, 130, 246, 0.3) !important;
              color: white !important;
            }
            .prose h2 {
              font-size: 2rem !important;
              font-weight: 600 !important;
              margin-top: 3rem !important;
              margin-bottom: 1.5rem !important;
              color: rgb(191, 219, 254) !important;
            }
            .prose h3 {
              font-size: 1.5rem !important;
              font-weight: 500 !important;
              margin-top: 2rem !important;
              margin-bottom: 1rem !important;
              color: rgb(147, 197, 253) !important;
            }
            .prose p {
              color: rgb(243, 244, 246) !important;
              line-height: 1.75 !important;
            }
            .prose pre {
              background-color: rgba(17, 24, 39, 0.5) !important;
              border: 1px solid rgba(59, 130, 246, 0.2) !important;
              padding: 1rem !important;
            }
            .prose img {
              border-radius: 0.5rem !important;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
            }
          `}} />
        </article>
      </main>
    </div>
  );
}
