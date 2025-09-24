import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";

const Home = () => {
  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white transition-colors duration-500">

      {/* Motivational phrases in a row */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-6 mt-2 animate-fadeIn animate-slideDown">
        <span className="block text-xl md:text-2xl font-bold text-yellow-400 drop-shadow-lg text-center tracking-wide">
          Ready to transform from young Simba to King Mufasa? 🦁
        </span>
        <span className="block text-xl md:text-2xl font-bold text-rose-300 drop-shadow-lg text-center tracking-wide">
          Challenge Yourself
        </span>
      </div>

      {/* Main title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 drop-shadow-lg text-center tracking-tight text-rose-400">
        🍽️ Your Nutrition Plan
      </h1>

      {/* Slideshow */}
      <Slideshow />

      {/* Meals links */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 w-full max-w-6xl">
        {/* ...existing code for meals... */}
        <Link to="/meal1" className="rounded-2xl p-6 text-center shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-rose-900 border-rose-800">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full text-4xl shadow-md mb-2 bg-yellow-400 text-gray-900">🍳</span>
          <h2 className="text-lg md:text-xl font-semibold mt-1 tracking-wide text-yellow-100">Meal 1</h2>
        </Link>
        <Link to="/meal2" className="rounded-2xl p-6 text-center shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-rose-900 border-rose-800">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full text-4xl shadow-md mb-2 bg-yellow-400 text-gray-900">🍛</span>
          <h2 className="text-lg md:text-xl font-semibold mt-1 tracking-wide text-yellow-100">Meal 2</h2>
        </Link>
        <Link to="/meal3" className="rounded-2xl p-6 text-center shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-rose-900 border-rose-800">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full text-4xl shadow-md mb-2 bg-yellow-400 text-gray-900">🥘</span>
          <h2 className="text-lg md:text-xl font-semibold mt-1 tracking-wide text-yellow-100">Meal 3</h2>
        </Link>
        <Link to="/meal4" className="rounded-2xl p-6 text-center shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-rose-900 border-rose-800">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full text-4xl shadow-md mb-2 bg-yellow-400 text-gray-900">🍠</span>
          <h2 className="text-lg md:text-xl font-semibold mt-1 tracking-wide text-yellow-100">Meal 4</h2>
        </Link>
        <Link to="/meal5" className="rounded-2xl p-6 text-center shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-rose-900 border-rose-800">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full text-4xl shadow-md mb-2 bg-yellow-400 text-gray-900">🍌</span>
          <h2 className="text-lg md:text-xl font-semibold mt-1 tracking-wide text-yellow-100">Meal 5</h2>
        </Link>
        <Link to="/meal6" className="rounded-2xl p-6 text-center shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-rose-900 border-rose-800">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full text-4xl shadow-md mb-2 bg-yellow-400 text-gray-900">🥚</span>
          <h2 className="text-lg md:text-xl font-semibold mt-1 tracking-wide text-yellow-100">Meal 6</h2>
        </Link>
      </div>

      {/* Workouts links */}
      <h2 className="text-3xl md:text-4xl font-extrabold mt-16 mb-8 drop-shadow-lg text-center tracking-tight text-blue-400 animate-fadeIn animate-slideDown">🏋️‍♂️ Your Workout Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-4xl mb-8">
        <Link to="/pushday" className="rounded-2xl p-7 text-center shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-blue-900 border-blue-800">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full text-4xl shadow-md mb-2 bg-blue-400 text-gray-900">💪</span>
          <h2 className="text-lg md:text-xl font-semibold mt-1 tracking-wide text-blue-100">Push Day</h2>
        </Link>
        <Link to="/pullday" className="rounded-2xl p-7 text-center shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-blue-900 border-blue-800">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full text-4xl shadow-md mb-2 bg-blue-400 text-gray-900">🏋️‍♂️</span>
          <h2 className="text-lg md:text-xl font-semibold mt-1 tracking-wide text-blue-100">Pull Day</h2>
        </Link>
        <Link to="/legday" className="rounded-2xl p-7 text-center shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-blue-900 border-blue-800">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full text-4xl shadow-md mb-2 bg-blue-400 text-gray-900">🦵</span>
          <h2 className="text-lg md:text-xl font-semibold mt-1 tracking-wide text-blue-100">Leg Day</h2>
        </Link>
      </div>
      {/* The end image at the bottom */}
      <div className="w-full flex justify-center items-center py-6 animate-fadeIn">
        <img
          src={require("../assets/The end.jpg")}
          alt="the end"
          className="max-w-xs md:max-w-sm rounded-xl shadow-lg border border-gray-800"
          style={{ objectFit: 'contain', background: 'transparent', boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)' }}
        />
      </div>
    </div>
  );
};

export default Home;
