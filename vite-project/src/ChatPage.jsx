import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "./assets/Bot2.jpg";
import botImg from "./assets/Bot3.jpg";
import backgroundImg from "./assets/backgroundImg.jpg";

const ChatPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar toggle state
  const [chats, setChats] = useState([
    { from: "bot", message: "Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setChats([...chats, { from: "user", message: input }]);
    setInput("");
    // Add bot response if needed
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex bg-gradient-to-tl from-[#2D3092] via-[#00AEFF] to-[#FFCB06]"
    //   style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="absolute inset-0 bg-white/20 "></div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="relative w-64 bg-black/30 backdrop-blur-sm text-white flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-white/20">
            <h2 className="text-lg font-bold">Chat History</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="px-2 py-1 text-white hover:bg-white/20 rounded"
            >
              ✖
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chats.map((chat, index) => (
              <div key={index} className="text-sm text-white/80">
                {chat.message}
              </div>
            ))}
          </div>
          <button
            onClick={() => setChats([])}
            className="m-4 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md"
          >
            + New Chat
          </button>
        </div>
      )}

      {/* Chat area */}
      <div className="relative flex-1 flex flex-col justify-between p-4">
        <div className="flex justify-between items-center mb-4">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
            >
              ☰ History
            </button>
          )}
          <button
            onClick={() => navigate("/auth")}
            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
          >
            Login
          </button>
        </div>

        <div className="overflow-y-auto flex-1 space-y-4 mb-4">
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`flex ${chat.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {chat.from === "bot" && (
                <img src={botImg} alt="Bot" className="w-8 h-8 object-cover rounded-full mr-2" />
              )}
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  chat.from === "user"
                    ? "bg-indigo-600 text-black"
                    : "bg-white/10 text-black"
                }`}
              >
                {chat.message}
              </div>
              {chat.from === "user" && (
                <img src={userImg} alt="User" className="w-8 h-8 rounded-full ml-2" />
              )}
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-white/10 border-b border-white/50 text-white px-4 py-2 rounded-md focus:outline-none focus:border-white"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
