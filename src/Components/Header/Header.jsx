import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className="font-extrabold  text-[#757575]">
        <NavLink to={"/"}>Statistics</NavLink>
      </li>

      <li className="font-extrabold text-[#757575]">
        <NavLink to={"/applied"}>Applied Jobs</NavLink>
      </li>
      <li className="font-extrabold  text-[#757575]">
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );
  return (
    <header className="banner-bg z-10  lg:px-0  ">
      <div className=" container  mx-auto">
        <nav className=" py-12  flex items-center justify-between ">
          <div>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                className="bg-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 space-y-5 "
              >
                {links}
                <li>
                  <a className="rounded-xl primary-color text-white text-sm font-extrabold capitalize p-2">
                    Star Applying
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn btn-ghost normal-case font-extrabold text-3xl">
              CareerHub
            </button>
          </div>
          <div className=" hidden  lg:flex">
            <ul className="gap-10 menu-horizontal  px-1">{links}</ul>
          </div>
          <div className=" hidden md:inline   ">
            <a className="rounded-xl primary-color text-white text-xl px-7 py-5 font-extrabold capitalize">
              Star Applying
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
