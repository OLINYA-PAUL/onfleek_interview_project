import NavItems from "./navItems";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full px-10 h-auto bg-bgColor flex items-center justify-between py-2">
      <div className="">
        <Link to={"/"}>
          <img
            src={"/assets/Logo.png"}
            alt="onfleek_logo"
            className="w-[100px] h-[53px] cursor-pointer"
          />
        </Link>
      </div>

      <div className="">
        <NavItems />
      </div>
    </div>
  );
};

export default NavBar;
