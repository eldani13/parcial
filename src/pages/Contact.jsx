import Footer from "../components/Footer";
import Chat from "../components/Chat";

export default function Contact() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            ¡Estamos aquí para ayudarte!
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-6 opacity-90 animate-fade-in-up">
            Nuestro equipo está dedicado a ofrecerte la mejor experiencia. Ya
            sea que tengas preguntas, inquietudes o necesites asesoramiento,
            estamos a solo un clic de distancia.
          </p>

          <div className="flex justify-center space-x-4 mt-6 animate-fade-in-right">
            <button className="px-8 py-4 bg-white text-red-500 font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform">
              Contáctanos Ahora
            </button>
            <button className="px-8 py-4 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300 transform">
              Más Información
            </button>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-1/4 h-full bg-white bg-opacity-10 backdrop-blur-md hidden lg:block">
          <div className="p-8 text-left">
            <h2 className="text-2xl font-semibold mb-4">¿Por qué elegirnos?</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-xl">✔️</span>
                <span>Asistencia personalizada</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-xl">✔️</span>
                <span>Soporte 24/7</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-xl">✔️</span>
                <span>Respuestas rápidas y eficaces</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 mt-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 text-left animate-fade-in-left">
              <blockquote className="text-xl italic">
                "El mejor servicio al cliente que he recibido. Rápido, amable y
                resolutivo."
              </blockquote>
              <p className="mt-4 text-right">— Juan Pérez</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 text-left animate-fade-in-right">
              <blockquote className="text-xl italic">
                "No podría estar más satisfecho. Me ayudaron en todo momento."
              </blockquote>
              <p className="mt-4 text-right">— María García</p>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }
      `}</style>

      <section className="py-16 bg-gradient-to-r from-gray-100 to-blue-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
            Formulario de Contacto
          </h2>
          <form className="grid md:grid-cols-2 gap-12">
            <div>
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Escribe tu mensaje"
                rows="6"
              />
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="px-10 py-4 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
      <Chat />

      {/* Footer */}
      <Footer />
    </div>
  );
}
