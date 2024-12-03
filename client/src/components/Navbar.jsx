import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react"; 
import { useOutletContext } from "react-router-dom"; // For accessing user context
import { UserContext } from "./UserContext"; 
import { signOut } from "firebase/auth"; // Firebase logout
import { auth } from "../firebaseConfig"; // Firebase config

export default function Navbar() {
  
  const { user, setUser } = useContext(UserContext); 
  const navigate = useNavigate(); // Navigation hook
  console.log("User state:", user);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      setUser(null); // Clear the user context
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 mb-6">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and Site Name */}
        <NavLink to="/" className="flex items-center">
          <img
            alt="HairBnB logo"
            className="h-10 ml-4"
            src="/hairbnblogonobackground.png"
          />
          <h1 className="text-2xl font-bold ml-2">HairBnB</h1>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
        <NavLink
            to="/landing"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold text-lg transition ease-in duration-100" : "text-gray-600 hover:text-pink-500 font-semibold text-lg transition ease-in duration-100"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold text-lg transition ease-in duration-100" : "text-gray-600 hover:text-pink-500 font-semibold text-lg transition ease-in duration-100"
            }
          >
            Stylists
          </NavLink>
        </div>
        
        

        {/* Profile or Login */}
        <div className="flex items-center">
          {user ? (
            <>
              <NavLink
                to="/ProfilePage"
                className="bg-pink-500 shadow-md text-white px-4 py-2 rounded-full mr-4 hover:bg-pink-600 transition ease-in duration-100"
              >
                My Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="bg-red-500 shadow-md text-white px-4 py-2 rounded-full hover:bg-red-600 transition ease-in duration-100"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/create"
              className="bg-pink-500 shadow-md text-white px-4 py-2 rounded-full mr-4 hover:bg-pink-600 transition ease-in duration-100"
            >
              Get Started / Log In
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}
