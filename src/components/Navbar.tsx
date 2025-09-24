import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-secondary text-2xl font-bold">
          Meals
        </Link>

        {/* أيقونة الهامبرجر على الموبايل */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={24} className="text-white" />
          </button>
        </div>

        {/* الروابط على الديسك توب */}
        <div className="hidden md:flex gap-4">
          <Link to="/Home" className="text-white hover:text-secondary">
            Home
          </Link>
          <Link to="/meal1" className="text-white hover:text-secondary">
            Meal 1
          </Link>
          <Link to="/meal2" className="text-white hover:text-secondary">
            Meal 2
          </Link>
          <Link to="/meal3" className="text-white hover:text-secondary">
            Meal 3
          </Link>
          <Link to="/meal4" className="text-white hover:text-secondary">
            Meal 4
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

        {/* القائمة الجانبية */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-primary shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* زر X داخل القائمة */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <X size={24} className="text-white" />
            </button>
          </div>

          {/* الروابط */}
          <div className="flex flex-col mt-2 p-4 gap-4">
            <Link onClick={() => setIsOpen(false)} to="/Home" className="text-white hover:text-secondary">
              Home
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/meal1" className="text-white hover:text-secondary">
              Meal 1
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/meal2" className="text-white hover:text-secondary">
              Meal 2
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/meal3" className="text-white hover:text-secondary">
              Meal 3
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/meal4" className="text-white hover:text-secondary">
              Meal 4
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
