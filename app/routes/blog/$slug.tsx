import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
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
  const postsDir = path.join(process.cwd(), 'app', 'posts');
  
  try {
    // Lire le fichier markdown
    const filePath = path.join(postsDir, `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Convertir le markdown en HTML
    const htmlContent = marked(content);
    
    return json({ content: htmlContent });
  } catch (error) {
    throw new Response("Article non trouvé", { status: 404 });
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
