import Header from "~/components/Header";
import BackgroundAnimation from "~/components/BackgroundAnimation";

export default function Contact() {
  return (
    <>
      <Header />
      <BackgroundAnimation />
      <main className="container mx-auto px-6 py-12 bg-transparent">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-moi</h1>
            <p className="text-xl text-gray-600">
              N&apos;hésitez pas à me contacter pour discuter de vos projets
            </p>
          </div>

          <div className="grid gap-8">
            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Email</h2>
                    <p className="text-gray-600">Pour toute demande professionnelle</p>
                  </div>
                </div>
                <a
                  href="mailto:benjaminjacob.pro@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
                >
                  Me contacter
                </a>
              </div>
            </div>
            {/* Location Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Localisation</h2>
                    <p className="text-gray-600">Thonon-les-Bains, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Je suis disponible pour des opportunités de développement web et mobile.
              <br />
              N&apos;hésitez pas à me contacter pour discuter de vos projets !
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
