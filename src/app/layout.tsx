// src/app/layout.tsx

import Sidebar from "./components/Sidebar";
import { ReactNode } from "react";
import "./globals.css"; // Import your global styles if needed

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
