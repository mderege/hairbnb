import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 mb-6">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and Site Name */}
        <NavLink to="/" className="flex items-center">
          <img
            alt="Hairbnb logo"
            className="h-10 ml-4"
            src="/hairbnblogonobackground.png"
          />
          <h1 className="text-2xl font-bold ml-2">Hairbnb</h1>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold text-lg transition ease-in duration-100" : "text-gray-600 hover:text-pink-500 font-semibold text-lg transition ease-in duration-100"
            }
          >
            Stylists
          </NavLink>
          <NavLink
            to="/landing"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold text-lg transition ease-in duration-100" : "text-gray-600 hover:text-pink-500 font-semibold text-lg transition ease-in duration-100"
            }
          >
            About
          </NavLink>
        </div>

        {/* Get Started Button */}
        <div className="flex items-center">
          <NavLink
            to="/create"
            className="bg-pink-500 shadow-md text-white px-4 py-2 rounded-full mr-4 hover:bg-pink-600 transition ease-in duration-100"
          >
            Get Started
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
