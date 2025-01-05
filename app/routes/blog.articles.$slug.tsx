import { LoaderFunctionArgs, json, MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Header from "~/components/Header";
import BackgroundAnimation from "~/components/BackgroundAnimation";
import { promises as fs } from 'fs';
import path from 'path';
import { marked } from 'marked';

export const meta: MetaFunction = () => {
  return [
    { title: "Article du Blog" },
    { name: "description", content: "Article du blog" },
  ];
};

interface LoaderData {
  content: string;
  slug: string;
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  console.log("Loader appelé avec les paramètres:", params);
  console.log("URL de la requête:", request.url);
  
  const { slug } = params;
  
  if (!slug) {
    console.error("Pas de slug trouvé dans les paramètres");
    throw new Response("Slug manquant", { status: 400 });
  }

  try {
    // Chemin absolu vers le dossier posts
    const postsDir = path.join(process.cwd(), 'app', 'posts');
    console.log("Dossier posts:", postsDir);
    const filePath = path.join(postsDir, `${slug}.md`);
    console.log("Chemin du fichier:", filePath);
    console.log("Vérification de l'existence du fichier...");
    
    // Vérifier si le fichier existe
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
    
    // Lire et convertir le contenu
    const rawContent: string = await fs.readFile(filePath, 'utf-8');
    console.log("Contenu du fichier lu (début):", rawContent.substring(0, 100));
    
    // Convertir le markdown en HTML de manière synchrone
    const htmlContent: string = marked.parse(rawContent, { async: false }) as string;
    console.log("HTML généré (début):", htmlContent.substring(0, 100));
    
    return json<LoaderData>({
      content: htmlContent,
      slug
    });
  } catch (error) {
    console.error("Erreur dans le loader:", error);
    if (error instanceof Response) {
      throw error;
    }
    throw new Response("Erreur lors du chargement de l'article", { status: 500 });
  }
}

export default function BlogPost() {
  const { content, slug } = useLoaderData<typeof loader>();
  
  console.log("Slug actuel:", slug);
  console.log("Contenu chargé (début):", content.substring(0, 100));
  
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Header />
      <BackgroundAnimation />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded transition duration-300"
            prefetch="intent"
          >
            ← Retour aux articles
          </Link>
        </div>
        <article 
          className="prose prose-invert lg:prose-xl mx-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </div>
  );
}
