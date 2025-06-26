export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="hello-world-text mb-8">
            Hello World
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-light animate-fade-in-up">
            Welcome to something amazing
          </p>
          <div className="mt-12">
            <div className="floating-elements">
              <div className="element element-1"></div>
              <div className="element element-2"></div>
              <div className="element element-3"></div>
              <div className="element element-4"></div>
              <div className="element element-5"></div>
              <div className="element element-6"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hello-world-text {
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: 800;
          background: linear-gradient(
            45deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #ffeaa7,
            #dda0dd,
            #98d8c8
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease-in-out infinite;
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
          letter-spacing: -0.02em;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s both;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          mix-blend-mode: multiply;
          animation: blob-bounce 7s infinite ease-in-out;
        }

        .blob-1 {
          top: 10%;
          left: 10%;
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          animation-delay: 0s;
        }

        .blob-2 {
          top: 20%;
          right: 10%;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #45b7d1, #96ceb4);
          animation-delay: 2s;
        }

        .blob-3 {
          bottom: 20%;
          left: 20%;
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #ffeaa7, #dda0dd);
          animation-delay: 4s;
        }

        .blob-4 {
          bottom: 10%;
          right: 20%;
          width: 180px;
          height: 180px;
          background: linear-gradient(45deg, #98d8c8, #ff6b6b);
          animation-delay: 1s;
        }

        .blob-5 {
          top: 50%;
          left: 50%;
          width: 320px;
          height: 320px;
          background: linear-gradient(45deg, #a8e6cf, #c7ceea);
          animation-delay: 3s;
          transform: translate(-50%, -50%);
        }

        @keyframes blob-bounce {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .floating-sparkles {
          position: relative;
          height: 100px;
        }

        .sparkle {
          position: absolute;
          font-size: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .sparkle-1 {
          left: 10%;
          animation-delay: 0s;
        }

        .sparkle-2 {
          left: 30%;
          animation-delay: 0.5s;
        }

        .sparkle-3 {
          left: 50%;
          animation-delay: 1s;
        }

        .sparkle-4 {
          left: 70%;
          animation-delay: 1.5s;
        }

        .sparkle-5 {
          left: 90%;
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .blob {
            mix-blend-mode: screen;
            filter: blur(60px);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .blob {
            filter: blur(30px);
          }
          
          .blob-1, .blob-3, .blob-5 {
            width: 200px;
            height: 200px;
          }
          
          .blob-2, .blob-4 {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
}
