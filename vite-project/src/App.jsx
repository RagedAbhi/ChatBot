import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm";
import ChatPage from "./ChatPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
