import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { FaSmile, FaPaperclip, FaPhoneAlt, FaVideo } from "react-icons/fa";
import Picker from "emoji-picker-react"; 

const socket = io("http://localhost:3001");

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false); 

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleNameSubmit = () => {
    if (username.trim()) {
      localStorage.setItem("username", username); 
      socket.emit("set-nombre", username); 
      setIsModalOpen(false);
      setIsChatOpen(true); 
    }
  };

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);

    socket.on("mensaje", (msg) => {
      console.log(msg);
      const updatedMessages = [
        ...messages,
        { username: msg.username, message: msg.message },
      ];
      setMessages(updatedMessages);

      localStorage.setItem("messages", JSON.stringify(updatedMessages));
    });

    return () => {
      socket.off("mensaje");
    };
  }, [messages]); 
  const sendMessage = () => {
    if (message.trim() && username.trim()) {
      socket.emit("mensaje", { message, username });
      setMessage(""); 
    }
  };

  const handleChatButtonClick = () => {
    if (!username.trim()) {
      setIsModalOpen(true); 
    } else {
      setIsChatOpen(true); 
    }
  };

  const handleEmojiClick = (emoji) => {
    setMessage(message + emoji.emoji); 
    setIsEmojiPickerVisible(false); 
  };

  return (
    <>
      <div
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
        onClick={handleChatButtonClick} 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
          />
        </svg>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 backdrop-blur-lg z-50 transition-opacity duration-300 opacity-100">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-96 z-60">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Chatea anonimamente, ¡Bienvenido!
            </h2>
            <input
              type="text"
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg mb-6 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in"
              placeholder="Escribe tu nombre"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={handleNameSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out"
            >
              Ingresar
            </button>
          </div>
        </div>
      )}

      {isChatOpen && !isModalOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-xl rounded-lg p-4 border border-gray-300 z-50 transition-transform transform">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Chat en Vivo
            </h2>
            <button
              className="text-gray-500 hover:text-gray-700 text-xl"
              onClick={toggleChat}
            >
              ✖
            </button>
          </div>

          <div className="h-64 overflow-y-auto mb-4 pr-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.username === username ? "justify-end" : "justify-start"
                } mb-3`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    msg.username === username
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <strong>{msg.username}:</strong> {msg.message}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 shadow-sm transition-all duration-200"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Enviar
            </button>
          </div>

          <div className="flex justify-between mt-2">
            <div className="flex space-x-16">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)} 
              >
                <FaSmile size={24} />
              </button>

              <button className="text-gray-600 hover:text-gray-800">
                <FaPaperclip size={24} />
              </button>

              <button className="text-gray-600 hover:text-gray-800">
                <FaPhoneAlt size={24} />
              </button>

              <button className="text-gray-600 hover:text-gray-800">
                <FaVideo size={24} />
              </button>
            </div>
          </div>

          {isEmojiPickerVisible && (
            <div className="absolute bottom-16 left-0 z-50">
              <Picker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      )}
    </>
  );
}
