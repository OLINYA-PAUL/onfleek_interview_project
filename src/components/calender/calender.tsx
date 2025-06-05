import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type {
  CalendarEvent,
  TimeSlot,
  MonthDay,
  EventPosition,
  ViewType,
} from "../../utils/types/calendar.types";
import { useNavigate } from "react-router-dom";
import LegendComponent from "../LegendComponent";

const Calendar = ({
  initialDate = new Date(2024, 5, 23),
  initialView = "Week",
  initialEvents = [],
  className = "",
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  const [selectedView, setSelectedView] = useState(initialView);
  const [events] = useState<CalendarEvent[]>([
    {
      id: 1,
      title: "Morning Workout",
      day: 0,
      startTime: "7:00",
      endTime: "8:00",
      color: "bg-green-100 border-l-4 border-green-400 text-green-700",
    },
    {
      id: 2,
      title: "Team Meeting",
      day: 0,
      startTime: "10:00",
      endTime: "11:30",
      color: "bg-blue-100 border-l-4 border-blue-400 text-blue-700",
    },
    {
      id: 3,
      title: "Lunch Break",
      day: 0,
      startTime: "12:00",
      endTime: "13:00",
      color: "bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700",
    },
    {
      id: 4,
      title: "Client Presentation",
      day: 1,
      startTime: "9:00",
      endTime: "10:30",
      color: "bg-purple-100 border-l-4 border-purple-400 text-purple-700",
    },
    {
      id: 5,
      title: "Code Review",
      day: 1,
      startTime: "14:00",
      endTime: "15:00",
      color: "bg-indigo-100 border-l-4 border-indigo-400 text-indigo-700",
    },
    {
      id: 6,
      title: "Project Planning",
      day: 1,
      startTime: "16:00",
      endTime: "17:30",
      color: "bg-red-100 border-l-4 border-red-400 text-red-700",
    },
    {
      id: 8,
      title: "Design Workshop",
      day: 2,
      startTime: "11:00",
      endTime: "12:30",
      color: "bg-pink-100 border-l-4 border-pink-400 text-pink-700",
    },
    {
      id: 9,
      title: "Marketing Call",
      day: 2,
      startTime: "15:00",
      endTime: "16:00",
      color: "bg-orange-100 border-l-4 border-orange-400 text-orange-700",
    },
    {
      id: 10,
      title: "Technical Interview",
      day: 3,
      startTime: "10:00",
      endTime: "11:00",
      color: "bg-gray-100 border-l-4 border-gray-400 text-gray-700",
    },
    {
      id: 11,
      title: "Product Demo",
      day: 3,
      startTime: "13:00",
      endTime: "14:00",
      color: "bg-emerald-100 border-l-4 border-emerald-400 text-emerald-700",
    },
    {
      id: 12,
      title: "Team Building",
      day: 3,
      startTime: "18:00",
      endTime: "20:00",
      color: "bg-cyan-100 border-l-4 border-cyan-400 text-cyan-700",
    },
    {
      id: 13,
      title: "Budget Review",
      day: 4,
      startTime: "8:30",
      endTime: "9:30",
      color: "bg-lime-100 border-l-4 border-lime-400 text-lime-700",
    },
    {
      id: 14,
      title: "All-Hands Meeting",
      day: 4,
      startTime: "14:00",
      endTime: "15:30",
      color: "bg-violet-100 border-l-4 border-violet-400 text-violet-700",
    },
    {
      id: 15,
      title: "Weekly Retrospective",
      day: 5,
      startTime: "9:00",
      endTime: "10:00",
      color: "bg-rose-100 border-l-4 border-rose-400 text-rose-700",
    },
    {
      id: 16,
      title: "Happy Hour",
      day: 5,
      startTime: "17:00",
      endTime: "19:00",
      color: "bg-amber-100 border-l-4 border-amber-400 text-amber-700",
    },
    {
      id: 17,
      title: "Weekend Project",
      day: 6,
      startTime: "10:00",
      endTime: "12:00",
      color: "bg-slate-100 border-l-4 border-slate-400 text-slate-700",
    },
    ...initialEvents,
  ]);

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

  const handleViewChange = (view: ViewType): void => {
    setSelectedView(view);
  };

  const navigate = useNavigate();

  const handleEventClick = (events: CalendarEvent) => {
    navigate(`/event/${events.id}`, { state: { events } });
  };

  const timeSlots: TimeSlot[] = [];
  for (let hour = 7; hour <= 23; hour++) {
    const time12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 12 ? 12 : time12;
    timeSlots.push({
      value: `${hour.toString().padStart(2, "0")}:00`,
      display: `${displayHour} ${ampm}`,
    });
  }

  const getWeekDays = useCallback((date: Date): Date[] => {
    const week: Date[] = [];
    const startDate = new Date(date);
    const day = startDate.getDay();
    startDate.setDate(startDate.getDate() - day);
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(startDate);
      currentDay.setDate(startDate.getDate() + i);
      week.push(currentDay);
    }
    return week;
  }, []);

  const getMonthDays = useCallback((date: Date): MonthDay[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    const days: MonthDay[] = [];
    for (let i = startingDay - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ date: new Date(year, month, day), isCurrentMonth: true });
    }
    const remainingCells = 42 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        date: new Date(year, month + 1, day),
        isCurrentMonth: false,
      });
    }
    return days;
  }, []);

  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const getEventPosition = (event: CalendarEvent): EventPosition => {
    const startMinutes = timeToMinutes(event.startTime);
    const endMinutes = timeToMinutes(event.endTime);
    const duration = endMinutes - startMinutes;
    const baseTime = 7 * 60;
    const top = ((startMinutes - baseTime) / 60) * 60;
    const height = (duration / 60) * 60;
    return { top: `${top}px`, height: `${height}px` };
  };

  const weekDays = getWeekDays(currentDate);
  const monthDays = getMonthDays(currentDate);

  return (
    <div className={`flex h-screen bg-gray-100 ${className}`}>
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h1>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-gray-700 rounded" type="button">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-700 rounded" type="button">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 flex-1">
          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <div key={day} className="text-gray-400 py-1">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {monthDays.map((day, index) => {
              const isSelected =
                day.date.toDateString() === currentDate.toDateString();
              const isToday =
                day.date.toDateString() === new Date().toDateString();
              return (
                <button
                  key={index}
                  onClick={() => setCurrentDate(day.date)}
                  className={`w-8 h-8 text-xs rounded transition-colors ${
                    day.isCurrentMonth ? "text-white" : "text-gray-600"
                  } ${
                    isSelected
                      ? "bg-red-500"
                      : isToday
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  type="button"
                >
                  {day.date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Calendar */}
      <div className="flex-1 bg-white flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center justify-end w-full">
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => handleViewChange("Week")}
                className={`flex-1 py-1 px-3 text-sm font-medium rounded-md transition-colors ${
                  selectedView === "Week"
                    ? "bg-red-500 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                type="button"
              >
                Week
              </button>
              <button
                onClick={() => handleViewChange("Month")}
                className={`flex-1 py-1 px-3 text-sm font-medium rounded-md transition-colors ${
                  selectedView === "Month"
                    ? "bg-red-500 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                type="button"
              >
                Month
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-8 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div className="p-4 border-r border-gray-200" />
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  className="p-4 text-center border-r border-gray-200"
                >
                  <div className="text-lg font-semibold">{day.getDate()}</div>
                </div>
              ))}
            </div>

            <div className="relative">
              {timeSlots.map((timeSlot) => (
                <div
                  key={timeSlot.value}
                  className="grid grid-cols-8 border-b border-gray-100 h-16"
                >
                  <div className="p-2 text-right text-sm text-gray-500 border-r border-gray-200 flex items-start justify-end">
                    {timeSlot.display}
                  </div>
                  {[...Array(7)].map((_, colIndex) => (
                    <div
                      key={colIndex}
                      className="border-r border-gray-200 h-full"
                    />
                  ))}
                </div>
              ))}

              <div className="absolute inset-0 pointer-events-none">
                {events.map((event) => {
                  const position = getEventPosition(event);
                  const dayWidth = 100 / 8;
                  const left = (event.day + 1) * dayWidth;
                  return (
                    <div
                      key={event.id}
                      className={`absolute rounded-md p-2 mx-1 pointer-events-auto cursor-pointer shadow-sm ${event.color}`}
                      style={{
                        ...position,
                        left: `${left}%`,
                        width: `${dayWidth - 0.5}%`,
                      }}
                      onClick={() => handleEventClick(event)}
                    >
                      <div className="text-xs font-medium text-red-600">
                        {event.startTime.replace(":00", ":00")}{" "}
                        {parseInt(event.startTime.split(":")[0]) >= 12
                          ? "PM"
                          : "AM"}
                      </div>
                      <div className="text-xs font-semibold text-red-700 whitespace-pre-wrap">
                        {event.title}
                      </div>
                    </div>
                  );
                })}
              </div>
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

export default Calendar;
