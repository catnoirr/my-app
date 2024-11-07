"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname to get the current path
import { FaHome, FaUser, FaFileAlt, FaCalendarAlt, FaQuestionCircle, FaSignOutAlt, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link'; // Import the Link component

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false); // State for sidebar expansion

  return (
    <div className={`flex flex-col align-middle sidebar h-screen bg-purple-800 text-white transition-all duration-300 ${isExpanded ? 'w-48' : 'w-20'}`}>
      {/* Logo and Expand/Collapse Button */}
      <div className="relative flex items-center justify-center p-4">
        <img src="/image.png" alt="Logo" className="p-1" />
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-[-14px] top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-md bg-white shadow-md flex items-center justify-center text-purple-800"
        >
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      {/* Sidebar Items */}
      <div className="flex flex-col mt-4 space-y-4">
        <SidebarItem icon={<FaHome />} label="Dashboard" route="/" isExpanded={isExpanded} />
        <SidebarItem icon={<FaUser />} label="Audience" route="/audience" isExpanded={isExpanded} />
        <SidebarItem icon={<FaFileAlt />} label="Posts" route="/posts" isExpanded={isExpanded} />
        <SidebarItem icon={<FaCalendarAlt />} label="Schedules" route="/schedules" isExpanded={isExpanded} />
        
        <div className="border-t border-gray-300 my-2"></div>
        
        <SidebarItem icon={<FaQuestionCircle />} label="Help" route="/help" isExpanded={isExpanded} />
        <SidebarItem icon={<FaSignOutAlt />} label="Logout" route="/logout" isExpanded={isExpanded} textColor="text-red-500" />
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, label, route, isExpanded, textColor = 'text-white' }) {
  const pathname = usePathname(); // Get the current path
  const isActive = pathname === route; // Check if the current path matches this item's route

  return (
    <div className="relative group flex justify-center">
      <Link href={route}>
        <button 
          className={`flex items-center ${isExpanded ? 'justify-start w-full' : 'justify-center'} p-3 rounded-lg cursor-pointer 
          ${isActive ? 'bg-white text-black' : `${textColor} hover:bg-white hover:text-black`}`}
        >
          <span className="text-lg">{icon}</span>
          {isExpanded && <span className="ml-3">{label}</span>}
        </button>
      </Link>

      {/* Tooltip for collapsed state */}
      {!isExpanded && (
        <span className="absolute left-16 top-1/2 -translate-y-1/2 px-2 py-1 text-sm bg-purple-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {label}
          {/* Tooltip Pointer */}
          <span className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 w-3 h-1 border-t-4 border-b-4 border-r-4 border-transparent border-r-purple-900"></span>
        </span>
      )}
    </div>
  );
}
