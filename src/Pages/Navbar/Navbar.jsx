import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../../assets/Raf.png'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="text-white text-lg font-semibold">
           <img className='h-8' src={pic} alt="" />
          </NavLink>

          {/* Small profile picture */}
          
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.293 7.293a1 1 0 0 0-1.414-1.414L12 10.586 5.121 3.707a1 1 0 0 0-1.414 1.414l7.778 7.778a1 1 0 0 0 1.414 0l7.778-7.778a1 1 0 0 0 0-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li>
            <NavLink
              exact
              to="/"
              className="text-gray-300 hover:text-white"
              activeClassName="text-white"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="text-gray-300 hover:text-white"
              activeClassName="text-white"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-gray-300 hover:text-white"
              activeClassName="text-white"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-gray-300 hover:text-white"
              activeClassName="text-white"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden bg-gray-900 py-2 px-4 mt-2">
            <li>
              <NavLink
                exact
                to="/"
                className="text-white block py-1"
                activeClassName="font-bold"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="text-white block py-1"
                activeClassName="font-bold"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white block py-1"
                activeClassName="font-bold"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white block py-1"
                activeClassName="font-bold"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
