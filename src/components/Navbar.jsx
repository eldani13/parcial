import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../components/Loading";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const userName = localStorage.getItem("name");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoading(true); 

    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      setIsLoading(false); 
      navigate("/login");
    }, 1000);
  };

  const handlePlay = () => {
    if (!token) {
      
      navigate("/login");
      return;
    }

    setIsLoading(true); 

    setTimeout(() => {
      setIsLoading(false); 
      navigate("/play"); 
    }, 1000);
  };

  if (isLoading) {
    return <Loading />; 
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-extrabold">
          <Link to="/inicio">BrandName</Link>
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          {["Inicio", "Nosotros", "Contacto"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-white text-lg hover:text-yellow-300 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}

          {token ? (
            <>
              <li className="text-white text-lg flex items-center">
                <span className="mr-4">Hola, {userName}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 w-full sm:w-auto"
                >
                  Logout
                </button>
              </li>
              <li>
                <button
                  onClick={handlePlay}
                  className="bg-green-400 text-black px-6 py-2 rounded-lg hover:bg-green-300 transition duration-300 w-full sm:w-auto"
                >
                  Play
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black p-6 shadow-lg absolute w-full top-16 left-0 z-40">
          <ul className="flex flex-col items-center gap-4">
            {["Inicio", "Nosotros", "Servicios", "Contacto"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-black text-lg hover:text-indigo-500 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            {!token && (
              <li>
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            )}
            {token && (
              <li>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handlePlay();
                  }}
                  className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-300 transition duration-300"
                >
                  Play
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
