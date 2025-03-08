"use client";
import { useState } from "react";
import Layout from "../Layout";

export default function Landing() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [currPage, setCurrPage] = useState("Dashboard"); // Default page

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <Layout>
    <div className="flex w-screen h-screen bg-gray-200">
      <div className="flex flex-col w-full">

        <div className="flex h-screen">
          {/* Main Content */}
          <div className="w-full min-h-full bg-gray-300 flex shrink items-center justify-center">
            <img src="\img\gads_logo_transparent.png" alt="Logo" className="md:shrink" />
          </div>
        </div>

        {/* Footer */}
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
    </div>
    </Layout>
  );
}