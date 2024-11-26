export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-12 text-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-yellow-400">Futuro IA</h2>
          <p className="text-gray-400 text-sm">
            Liderando el camino en tecnología de inteligencia artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Productos</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Asistentes Virtuales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Automatización Empresarial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Análisis de Datos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Recursos</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Documentación</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Tutoriales</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Conéctate</h3>
            <ul className="flex justify-center md:justify-start gap-4">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Futuro IA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
