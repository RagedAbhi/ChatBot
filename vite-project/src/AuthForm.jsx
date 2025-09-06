import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "./assets/backgroundImg.jpg"; // adjust path if needed
import logo from "./assets/Logo2.png";

const AuthForm = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("login"); // "login" or "register"
    const [loginAs, setLoginAs] = useState("User");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activeTab === "login") {
            console.log("Logging in:", { loginAs, email, password, remember });
            navigate('/chat');
        } else {
            console.log("Registering:", { loginAs, email, password });
        }
    };

    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-start bg-gradient-to-tl from-[#2D3092] via-[#00AEFF] to-[#FFCB06]"
        >
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Use responsive classes for background: transparent on mobile, blurred on md and up */}
            <div className="flex flex-col relative bg-transparent md:bg-white/30 md:backdrop-blur-md rounded-xl shadow-lg w-full max-w-3xl p-8 space-y-6 mx-4 mt-20 z-10">
                {/* Tabs and Form Section */}
                <div className="flex flex-col md:flex-row justify-evenly">
                    <div className="flex justify-center items-center mb-6 md:mb-0">
                        <img className="w-50" src={logo} alt="Logo" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex justify-center space-x-8 text-white text-lg mb-6">
                            <button
                                onClick={() => setActiveTab("login")}
                                className={`pb-2 border-b-2 ${activeTab === "login" ? "border-white" : "border-transparent text-white/50 hover:text-white"}`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setActiveTab("register")}
                                className={`pb-2 border-b-2 ${activeTab === "register" ? "border-white" : "border-transparent text-white/50 hover:text-white"}`}
                            >
                                Register
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-white/80 mb-1 text-sm">Login As</label>
                                <select
                                    value={loginAs}
                                    onChange={(e) => setLoginAs(e.target.value)}
                                    className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/50 px-4 py-2 focus:outline-none focus:border-white"
                                >
                                    <option value="User" className="bg-black/70 text-white">Cadet</option>
                                    <option value="Admin" className="bg-black/70 text-white">ANO</option>
                                    <option value="Guest" className="bg-black/70 text-white">NCC Officer</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-white/80 mb-1 text-sm">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/50 px-2 py-2 focus:outline-none focus:border-white"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white/80 mb-1 text-sm">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/50 px-2 py-2 focus:outline-none focus:border-white"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                            </div>

                            {activeTab === "login" && (
                                <div className="flex justify-between items-center text-sm text-white/70">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={remember}
                                            onChange={() => setRemember(!remember)}
                                            className="form-checkbox h-4 w-4 text-indigo-500 bg-transparent border-white/50"
                                        />
                                        <span>Remember me</span>
                                    </label>
                                    <button type="button" className="hover:underline">
                                        Forgot Password?
                                    </button>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-2 rounded-md"
                            >
                                {activeTab === "login" ? "Login" : "Register"}
                            </button>
                        </form>

                        <p className="text-center text-white/60 text-sm mt-4">
                            {activeTab === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                            <button
                                onClick={() => setActiveTab(activeTab === "login" ? "register" : "login")}
                                className="text-indigo-400 hover:underline"
                            >
                                {activeTab === "login" ? "Register" : "Login"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
