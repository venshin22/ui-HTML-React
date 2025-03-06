import { Menu } from "lucide-react";

export default function Landing() {
  return (
    <div className="w-screen h-screen bg-gray-200">
      <header className="flex items-center justify-between bg-gray-900 h-15 px-8">
        <div className="flex items-center justify-center space-x-2.5">
          <button className="bg-gray-800 p-2 rounded-md hover:cursor-pointer">
            <Menu color="white" size={18} />
          </button>
          <h1 className="text-white text-md"></h1>
        </div>

        <div className="text-center">
          <span className="text-amber-600 text-xs">Admin</span>
        </div>
      </header>

      <div className="min-h-full bg-gray-300 flex items-center justify-center">
        <img src="\img\gads_logo_transparent.png"></img>
      </div>

      <footer className="bg-white dark:bg-gray-900 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-2 py-1">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <span className="text-gray-900 font-semibold dark:text-gray-300 text-sm">
              Golden Arrow Inventory System
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              © {new Date().getFullYear()} Golden Arrow. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}