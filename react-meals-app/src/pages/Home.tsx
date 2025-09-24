import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-950 text-gray-100 p-6 flex flex-col items-center">
      {/* العنوان */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-red-500 mb-12 drop-shadow-lg text-center">
        🍽️ خطتك الغذائية
      </h1>

      {/* السلايد شو */}
      <Slideshow />

      {/* روابط الوجبات */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        <Link
          to="/meal1"
          className="bg-gray-800/70 hover:bg-red-600/80 rounded-2xl p-6 text-center shadow-lg transition transform hover:scale-105"
        >
          <span className="text-3xl">🍳</span>
          <h2 className="text-xl font-bold mt-2">الوجبة الأولى</h2>
        </Link>

        <Link
          to="/meal2"
          className="bg-gray-800/70 hover:bg-red-600/80 rounded-2xl p-6 text-center shadow-lg transition transform hover:scale-105"
        >
          <span className="text-3xl">🍛</span>
          <h2 className="text-xl font-bold mt-2">الوجبة الثانية</h2>
        </Link>

        <Link
          to="/meal3"
          className="bg-gray-800/70 hover:bg-red-600/80 rounded-2xl p-6 text-center shadow-lg transition transform hover:scale-105"
        >
          <span className="text-3xl">🥘</span>
          <h2 className="text-xl font-bold mt-2">الوجبة الثالثة</h2>
        </Link>

        <Link
          to="/meal4"
          className="bg-gray-800/70 hover:bg-red-600/80 rounded-2xl p-6 text-center shadow-lg transition transform hover:scale-105"
        >
          <span className="text-3xl">🍠</span>
          <h2 className="text-xl font-bold mt-2">الوجبة الرابعة</h2>
        </Link>
    
      </div>
    </div>
  );
};

export default Home;
