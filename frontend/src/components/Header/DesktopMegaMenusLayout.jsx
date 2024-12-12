// import React from 'react'

const DesktopMegaMenusLayout = ({ zappposMenus }) => {

  return (
    <div className="relative">
      {/* This is the main mega menu div */}
      <div className="text-black grid grid-cols-4 gap-4 p-6 rounded-xl bg-white shadow-lg border border-gray-200">
        {
          zappposMenus?.submenus?.map((submenu) => (
            <div key={submenu.title} className="space-y-4">
              {/* Title of the submenu */}
              <p className="font-bold text-lg text-gray-900">{submenu.title}</p>
              {/* List of submenu items */}
              {
                submenu.menus?.map((menu, index) => (
                  <p key={index} className="text-sm text-gray-600 hover:text-blue-500 cursor-pointer">
                    {menu}
                  </p>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default DesktopMegaMenusLayout;
