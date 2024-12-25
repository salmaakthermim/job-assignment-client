

import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext, useState } from 'react';
import Logo from '../../public/logo.jpg';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (logOut) {
        await logOut();
        setDropdownOpen(false);
        navigate('/login'); // Redirect after logout
      } else {
        console.error('logOut function is not defined.');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <nav className="bg-blue-500 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Website Logo and Name */}
          <div className="flex items-center gap-4">
            <img className="h-12 w-12 rounded-full" src={Logo} alt="Logo" />
            <div className="text-2xl font-bold">
              <Link to="/">Online Group-Study</Link>
            </div>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`md:flex items-center space-x-4 ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            <NavLink
              to="/assignments"
              className={({ isActive }) =>
                `hover:text-gray-200 ${isActive ? 'text-gray-300' : ''}`
              }
            >
              Assignments
            </NavLink>

            {user ? (
              <>
                {/* Protected Links */}
                <NavLink
                  to="/pending-assignments"
                  className={({ isActive }) =>
                    `hover:text-gray-200 ${isActive ? 'text-gray-300' : ''}`
                  }
                >
                  Pending Assignments
                </NavLink>

                <div className="relative">
                  {/* Profile Picture */}
                  <img
                    src={user.photoURL || '/default-profile.png'}
                    alt="Profile"
                    className="h-10 w-10 rounded-full cursor-pointer border-2 border-white"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  />

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-md rounded-lg z-50">
                      <div className="px-4 py-2 border-b border-gray-200">
                        {user.displayName}
                      </div>
                      <NavLink
                        to="/create-assignment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Create Assignment
                      </NavLink>
                      <NavLink
                        to="/my-attempted-assignments"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        My Attempted Assignments
                      </NavLink>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Login Button for Guests
              <NavLink
                to="/login"
                className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
              >
                Login
              </NavLink>
            )}
            {/* <ThemeToggle></ThemeToggle> */}
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

