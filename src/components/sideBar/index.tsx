import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { sideBarItems } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import SettingsCard from "../settings/settings";

const SideBar = () => {
  const location = useLocation();
  const iconMap: Record<string, React.ReactNode> = {
    arrowSide: <IoIosArrowForward size={15} />,
    arrowDown: <IoIosArrowDown size={15} />,
  };

  return (
    <div className="w-full">
      <h2 className="text-[18px] text-gray-400 px-5 pb-3 pt-3">General</h2>

      <nav className="flex flex-col">
        {sideBarItems.map(({ page, link, icons }, index) => {
          const Icon = iconMap[icons];
          const isActive = location.pathname === link;

          return (
            <Link
              key={page || index}
              to={link}
              className={`flex items-center justify-between gap-2 px-5 py-3 mt-2 text-sm rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-[#fff3f3] text-gray-800"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
            >
              <span>{page}</span>
              <span>{Icon}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 px-4 my-10">
        <SettingsCard />
      </div>
    </div>
  );
};

export default SideBar;
