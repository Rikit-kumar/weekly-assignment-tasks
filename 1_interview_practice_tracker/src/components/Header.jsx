import { Menu } from "lucide-react";

import { useLocation } from "react-router";

function Header({ setIsOpen }) {
  const location = useLocation();

  const pageNames = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/questions": "Questions",
    "/progress": "Progress",
  };

  const pageName = pageNames[location.pathname] || "Dashboard";

  return (
    <header className="sticky top-0 z-30 flex min-h-20 items-center justify-between border-b border-white/10 bg-[#0b0c0f]/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <p className="text-xs text-gray-500">Workspace</p>

          <h2 className="text-lg font-semibold">{pageName}</h2>
        </div>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-sm font-semibold text-indigo-400">
        RK
      </div>
    </header>
  );
}

export default Header;
