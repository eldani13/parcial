import React, { useState } from "react";
import Footer from "../components/Footer";
import Loading from "../components/Loading"; 
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const { name, email, password } = formData;
    const data = {
      register: true,
      email,
      password,
      name,
    };

    try {
      setIsLoading(true); 

      const apiUrl = import.meta.env.VITE_API_URL; 

      const response = await fetch(apiUrl, {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const textResponse = await response.text();
      console.log("Response status:", response.status);
      console.log("Response body (raw):", textResponse);

      const jsonStringMatch = textResponse.match(/(\{.*\})/s);

      if (jsonStringMatch && jsonStringMatch[0]) {
        const jsonResponse = JSON.parse(jsonStringMatch[0]);

        if (jsonResponse.status === "success") {
          setSuccessMessage(jsonResponse.message);
          setError("");
          setTimeout(() => {
            setIsLoading(false); 
            navigate("/login", { replace: true });
          }, 1000); 
        } else {
          setError(jsonResponse.message || "Hubo un error en el registro.");
          setIsLoading(false); 
        }
      } else {
        setError("La respuesta del servidor no contiene un JSON válido.");
        setIsLoading(false); 
      }
    } catch (error) {
      setError("Hubo un error en la conexión con el servidor.");
      setSuccessMessage("");
      setIsLoading(false); 
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
            Crear Cuenta
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-6 opacity-90">
            Regístrate para acceder a todas las funcionalidades de nuestro sitio
            y disfrutar de una experiencia excepcional.
          </p>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-md mx-auto px-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">
            Crea tu cuenta
          </h2>

          {error && (
            <div className="bg-red-500 text-white p-4 mb-4 rounded-lg">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="bg-green-500 text-white p-4 mb-4 rounded-lg">
              {successMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                placeholder="Tu nombre completo"
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
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                placeholder="Ingresa tu correo"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="confirmPassword"
              >
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                placeholder="Confirma tu contraseña"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg focus:outline-none hover:bg-indigo-700 transition duration-300"
            >
              Crear Cuenta
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
