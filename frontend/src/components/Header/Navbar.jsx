// import React from 'react'
import { FaSearch, FaCartPlus, FaUserPlus } from "react-icons/fa";
import zapposLogo from "./images/zapposLogo.jpg";

import ZapposMenus from "../../utilities/ZapposMenus"
import DesktopMegaMenusLayout from "./DesktopMegaMenusLayout";

const Navbar = () => {

  return (
    <header>
      <nav className=" w-full h-18 text-white px-8 py-2">
        {/* This is for upper nav - logo, search, signup, cart etc */}
        <div className=" h-1/2 flex justify-between items-center">
          <div className="flex gap-4 justify-between items-center">
            {/* Logo div  */}
            <div className="w-32 h-16">
              <img src={zapposLogo} alt="Logo" className=" w-full h-full" />
            </div>
            {/* search box , icon , search div  */}
            <div className="relative">
              <FaSearch className=" absolute top-4 left-3 text-slate-400" />
              <input className=" w-[600px] px-8 py-3 rounded-full text-left text-black border-[0.5px] border-black" type="text" placeholder="Search for shoes, clothes, etc." />
              <button className=" absolute top-[10px] left-[500px] text-black font-bold text-lg cursor-pointer">Search</button>
            </div>
          </div>
          {/* signup and cart div */}
          <div className="flex gap-4">
            <FaCartPlus className=" text-black text-3xl" /> <FaUserPlus className=" text-black text-3xl" />
          </div>
        </div>
        {/* This is for lower nav - menu */}
        <div className="h-1/2 flex justify-between items-center">
          <div>
            <ul className=" text-black flex gap-4 py-0 text-l font-bold cursor-pointer">
              {
                ZapposMenus?.map((menu) => (
                  <li key={menu.name} className=" p-2 rounded-full hover:bg-slate-100">
                    {menu.name}
                  </li>
                ))
              }
            </ul>
            {
              ZapposMenus?.map((zappposMenus) => (
                <DesktopMegaMenusLayout zappposMenus={zappposMenus} key={zappposMenus.name} />
              ))
            }
          </div>
          <div className="">
            <p className="text-black text-l font-bold p-2 rounded-full hover:bg-slate-100">Help and Support </p>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Navbar;
