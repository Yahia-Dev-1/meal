import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Utensils } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMeals, setShowMeals] = useState(false);
  const [showWorkouts, setShowWorkouts] = useState(false);

  // Prevent scroll when sidebar is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close dropdowns when sidebar closes
  React.useEffect(() => {
    if (!isOpen) {
      setShowMeals(false);
      setShowWorkouts(false);
    }
  }, [isOpen]);

  return (
    <nav className="bg-primary p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={require("../assets/logo.jpg")}
            alt="logo"
            className="w-20 h-20 object-cover rounded-full shadow-lg border-2 border-blue-400 bg-white"
            style={{ background: 'transparent' }}
          />
          <Link to="/" className="text-secondary text-2xl font-bold">
            Meals
          </Link>
        </div>


        {/* أيقونة الهامبرجر على الموبايل - Uiverse.io style */}
        <div className="md:hidden relative">
          <button
            className="btn"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            style={{ position: 'relative', overflow: 'hidden', padding: 0, width: 60, height: 50, background: '#23272f', color: '#f5f5f5', borderRadius: 8, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span className="icon" style={{ position: 'absolute', left: 0, width: 60, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.5s' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="32" height="3.5" rx="1.75" fill="#f5f5f5"/>
                <rect y="14" width="32" height="3.5" rx="1.75" fill="#f5f5f5"/>
                <rect y="21" width="32" height="3.5" rx="1.75" fill="#f5f5f5"/>
              </svg>
            </span>
            <span className="text" style={{ marginLeft: 55, opacity: 1, transition: 'all 0.5s' }}></span>
          </button>
        </div>

        {/* الروابط على الديسك توب */}
  <div className="hidden md:flex gap-4 items-center relative">
          <Link to="/Home" className="text-white hover:text-secondary">
            Home
          </Link>
          <button
            className="flex items-center gap-1 text-white hover:text-secondary px-3 py-1 rounded transition border border-transparent hover:border-secondary focus:outline-none"
            onClick={() => setShowMeals((v) => !v)}
            onBlur={() => setTimeout(() => setShowMeals(false), 200)}
          >
            <Utensils size={18} />
            <span>Meals</span>
          </button>
          {showMeals && (
            <div className="absolute top-full right-0 bg-gray-900 border border-red-700 rounded-xl shadow-lg py-2 px-4 z-50 min-w-[160px] animate-fadeIn animate-slideDown">
              <Link to="/meal1" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105" onClick={() => setShowMeals(false)}>🍳 Meal 1</Link>
              <Link to="/meal2" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105" onClick={() => setShowMeals(false)}>🍛 Meal 2</Link>
              <Link to="/meal3" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105" onClick={() => setShowMeals(false)}>🥘 Meal 3</Link>
              <Link to="/meal4" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105" onClick={() => setShowMeals(false)}>🍠 Meal 4</Link>
              <Link to="/meal5" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105" onClick={() => setShowMeals(false)}>🍌 Meal 5</Link>
              <Link to="/meal6" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105" onClick={() => setShowMeals(false)}>🥚 Meal 6</Link>
            </div>
          )}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-white hover:text-secondary px-3 py-1 rounded transition border border-transparent hover:border-secondary focus:outline-none"
              onClick={() => setShowWorkouts((v) => !v)}
              onBlur={() => setTimeout(() => setShowWorkouts(false), 200)}
            >
              <span role="img" aria-label="dumbbell">🏋️</span>
              <span>Workouts</span>
            </button>
            {showWorkouts && (
              <div className="absolute top-full right-0 bg-gray-900 border border-blue-700 rounded-xl shadow-lg py-2 px-4 z-50 min-w-[160px] animate-fadeIn animate-slideDown">
                <Link to="/pushday" className="block py-1 px-2 text-white hover:text-blue-400 transition-transform duration-200 hover:scale-105" onClick={() => setShowWorkouts(false)}>Push Day</Link>
                <Link to="/pullday" className="block py-1 px-2 text-white hover:text-blue-400 transition-transform duration-200 hover:scale-105" onClick={() => setShowWorkouts(false)}>Pull Day</Link>
                <Link to="/legday" className="block py-1 px-2 text-white hover:text-blue-400 transition-transform duration-200 hover:scale-105" onClick={() => setShowWorkouts(false)}>Leg Day</Link>
              </div>
            )}
          </div>
          <Link to="/vitamins" className="text-white hover:text-secondary">
            Vitamins
          </Link>
        </div>
      </div>

      {/* القائمة الجانبية + الخلفية الشفافة */}
      <div className={`fixed inset-0 z-40 transition-all ${isOpen ? "visible" : "invisible"}`}>
        {/* الخلفية */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-primary shadow-lg transform transition-transform duration-300 z-[100] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button aria-label="Close menu" onClick={() => setIsOpen(false)}>
              <X size={24} className="text-white" />
            </button>
          </div>
          {/* Sidebar links */}
          <div className="flex flex-col mt-2 p-4 gap-3">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-1 pl-1">Meals</div>
            <button
              className="flex items-center gap-1 text-white hover:text-secondary px-3 py-1 rounded transition border border-transparent hover:border-secondary focus:outline-none"
              onClick={() => {
                setShowMeals((v) => !v);
                setShowWorkouts(false);
              }}
              aria-expanded={showMeals}
              aria-controls="sidebar-meals-dropdown"
            >
              <Utensils size={18} />
              <span>Meals</span>
            </button>
            {showMeals && (
              <div id="sidebar-meals-dropdown" className="bg-gray-900 border border-red-700 rounded-xl shadow-lg py-2 px-4 z-50 min-w-[160px] animate-fadeIn animate-slideDown mt-2">
                <Link onClick={() => { setShowMeals(false); setIsOpen(false); }} to="/meal1" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105">🍳 Meal 1</Link>
                <Link onClick={() => { setShowMeals(false); setIsOpen(false); }} to="/meal2" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105">🍛 Meal 2</Link>
                <Link onClick={() => { setShowMeals(false); setIsOpen(false); }} to="/meal3" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105">🥘 Meal 3</Link>
                <Link onClick={() => { setShowMeals(false); setIsOpen(false); }} to="/meal4" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105">🍠 Meal 4</Link>
                <Link onClick={() => { setShowMeals(false); setIsOpen(false); }} to="/meal5" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105">🍌 Meal 5</Link>
                <Link onClick={() => { setShowMeals(false); setIsOpen(false); }} to="/meal6" className="block py-1 px-2 text-white hover:text-secondary transition-transform duration-200 hover:scale-105">🥚 Meal 6</Link>
              </div>
            )}
            <div className="text-xs uppercase tracking-widest text-gray-400 mt-4 mb-1 pl-1">Workouts</div>
            <button
              className="flex items-center gap-1 text-white hover:text-blue-400 px-3 py-1 rounded transition border border-transparent hover:border-blue-400 focus:outline-none"
              onClick={() => {
                setShowWorkouts((v) => !v);
                setShowMeals(false);
              }}
              aria-expanded={showWorkouts}
              aria-controls="sidebar-workouts-dropdown"
            >
              <span role="img" aria-label="dumbbell">🏋️</span>
              <span>Workouts</span>
            </button>
            {showWorkouts && (
              <div id="sidebar-workouts-dropdown" className="bg-gray-900 border border-blue-700 rounded-xl shadow-lg py-2 px-4 z-50 min-w-[160px] animate-fadeIn animate-slideDown mt-2">
                <Link onClick={() => { setShowWorkouts(false); setIsOpen(false); }} to="/pushday" className="block py-1 px-2 text-white hover:text-blue-400 transition-transform duration-200 hover:scale-105">Push Day</Link>
                <Link onClick={() => { setShowWorkouts(false); setIsOpen(false); }} to="/pullday" className="block py-1 px-2 text-white hover:text-blue-400 transition-transform duration-200 hover:scale-105">Pull Day</Link>
                <Link onClick={() => { setShowWorkouts(false); setIsOpen(false); }} to="/legday" className="block py-1 px-2 text-white hover:text-blue-400 transition-transform duration-200 hover:scale-105">Leg Day</Link>
              </div>
            )}
            <div className="h-2" />
            <Link onClick={() => setIsOpen(false)} to="/Home" className="text-white hover:text-secondary px-3 py-1 rounded transition text-base">
              Home
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/vitamins" className="text-white hover:text-secondary px-3 py-1 rounded transition text-base">
              Vitamins
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
