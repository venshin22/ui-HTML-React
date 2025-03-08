
import {
  ChevronFirst,
  ChevronLast,
  Laptop2,
  LayoutDashboard,
  List,
  Clipboard,
  Users2,
  Hotel,
  User,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Products", icon: Laptop2, path: "/products" },
  { name: "Assigned Products", icon: Clipboard, path: "/assigned-products" },
  { name: "Categories", icon: List, path: "/categories" },
  { name: "Employee Management", icon: Users2, path: "/employee-management" },
  { name: "List of Departments", icon: Hotel, path: "/departments" },
  { name: "User Management", icon: User, path: "/user-management" },
];

export default function SideBar({ currPage, setCurrPage, isCollapsed, setIsCollapsed }) {
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`fixed h-screen ${
        isCollapsed ? "w-16" : "w-64" // Tailwind classes for width
      } transition-all duration-250 ease-in-out`}
    >
      <div className="h-full flex flex-col overflow-hidden bg-gray-800 border-r shadow-md">
        <div className="flex p-4 justify-between items-center">
          {!isCollapsed && (
            <img
              src="/img/gads_logo_transparent.png" 
              alt="logo"
              className="h-12"
            />
          )}
          {!isCollapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Inventory
            </span>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-lg bg-gray-600 hover:bg-gray-400"
          >
            {isCollapsed ? (
              <ChevronLast color="white" />
            ) : (
              <ChevronFirst color="white" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-center text-white">

          <ul className="flex flex-col space-y-6 w-full px-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <div
                  className={`flex items-center p-2 hover:bg-[#cf8f0b] rounded-lg cursor-pointer ${
                    currPage === item.name ? "bg-[#e0a516]" : ""
                  }`}
                  onClick={() => setCurrPage(item.name)}
                >
                  <item.icon className="w-6 h-6" />
                  {!isCollapsed && <a className="block pl-3">{item.name}</a>}
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </aside>
  );
}