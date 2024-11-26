import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-transparent border-blue-500"></div>
        <div className="absolute inset-0 animate-spin-slow rounded-full border-4 border-t-transparent border-purple-500"></div>

        <div className="absolute inset-4 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full shadow-inner animate-pulse"></div>

        <div className="absolute inset-7 bg-white rounded-full blur-lg opacity-30"></div>
      </div>

      <div className="absolute bottom-10 text-center">
        <p className="text-lg font-semibold text-white animate-bounce">
          Cargando...
        </p>
      </div>
    </div>
  );
}
