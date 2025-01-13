import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faExchangeAlt, faTable, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-cyan-500 text-white p-6 h-screen transition-all duration-300 ${isOpen ? "w-64" : "w-16"} md:w-64`}
    >
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden text-white mb-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
      </button>

      {/* Sidebar Content */}
      <div className="space-y-4">
        {/* Dashboard Title: Visible on Desktop, Hidden on Mobile */}
        <h2 className={`text-2xl font-bold ${isOpen ? "block" : "hidden"} md:block`}>
          Dashboard
        </h2>
        {/* Shortened Dashboard Title: Visible on Mobile when collapsed */}
        <h2 className={`text-2xl font-bold ${isOpen ? "hidden" : "block"} md:hidden`}>
          D
        </h2>

        {/* Navigation Links */}
        <ul className="mt-8 space-y-4">
          {[
            { to: "/overview", icon: faHome, text: "Overview" },
            { to: "/trend", icon: faChartLine, text: "Trend" },
            { to: "/comparison", icon: faExchangeAlt, text: "Comparison" },
            { to: "/data", icon: faTable, text: "Data" },
          ].map(({ to, icon, text }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive ? "text-gray-300" : "hover:text-gray-300"}
              >
                <FontAwesomeIcon icon={icon} className="w-5 h-5 inline-block mr-2" />
                <span className={`hidden md:inline ${isOpen ? "" : "hidden"}`}>{text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
