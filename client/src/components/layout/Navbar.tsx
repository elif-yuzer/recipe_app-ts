import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="shadow-lg sticky top-0 z-80 bg-neutral-0">
      <div className=" max-w-7xl mx-auto flex justify-between items-center ">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className=" text-neutral-900 py-2.5 space-y-2 ">
          <ul className="flex justify-evenly items-center  gap-6 text-neutral-900 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-nunito transition-colors duration-200 hover:text-teal-500 text-preset-7 text-neutral-900 ${
                    isActive
                      ? "font-bold border-b-2  border-orange-500 pb-1"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-nunito text-preset-7 transition-colors duration-200 hover:text-teal-500 text-neutral-900 ${
                    isActive
                      ? "font-bold border-b-2  border-orange-500 pb-1"
                      : ""
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-nunito transition-colors duration-200 hover:text-teal-500 text-preset-7 text-neutral-900 ${
                    isActive
                      ? "font-bold border-b-2  border-orange-500 pb-1"
                      : ""
                  }`
                }
                to="/recipes"
              >
                Recipes
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-4">
          <NavLink
            to="/recipes"
            className="text-white rounded-10 bg-neutral-900 py-1.5 px-2 transition-all duration-200 
  hover:bg-neutral-600 
  hover:scale-105 
  active:scale-95 
  cursor-pointer "
          >
            Browse recipes
          </NavLink>
          <Link
            to="/sign-in"
            className="btn text-preset-7 transition-all duration-200 
 
  hover:scale-105 
  active:scale-95 
  cursor-pointer btn-ghost btn-sm"
          >
            Sign In
          </Link>
          <Link to="/sign-up" className="btn text-preset-7 transition-all duration-200 
 
  hover:scale-105 
  active:scale-95 
  cursor-pointer btn-ghost btn-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
