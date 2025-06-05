import { Settings, LogOut } from "lucide-react";

const SettingsCard = () => {
  return (
    <div className="w-full p-4 sm:p-5 relative flex justify-start items-center flex-col bg-[#FF5859] rounded-2xl h-[120px] sm:h-[150px] overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute h-[150px] w-[200px] sm:h-[200px] sm:w-[300px] rounded-full top-[-120px] sm:top-[-160px] left-10 sm:left-20 bg-[#ff8181]" />
      <div className="absolute h-[150px] w-[200px] sm:h-[200px] sm:w-[300px] rounded-full bottom-[-130px] sm:bottom-[-170px] right-10 sm:right-20 bg-[#ff8181]" />

      {/* Content */}
      <div className="w-full z-10">
        <h2 className="text-white text-sm sm:text-base font-medium">Others</h2>

        {/* Organisation settings */}
        <div className="w-full flex items-center justify-start mt-2 sm:mt-3 gap-2">
          <Settings size={18} className="text-white sm:w-5 sm:h-5" />
          <p className="text-white text-sm sm:text-[15px]">
            Organisation settings
          </p>
        </div>

        {/* Logout */}
        <div className="w-full flex items-center justify-start mt-1.5 sm:mt-3 gap-2">
          <LogOut size={18} className="text-white sm:w-5 sm:h-5" />
          <p className="text-white text-sm sm:text-[15px]">LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
