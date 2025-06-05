const LegendComponent = () => (
  <>
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <span className="text-gray-300">1 Active Bookings</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <span className="text-gray-300">2 Pending Bookings</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        <span className="text-gray-300">Completed Bookings</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-slate-500 rounded-full" />
        <span className="text-gray-300">Rescheduled Bookings</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full" />
        <span className="text-gray-300">Cancelled Bookings</span>
      </div>
    </div>
  </>
);

export default LegendComponent;
