"use client"

import { useEffect, useState } from "react";
import { ping } from "./actions";

export default function Home() {
  const [pingResponse, setPingResponse] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await ping()
      console.log(`ping: ${response}`);
      setPingResponse(response);
    }
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full blur-[40px] bg-gradient-to-r from-pink-400 to-cyan-400 mix-blend-multiply animate-blob opacity-70"></div>
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] rounded-full blur-[40px] bg-gradient-to-r from-blue-400 to-emerald-400 mix-blend-multiply animate-blob animation-delay-2000 opacity-70"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[250px] h-[250px] rounded-full blur-[40px] bg-gradient-to-r from-amber-400 to-violet-400 mix-blend-multiply animate-blob animation-delay-4000 opacity-70"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[180px] h-[180px] rounded-full blur-[40px] bg-gradient-to-r from-teal-400 to-pink-400 mix-blend-multiply animate-blob animation-delay-1000 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] rounded-full blur-[40px] bg-gradient-to-r from-green-400 to-blue-300 mix-blend-multiply animate-blob animation-delay-3000 opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 via-cyan-400 via-blue-400 via-emerald-400 via-amber-400 via-violet-400 to-teal-400 bg-clip-text text-transparent animate-gradient bg-[length:300%_300%] tracking-tight font-sans">
            Hello there!
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-light animate-fade-in-up mb-12">
            {pingResponse}
          </p>
          
          {/* Floating Geometric Elements */}
          <div className="relative h-24 mb-8">
            <div className="absolute left-[10%] w-3 h-3 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full animate-float"></div>
            <div className="absolute left-[25%] w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rotate-45 animate-float animation-delay-500"></div>
            <div className="absolute left-[40%] w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rotate-45 animate-float animation-delay-1000"></div>
            <div className="absolute left-[55%] w-3 h-6 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full animate-float animation-delay-1500"></div>
            <div className="absolute left-[70%] w-5 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute left-[85%] w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 animate-float animation-delay-2500"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
