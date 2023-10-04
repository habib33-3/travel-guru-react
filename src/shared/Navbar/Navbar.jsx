import { NavLink } from "react-router-dom";
// import logo from "./logo.png"

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className="font-Montserrat font-medium"
          to="/news"
        >
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          className="font-Montserrat font-medium"
          to="/destination"
        >
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          className="font-Montserrat font-medium"
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className="font-Montserrat font-medium"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 gap-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img
            src="./logo.png"
            className="w-30 h-14 mx-2"
            alt=""
          />
          <div className="w-52">
            <input
              type="text"
              placeholder="search here"
              className="p-3 input input-bordered w-full"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-success">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
