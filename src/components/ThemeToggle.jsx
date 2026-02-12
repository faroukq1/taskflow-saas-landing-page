import { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="fixed bottom-12 right-12 z-50">
      <button
        className="relative w-16 h-16 bg-n-6/90 backdrop-blur-sm rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-color-1 shadow-lg hover:shadow-xl hover:scale-110 border border-n-5/50"
        onClick={() => setIsDark(!isDark)}
      >
        <div className="w-full h-full bg-gradient-to-br from-n-6 to-n-7 rounded-full flex items-center justify-center">
          {isDark ? (
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2L13.09 8.26L20 9L14 14.74L15.18 21.02L10 17.77L4.82 21.02L6 14.74L0 9L6.91 8.26L10 2Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
