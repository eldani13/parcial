import Footer from "../components/Footer";
import Chat from "../components/Chat";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="relative bg-gradient-to-r from-green-500 to-blue-600 text-center py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1500x800')",
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight text-shadow-lg animate-fade-in-down">
            Acerca de Nosotros
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-in-up">
            Somos una compañía comprometida con la innovación, liderando el
            camino hacia un futuro impulsado por la tecnología y la inteligencia
            artificial. Nos dedicamos a ofrecer soluciones transformadoras que
            ayudan a las empresas a optimizar sus procesos y mejorar la calidad
            de vida de las personas.
          </p>

          <a
            href="#"
            className="inline-block px-10 py-4 bg-white text-green-600 font-semibold text-lg rounded-full shadow-xl transform hover:scale-105 hover:bg-green-700 hover:text-white transition duration-300 animate-fade-in-right"
          >
            Descubre más
          </a>
        </div>

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

          .animate-fade-in-right {
            animation: fade-in-right 1s ease-out;
          }
        `}</style>
      </header>

      <section className="py-20 px-8 bg-gradient-to-br from-teal-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12">
          <div data-aos="fade-right" className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-yellow-400 tracking-tight leading-tight">
              Nuestra Misión
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Inspirar el progreso y la innovación tecnológica, ayudando a
              empresas y personas a alcanzar su máximo potencial mediante
              soluciones basadas en inteligencia artificial. Creemos en un
              futuro donde la tecnología sea una herramienta accesible para
              todos.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-3 text-lg font-semibold bg-white text-teal-800 rounded-full shadow-lg hover:bg-teal-700 hover:text-white transition duration-300"
              >
                Contáctanos para más información
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-400 opacity-50 rounded-lg"></div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Nuestra misión"
              className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gradient-to-br from-indigo-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12">
          <div data-aos="fade-right" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-50 rounded-lg"></div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Nuestra visión"
              className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
          <div data-aos="fade-left" className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-yellow-400 tracking-tight leading-tight">
              Nuestra Visión
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Convertirnos en líderes globales en el desarrollo de tecnología de
              inteligencia artificial que transforme vidas, negocios y
              comunidades. Queremos ser el referente de innovación, siempre un
              paso adelante en la revolución digital.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-3 text-lg font-semibold bg-white text-indigo-800 rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition duration-300"
              >
                Descubre nuestras soluciones
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 relative"
        style={{
          background:
            "linear-gradient(to right, rgba(30, 64, 175, 0.7), rgba(56, 189, 248, 0.7))",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%)",
            filter: "blur(80px)",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white mb-12 tracking-tight drop-shadow-lg">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-lg text-white/90 mb-16 max-w-3xl mx-auto">
            Nuestro equipo está formado por visionarios y expertos apasionados,
            dedicados a llevar cada proyecto al siguiente nivel.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
            <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="https://via.placeholder.com/300"
                alt="Carlos Mendoza"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">
                  Carlos Mendoza
                </h3>
                <p className="text-gray-500 text-lg">CEO & Fundador</p>
                <div className="mt-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="https://via.placeholder.com/300"
                alt="Laura Gómez"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">
                  Laura Gómez
                </h3>
                <p className="text-gray-500 text-lg">Directora de Tecnología</p>
                <div className="mt-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="https://via.placeholder.com/300"
                alt="Andrés Ruiz"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">
                  Andrés Ruiz
                </h3>
                <p className="text-gray-500 text-lg">Gerente de Proyectos</p>
                <div className="mt-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </div>
              </div>
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
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
              Únete a Nosotros
            </h2>

            <p className="text-lg mb-10 text-gray-100">
              ¿Quieres formar parte de nuestro equipo o colaborar con nosotros?
              ¡Estamos buscando personas talentosas y apasionadas por la
              tecnología! Sé parte de una empresa en constante innovación.
            </p>

            <div className="flex justify-center gap-6">
              <button className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
                Contáctanos
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition-transform transform hover:scale-105">
                Ver más detalles
              </button>
            </div>
          </div>
        </div>
      </section>
      <Chat />

      {/* Footer */}
      <Footer />
    </div>
  );
}
