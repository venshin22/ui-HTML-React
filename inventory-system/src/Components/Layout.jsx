import { useState } from "react";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currPage, setCurrPage] = useState("");

  return (
    <div className="flex">
      <SideBar
        currPage={currPage}
        setCurrPage={setCurrPage}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <div className="flex-1">
        <Header currPage={currPage} isCollapsed={isCollapsed} />
        <main>{children}</main>
      </div>
    </div>
  );
}