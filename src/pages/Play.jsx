import React, { useState } from "react";
import pythonQuestions from "../utils/python.json"; // Cambia el path según tu estructura
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import { FaBrain, FaQuestionCircle, FaRobot } from "react-icons/fa";

export default function Play() {
  const [showModal, setShowModal] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [questions, setQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Iniciar el quiz con una pregunta aleatoria
  const startQuiz = () => {
    const shuffledQuestions = [...pythonQuestions.preguntas].sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setFeedback("");
    setQuizCompleted(false);
    setShowModal(true);
  };

  const handleAnswer = (option) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.respuesta_correcta) {
      setFeedback("¡Correcto!");
      // Pasar a la siguiente pregunta
      if (currentQuestionIndex + 1 < questions.length) {
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setFeedback("");
        }, 1000);
      } else {
        setTimeout(() => {
          setQuizCompleted(true);
          setShowModal(false);
        }, 1000);
      }
    } else {
      setFeedback("Respuesta incorrecta, intenta de nuevo.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 overflow-hidden">
      {/* Encabezado */}
      <header className="relative bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-800 text-white py-16 px-4 text-center shadow-lg z-10">
        <h1 className="text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg">
          Play & Learn
        </h1>
      </header>

      {/* Juegos de preguntas */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">
          🎯 Juegos de Preguntas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {["JavaScript", "Python", "C++"].map((topic, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform group"
            >
              <FaBrain className="text-5xl text-blue-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Quiz de {topic}
              </h3>
              <p className="text-gray-400">Demuestra tu dominio en {topic}.</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
                onClick={topic === "Python" ? startQuiz : null}
              >
                Jugar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal para preguntas */}
      {showModal && !quizCompleted && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            {questions.length > 0 && currentQuestionIndex !== null ? (
              <>
                <h3 className="text-xl font-bold text-white mb-4">
                  Pregunta {currentQuestionIndex + 1}
                </h3>
                <p className="text-gray-300 mb-4">{questions[currentQuestionIndex].pregunta}</p>
                <div className="space-y-2">
                  {Object.entries(questions[currentQuestionIndex].opciones).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => handleAnswer(key)}
                      className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
                    >
                      {value}
                    </button>
                  ))}
                </div>
                {feedback && (
                  <p className={`mt-4 text-center ${feedback === "¡Correcto!" ? "text-green-400" : "text-red-400"}`}>
                    {feedback}
                  </p>
                )}
              </>
            ) : (
              <p className="text-gray-300">Cargando pregunta...</p>
            )}
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mensaje de finalización */}
      {quizCompleted && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¡Quiz Completado!</h3>
            <p className="text-gray-300">¡Felicidades! Has respondido todas las preguntas.</p>
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600"
              onClick={() => setQuizCompleted(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Adivinanzas */}
      <section className="py-12 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center">
          🧩 Adivinanzas
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Resuelve estos enigmas tecnológicos y diviértete.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[{ question: "¿Qué código siempre se ejecuta, pero nunca se ve?" },
            { question: "¿Qué es más rápido que un bucle infinito?" },
            { question: "¿Cuál es el lenguaje que más vive en la nube?" },
          ].map((riddle, idx) => (
            <div key={idx} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
              <FaQuestionCircle className="text-5xl text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Adivinanza {idx + 1}
              </h3>
              <p className="text-gray-400">{riddle.question}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IA y Programación */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
          🤖 IA y Programación
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Explora conceptos fascinantes sobre inteligencia artificial y desarrollo de software.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[{ title: "Introducción a la IA", desc: "Aprende cómo funcionan los modelos de IA." },
            { title: "Buenas prácticas en Programación", desc: "Descubre cómo escribir código eficiente." },
            { title: "Ciberseguridad Básica", desc: "Protege tus datos con estas técnicas." },
          ].map((topic, idx) => (
            <div key={idx} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
              <FaRobot className="text-5xl text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
              <p className="text-gray-400">{topic.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Chat />
      <Footer />
    </div>
  );
}
