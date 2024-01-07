import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "../../styles/navStyles.css";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();

  return (
    <div className="bg-[#000000] sticky w-full top-0 z-10 flex justify-between items-center px-[51px] md:px-8 py-[21px]">
      <Link to={"/"}>
        <h2 className="text-lg text-white font-thick font-Inter">HOME</h2>
      </Link>
      <div className="md:flex md:items-center gap-10">
        <div className="md:flex md:items-center gap-5">
          <ul
            className={`absolute md:static w-full md:w-auto p-4 ${
              openNav
                ? "top-[5rem] left-0 z-20 bg-[#000000] flex"
                : "top-[-20rem] left-0"
            } flex flex-col md:flex-row justify-center items-center md:items-center md:justify-end gap-8 py-4 md:py-2 transition-all duration-700 ease-in`}
          >
            {navLinks?.map((el, index) => (
              <li key={index}>
                <NavLink
                  to={el?.link}
                  className={`uppercase text-[13px] text-white font-Inter font-thick py-[15px] px-[24px] rounded-[100px] bg-navLinkBg ${location.pathname === el?.link ? 'active-link' : '' }`}
                >
                  {el?.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="md:hidden p-2 text-2xl text-white border border-white rounded-md outline-none focus:border-gray-400"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </div>
  );
};

export default Nav;
