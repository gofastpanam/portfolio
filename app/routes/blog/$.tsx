import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import BackgroundAnimation from "~/components/BackgroundAnimation";

export const meta: MetaFunction = () => {
  return [
    { title: "Le Chiffrement de César : Une Introduction à la Cryptographie Antique" },
    { name: "description", content: "Découvrez le chiffrement de César, une méthode historique de cryptographie, son fonctionnement et une implémentation moderne en C." },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params["*"];
  
  // Si c'est l'article sur le chiffrement de César
  if (slug === "chiffrement-cesar") {
    return json({
      title: "Le Chiffrement de César : Une Introduction à la Cryptographie Antique",
      content: true
    });
  }
  
  // Pour les autres articles, renvoyer une 404
  throw new Response("Not Found", { status: 404 });
}

export default function BlogPost() {
  const { title, content } = useLoaderData<typeof loader>();
  
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Header />
      <BackgroundAnimation />
      <main className="container mx-auto px-4 py-12">
        <article className="prose prose-invert lg:prose-xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          
          {content && (
            <>
              <div className="mb-8">
                <p className="text-gray-300 mb-4">
                  Dans l&apos;histoire de la cryptographie, le chiffrement de César est l&apos;une des méthodes les plus simples et les plus anciennes.
                  Malgré sa simplicité, il a marqué un tournant dans la manière dont les informations étaient sécurisées.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que le chiffrement de César ?</h2>
                  <p>
                    Le chiffrement de César, nommé d&apos;après Jules César qui l&apos;utilisait pour ses communications secrètes,
                    est une technique de chiffrement par substitution. Chaque lettre du message est remplacée par une lettre située
                    à un nombre fixe de positions plus loin dans l&apos;alphabet.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Comment fonctionne-t-il ?</h2>
                  <p>
                    Par exemple, avec un décalage de 3, A devient D, B devient E, et ainsi de suite. À la fin de l&apos;alphabet,
                    on recommence au début : X devient A, Y devient B, et Z devient C.
                  </p>
                  <pre className="bg-gray-800 p-4 rounded-lg my-4">
                    <code className="text-sm">
                      Message original : "HELLO WORLD"
                      Décalage : 3
                      Message chiffré : "KHOOR ZRUOG"
                    </code>
                  </pre>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Implémentation en C</h2>
                  <p>
                    Voici une implémentation simple du chiffrement de César en C :
                  </p>
                  <pre className="bg-gray-800 p-4 rounded-lg my-4">
                    <code className="text-sm">
{`char* cesar_encrypt(const char* message, int shift) {
    char* result = malloc(strlen(message) + 1);
    for(int i = 0; message[i] != '\\0'; i++) {
        if(isalpha(message[i])) {
            char base = isupper(message[i]) ? 'A' : 'a';
            result[i] = (message[i] - base + shift) % 26 + base;
        } else {
            result[i] = message[i];
        }
    }
    result[strlen(message)] = '\\0';
    return result;
}`}
                    </code>
                  </pre>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Limitations et Vulnérabilités</h2>
                  <p>
                    Le chiffrement de César présente plusieurs faiblesses :
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Nombre limité de clés possibles (seulement 25)</li>
                    <li>Vulnérable à l&apos;analyse fréquentielle</li>
                    <li>Facilement cassable par force brute</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Applications Modernes</h2>
                  <p>
                    Bien que le chiffrement de César ne soit plus utilisé pour la sécurité réelle, il reste pertinent pour :
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>L&apos;enseignement des concepts de base de la cryptographie</li>
                    <li>La compréhension des principes de substitution</li>
                    <li>Les jeux et puzzles éducatifs</li>
                  </ul>
                </section>
              </div>
            </>
          )}
        </article>
      </main>
    </div>
  );
}
