import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import SideBar from "./components/sideBar";
import {
  AppComponents,
  Home,
  UserSetup,
  VRS,
  AppUserManagement,
  BookingManagement,
  AdvanceAnalysis,
  AuditTraning,
  Transactions,
  Events,
} from "./pages/index";

function App() {
  return (
    <Router>
      <div className="w-full h-screen overflow-hidden flex flex-col">
        {/* Navbar */}
        <div className="w-full">
          <NavBar />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-[273px] h-full overflow-y-auto sticky top-0 left-0 bg-white shadow-sm">
            <SideBar />
          </div>

          {/* Page Routes */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app-components" element={<AppComponents />} />
              <Route path="/user-setup" element={<UserSetup />} />
              <Route path="/vrs" element={<VRS />} />
              <Route
                path="/app-user-management"
                element={<AppUserManagement />}
              />
              <Route
                path="/booking-and-order-management"
                element={<BookingManagement />}
              />
              <Route path="/advance-analysis" element={<AdvanceAnalysis />} />
              <Route path="/audit-train" element={<AuditTraning />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/event/:id" element={<Events />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
