import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, ingresa tu correo y contraseña.");
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL;
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: true, email, password }),
      });

      const textResponse = await response.text();

      const jsonStringMatch = textResponse.match(/(\{.*\})/s);

      if (jsonStringMatch && jsonStringMatch[0]) {
        const jsonResponse = JSON.parse(jsonStringMatch[0]);

        if (jsonResponse.status === "success") {
          localStorage.setItem("token", jsonResponse.token);
          localStorage.setItem("name", jsonResponse.name);

          setTimeout(() => {
            navigate("/inicio", { replace: true });
          }, 1000);
        } else {
          setError(
            jsonResponse.message || "Hubo un error con el inicio de sesión."
          );
        }
      } else {
        setError("La respuesta del servidor no contiene un JSON válido.");
      }
    } catch (error) {
      console.error("Error en el try-catch:", error);
      setError("Error al conectar con el servidor.");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  if (isLoading) {
    return <Loading />; 
  }

  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-center py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 text-shadow-lg">
            Iniciar Sesión
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-6 opacity-90">
            Ingresa a tu cuenta para acceder a todas las funcionalidades de
            nuestro sitio. Estamos aquí para ofrecerte una experiencia
            excepcional.
          </p>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-md mx-auto px-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">
            Accede a tu cuenta
          </h2>

          {error && (
            <div className="bg-red-500 text-white p-4 mb-4 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                  placeholder="Ingresa tu correo"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-xl hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 transform hover:scale-105"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿Olvidaste tu contraseña?{" "}
              <a
                href="/recuperar-contrasena"
                className="text-indigo-600 hover:underline"
              >
                Recuperarla aquí
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              ¿No tienes cuenta?{" "}
              <a href="/signup" className="text-indigo-600 hover:underline">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
