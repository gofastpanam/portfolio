import { LoaderFunctionArgs, json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  
  if (!slug) {
    throw new Response("Slug manquant", { status: 400 });
  }

  try {
    // Chemin absolu vers le dossier posts
    const postsDir = path.join(process.cwd(), 'app', 'posts');
    const filePath = path.join(postsDir, `${slug}.md`);
    
    console.log('Tentative de lecture du fichier:', filePath);
    
    // Vérifier si le fichier existe
    try {
      await fs.access(filePath);
    } catch {
      console.error('Fichier non trouvé:', filePath);
      throw new Response("Article non trouvé", { status: 404 });
    }
    
    // Lire et convertir le contenu
    const content = await fs.readFile(filePath, 'utf-8');
    console.log('Contenu lu avec succès');
    
    const htmlContent = marked(content);
    console.log('Markdown converti en HTML');
    
    return json({ content: htmlContent });
  } catch (error) {
    console.error('Erreur lors du chargement de l\'article:', error);
    if (error instanceof Response) {
      throw error;
    }
    throw new Response("Erreur lors du chargement de l'article", { status: 500 });
  }
}

export default function BlogPost() {
  const { content } = useLoaderData<typeof loader>();
  
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Header />
      <BackgroundAnimation />
      <main className="container mx-auto px-4 py-12">
        <article 
          className="prose prose-invert lg:prose-xl mx-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </div>
  );
}
