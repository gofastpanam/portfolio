import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Le Chiffrement de César : Une Introduction à la Cryptographie Antique" },
    { name: "description", content: "Découvrez le chiffrement de César, une méthode historique de cryptographie, son fonctionnement et une implémentation moderne en C." },
  ];
};

export default function ChiffrementCesar() {
  return (
    <article className="prose prose-invert lg:prose-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Le Chiffrement de César : Une Introduction à la Cryptographie Antique</h1>
      
      <div className="mb-8">
        <p className="text-gray-300 mb-4">
          Dans l&apos;histoire de la cryptographie, le chiffrement de César est l&apos;une des méthodes les plus simples et les plus anciennes.
          Malgré sa simplicité, il a marqué un tournant dans la manière dont les informations étaient sécurisées.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Qu&apos;est-ce que le Chiffrement de César ?</h2>
        <p className="mb-4">
          Le chiffrement de César est une technique de chiffrement par substitution dans laquelle chaque lettre du message
          original est décalée d&apos;un nombre fixe de positions dans l&apos;alphabet.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <p className="font-mono">Message original : BONJOUR</p>
          <p className="font-mono">Message chiffré : ERQMRXU</p>
          <div className="mt-2">
            <p>Transformation des lettres (décalage de 3) :</p>
            <ul className="list-none pl-4">
              <li>B → E (décalage de 3)</li>
              <li>O → R (décalage de 3)</li>
              <li>N → Q (décalage de 3)</li>
              <li>J → M (décalage de 3)</li>
              <li>O → R (décalage de 3)</li>
              <li>U → X (décalage de 3)</li>
              <li>R → U (décalage de 3)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Implémentation Moderne : SafeMessage</h2>
        <p className="mb-4">
          Voici une implémentation moderne du chiffrement de César en C, avec des fonctionnalités avancées.
          Le code source complet est disponible sur GitHub, voici les parties essentielles :
        </p>

        <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-6">
          <pre className="text-sm text-gray-300">
            <code>{`// Fonction pour chiffrer un texte
void chiffrer_cesar(char texte[], int decalage) {
    // Normaliser le décalage pour qu'il soit toujours positif
    decalage = ((decalage % 26) + 26) % 26;
    
    for (int i = 0; texte[i] != '\\0'; i++) {
        if (isalpha(texte[i])) {
            char base = islower(texte[i]) ? 'a' : 'A';
            texte[i] = (texte[i] - base + decalage) % 26 + base;
        }
    }
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-6">
          <pre className="text-sm text-gray-300">
            <code>{`// Fonction pour l'analyse de fréquence
void analyser_frequence(const char texte[]) {
    int freq[26] = {0};
    int total = 0;

    for (int i = 0; texte[i] != '\\0'; i++) {
        if (isalpha(texte[i])) {
            freq[tolower(texte[i]) - 'a']++;
            total++;
        }
    }

    printf("\\nAnalyse de fréquence des lettres :\\n");
    for (int i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            printf("%c: %d (%.1f%%)\\n", 
                   'A' + i, 
                   freq[i], 
                   (float)freq[i] * 100 / total);
        }
    }
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Caractéristiques du Programme</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Sécurité des Entrées</h3>
            <ul className="list-disc pl-4">
              <li>Validation des entrées utilisateur</li>
              <li>Protection contre les débordements</li>
              <li>Gestion des erreurs robuste</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fonctionnalités Avancées</h3>
            <ul className="list-disc pl-4">
              <li>Analyse de fréquence</li>
              <li>Attaque par force brute</li>
              <li>Conservation de la casse</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Aspects Techniques Notables</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Normalisation du Décalage</h3>
            <p>
              La formule <code>((decalage % 26) + 26) % 26</code> garantit que le décalage reste toujours 
              dans l&apos;intervalle [0, 25], même avec des entrées négatives ou supérieures à 26.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Préservation de la Casse</h3>
            <p>
              Le programme maintient la casse des lettres en utilisant une base différente pour les majuscules 
              et les minuscules : <code>base = islower(texte[i]) ? &apos;a&apos; : &apos;A&apos;</code>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Vulnérabilités et Limites</h2>
        <div className="bg-red-900/30 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-2">⚠️ Avertissement de Sécurité</h3>
          <ul className="list-disc pl-4">
            <li>Vulnérable aux attaques par force brute (seulement 26 possibilités)</li>
            <li>Sensible à l&apos;analyse de fréquence</li>
            <li>Ne convient pas pour la cryptographie moderne</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Applications Modernes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Éducation</h3>
            <p>Introduction parfaite aux concepts de cryptographie</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Jeux</h3>
            <p>Utilisé dans les puzzles et énigmes</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Histoire</h3>
            <p>Reconstitutions historiques et études</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          Le chiffrement de César, bien qu&apos;obsolète en termes de sécurité moderne, reste un excellent
          outil pédagogique pour comprendre les fondamentaux de la cryptographie. Notre implémentation en C
          offre une plateforme interactive pour explorer ces concepts tout en illustrant les bonnes pratiques
          de programmation.
        </p>
      </section>
    </article>
  );
}
