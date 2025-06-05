import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TbReload } from "react-icons/tb";
import LegendComponent from "../components/LegendComponent";

const Events = () => {
  // const params = useParams();
  const location = useLocation();

  const event = location.state?.events;
  // const eventId = Number(params.id);

  const startTime = event?.startTime?.split(":")[0];
  const endTime = event?.endTime?.split(":")[0];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">
              {currentMonth} {currentYear}
            </h1>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-gray-700 rounded">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-700 rounded">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini Calendar */}
        <div className="p-4 flex-1">
          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <div key={d} className="text-gray-400 py-1">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: 42 }, (_, idx) => (
              <button
                key={idx}
                className="w-8 h-8 text-xs rounded text-white hover:bg-gray-700"
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div className="flex flex-col w-48 min-w-0 mt-10 text-red-500 font-bold font-sans ml-2">
            <h1 className="text-xl font-semibold text-center">
              {currentDate.getDate()} {currentMonth} {currentYear}
            </h1>
            <h1 className="text-xl font-semibold text-slate-400 mt-5">
              {startTime && startTime >= 12
                ? startTime + "pm"
                : startTime + "am"}{" "}
              - {endTime && endTime >= 12 ? endTime + "pm" : endTime + "am"}
            </h1>
            <div className="pt-2">
              <LegendComponent />
            </div>
          </div>
        </div>
      </div>

      {/* Main Calendar */}
      <div className="flex-1 bg-white flex flex-col">
        <div className="flex items-center justify-end p-4 border-b border-gray-200 ">
          <div className="flex  rounded-lg p-1 gap-3 ">
            {["Week", "Month"].map((view) => (
              <button
                key={view}
                className={`py-1 ${
                  view === "Week"
                    ? "bg-transparent border-2 border-red-400 rounded-md text-black"
                    : "text-black"
                } bg-red-500  px-3 text-sm font-medium rounded-md  cursor-pointer   ${
                  view === "Month" && "text-white"
                }`}
              >
                {view}
              </button>
            ))}
            <button className="py-1 px-3 text-sm font-medium rounded-md bg-gray-800 text-white hover:text-white cursor-pointer ">
              <TbReload size={30} color="white" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-8 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div className="p-4 border-r border-gray-200" />
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (d, idx) => (
                  <div
                    key={idx}
                    className="p-4 text-center border-r border-gray-200"
                  >
                    <div className="text-lg font-semibold">{d}</div>
                  </div>
                )
              )}
            </div>

            {/* Time Grid */}
            <div className="relative">
              {Array.from({ length: 17 }, (_, i) => (
                <div
                  key={i}
                  className="grid grid-cols-8 border-b border-gray-100 h-16"
                >
                  <div className="p-2 text-right text-sm text-gray-500 border-r border-gray-200">
                    {`${7 + i}:00`}
                  </div>
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div key={j} className="border-r border-gray-100" />
                  ))}
                </div>
              ))}

              {event && (
                <div className="absolute top-[60px] left-[12.5%] w-[12%] h-[120px] rounded-md p-2 mx-1 shadow-sm bg-red-100 border-l-4 border-red-400 text-red-700 text-xs font-semibold">
                  <div className="text-red-600">{event.startTime}</div>
                  {event.title}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="bg-white flex flex-col ml-3 w-48 min-w-0">
        <div className="p-4">
          <LegendComponent />
        </div>
      </div>
    </div>
  );
};

export default Events;
