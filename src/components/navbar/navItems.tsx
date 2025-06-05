import { IoIosArrowDown } from "react-icons/io";

interface ProfileNameProps {
  name: string;
  handleClick: () => void;
}

const ProfileName = ({ name, handleClick }: ProfileNameProps) => {
  return (
    <div
      onClick={handleClick}
      className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-secondary text-[14px] text-[#FF5859] bg-[#fff3f3] cursor-pointer"
    >
      {name}
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="flex items-center gap-5 ">
      <div className="flex items-center gap-3 bg-[#FAFAFC] rounded-md w-auto h-[49px] p-3">
        <div>
          <img
            src="/assets/Desktop.png"
            alt="Desktop"
            className="w-[32px] h-[32px]"
          />
        </div>
        <div>
          <p className="text-sm text-[14px] font-sans">Visite Website</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ProfileName name="C.0" handleClick={() => ""} />
        <ProfileName name="D.A" handleClick={() => ""} />
      </div>

      <div>
        <img
          src="/assets/Notification.png"
          alt="notification_icons"
          className="w-[24px] h-[24px]"
        />
      </div>

      <div
        className="flex items-center gap-5 cursor-pointer"
        onClick={() => alert("Hello")}
      >
        <img
          src="/assets/Profile.png"
          alt="profile"
          className="w-[60px] h-[60px]"
        />

        <div>
          <div className="flex items-center gap-5">
            <h4 className="font-bold font-sans text-[14px] text-gray-400">
              DEJI
            </h4>
            <IoIosArrowDown size={20} className="text-gray-500" />
          </div>
          <p className="text-sm text-gray-300 font-normal">Vendor manager</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
