import Footer from "../components/Footer";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <header className="relative bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-600 overflow-hidden py-20">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="300" r="400" fill="url(#gradient)" />
            <circle cx="300" cy="200" r="300" fill="url(#gradient)" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <h1 className="text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
            Bienvenido al Futuro de la Inteligencia Artificial
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed mb-8 animate-fade-in-up">
            La tecnología está evolucionando rápidamente, y la inteligencia
            artificial está en el centro de esta revolución. Descubre su impacto
            en la innovación, la industria y la vida diaria.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 animate-fade-in-left">
              Aprende Más
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full shadow-lg hover:bg-white hover:text-indigo-700 transition duration-300 animate-fade-in-right">
              Contáctanos
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-700 to-transparent"></div>
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

      <section className="py-20 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-5xl font-extrabold text-yellow-400 tracking-tight leading-tight">
              ¿Qué es la Inteligencia Artificial?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              La inteligencia artificial (IA) se refiere a la capacidad de las
              máquinas para simular procesos de pensamiento humano. Desde
              asistentes virtuales y análisis predictivos hasta vehículos
              autónomos, la IA está transformando cada aspecto de nuestras
              vidas, haciendo posible lo inimaginable.
            </p>
            <ul className="list-disc text-gray-300 pl-5 space-y-2">
              <li>
                <strong className="text-yellow-400">Automatización:</strong>{" "}
                Realización eficiente de tareas repetitivas.
              </li>
              <li>
                <strong className="text-yellow-400">Aprendizaje:</strong>{" "}
                Sistemas que mejoran continuamente con datos.
              </li>
              <li>
                <strong className="text-yellow-400">Interacción:</strong>{" "}
                Experiencias más humanas a través de interfaces avanzadas.
              </li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300">
              Aprende más
            </button>
          </div>

          <div className="relative" data-aos="fade-left">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Artificial Intelligence Concept"
              className="rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-transparent opacity-20 rounded-xl"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400">50%</h3>
            <p className="text-gray-300">
              Incremento en la eficiencia laboral gracias a la IA.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400">100M+</h3>
            <p className="text-gray-300">
              Usuarios interactúan con IA diariamente.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400">200+</h3>
            <p className="text-gray-300">
              Aplicaciones prácticas de IA en industrias.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full object-cover"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
          >
            <g fill="none" stroke="url(#gradient)" strokeWidth="50">
              <circle cx="400" cy="300" r="200" />
              <circle cx="400" cy="300" r="300" />
              <circle cx="400" cy="300" r="400" />
            </g>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center">
            Aplicaciones Transformadoras de la Inteligencia Artificial
          </h2>
          <p className="text-lg md:text-xl text-gray-200 text-center max-w-3xl mx-auto mb-16">
            La inteligencia artificial está transformando industrias y mejorando
            nuestras vidas a través de innovaciones revolucionarias. Aquí hay
            algunos ejemplos de cómo está cambiando el mundo:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white text-black rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Asistentes Virtuales"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Asistentes Virtuales
              </h3>
              <p className="text-gray-700 text-center">
                Alexa, Siri y Google Assistant utilizan IA para interpretar
                comandos y realizar tareas con precisión.
              </p>
            </div>
            <div className="bg-white text-black rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Medicina"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Medicina</h3>
              <p className="text-gray-700 text-center">
                Diagnósticos más precisos y tratamientos personalizados están
                revolucionando la atención médica global.
              </p>
            </div>
            <div className="bg-white text-black rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Automóviles Autónomos"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Automóviles Autónomos
              </h3>
              <p className="text-gray-700 text-center">
                Vehículos equipados con sensores y algoritmos de IA toman
                decisiones en tiempo real con precisión.
              </p>
            </div>
            <div className="bg-white text-black rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Finanzas"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Finanzas</h3>
              <p className="text-gray-700 text-center">
                Sistemas de IA analizan datos en tiempo real para predecir
                tendencias y optimizar inversiones.
              </p>
            </div>
            <div className="bg-white text-black rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Retail"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Retail</h3>
              <p className="text-gray-700 text-center">
                Experiencias de compra personalizadas y logística optimizada
                gracias a la inteligencia artificial.
              </p>
            </div>
            <div className="bg-white text-black rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Educación"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Educación</h3>
              <p className="text-gray-700 text-center">
                Herramientas impulsadas por IA personalizan los planes de
                aprendizaje y mejoran la accesibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full object-cover"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
          >
            <g fill="none" stroke="url(#gradient)" strokeWidth="40">
              <circle cx="400" cy="300" r="200" />
              <circle cx="400" cy="300" r="300" />
              <circle cx="400" cy="300" r="400" />
            </g>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FF4500" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
            ¿Listo para desbloquear el poder de la Inteligencia Artificial?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
            Impulsa tu negocio al siguiente nivel con soluciones innovadoras y
            personalizadas de IA. Estamos aquí para transformar tus ideas en
            realidad.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
              Contáctanos
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition-transform transform hover:scale-105">
              Ver más detalles
            </button>
          </div>
        </div>
      </section>

      <Chat />

      {/* Footer */}
      <Footer />
    </div>
  );
}
