import { Code2, LayoutDashboard, TrendingUp, X } from "lucide-react";

import { NavLink } from "react-router";

function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Questions",
      path: "/questions",
      icon: Code2,
    },
    {
      name: "Progress",
      path: "/progress",
      icon: TrendingUp,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-white/10 bg-[#101114] transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div>
            <h1 className="text-xl font-bold">
              Interview
              <span className="text-indigo-400">Track</span>
            </h1>

            <p className="mt-1 text-xs text-gray-500">Coding preparation</p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 lg:hidden"
          >
            <X size={22} />
          </button>
        </div>
        
        <nav className="space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-indigo-500/15 text-indigo-400"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={19} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-white/10 p-4">
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-sm font-semibold">Keep going 🚀</p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Consistency is more important than solving everything in one day.
            </p>
          </div>

          <p className="mt-5 text-center text-xs text-gray-600">
            © 2026 InterviewTrack
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
