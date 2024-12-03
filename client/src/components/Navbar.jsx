import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white shadow-lg fixed top-0 left-0 right-0 z-20">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        {/* Logo and Site Name */}
        <NavLink to="/" className="flex items-center">
          <img
            alt="HairBnB logo"
            className="h-10"
            src="/hairbnblogonobackground.png"
          />
          <h1 className="text-2xl font-extrabold text-gray-800 ml-2">HairBnB</h1>
        </NavLink>

        {/* Navigation Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold text-lg transition ease-in-out duration-150"
                : "text-gray-700 hover:text-pink-500 font-medium text-lg transition ease-in-out duration-150"
            }
          >
            Stylists
          </NavLink>
          <NavLink
            to="/landing"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold text-lg transition ease-in-out duration-150"
                : "text-gray-700 hover:text-pink-500 font-medium text-lg transition ease-in-out duration-150"
            }
          >
            About
          </NavLink>
        </div>
        
        
        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/ProfilePage"
            className="bg-pink-500 shadow-lg text-white px-6 py-2 rounded-full hover:bg-pink-600 transition ease-in-out duration-200"
          >
            My Profile
          </NavLink>
          <NavLink
            to="/create"
            className="bg-pink-500 shadow-lg text-white px-6 py-2 rounded-full hover:bg-pink-600 transition ease-in-out duration-200"
          >
            Get Started / Log In
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open Menu"
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>


      </nav>
    </div>
  );
}
