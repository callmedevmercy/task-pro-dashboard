import { LayoutDashboard, CheckSquare, Users, Settings } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: CheckSquare, label: 'My Tasks' },
    { icon: Users, label: 'Team' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col p-4">
      {/* App Logo Area */}
      <div className="flex items-center gap-2 px-2 mb-10">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          T
        </div>
        <span className="text-xl font-bold text-slate-900 tracking-tight">TaskPro</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button 
            key={item.label}
            className="flex items-center gap-3 w-full px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all group"
          >
            <item.icon size={20} className="group-hover:text-blue-600" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Profile (Bottom) */}
      <div className="border-t pt-4 mt-auto">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 bg-slate-200 rounded-full" />
          <div className="text-sm">
            <p className="font-semibold text-slate-900">Ottah-Nelson Mercy </p>
            <p className="text-slate-500">Junior Developer</p>
          </div>
        </div>
      </div>
    </aside>
  );
}