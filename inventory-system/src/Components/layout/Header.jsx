
export default function Header({ currPage, isCollapsed }) {
  return (
    <header className="flex flex-wrap items-center justify-between bg-gray-900 h-15 px-8">
      <div className="flex shrink items-center justify-center space-x-2.5">
        <h1
          className={`text-white text-md ${
            isCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          {currPage}
        </h1>
      </div>

      <div className="text-center">
        <span className="text-amber-600 text-sm">Welcome, User!</span>
      </div>
    </header>
  );
}