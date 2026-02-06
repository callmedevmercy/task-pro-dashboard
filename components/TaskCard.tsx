interface TaskCardProps {
  title: string;
  category: string;
  status: 'High' | 'Medium' | 'Low';
}

export default function TaskCard({ title, category, status }: TaskCardProps) {
  // This object maps the status to specific Tailwind colors
  const statusColor = {
    High: 'bg-red-100 text-red-600',
    Medium: 'bg-amber-100 text-amber-600',
    Low: 'bg-green-100 text-green-600',
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-4">
        {/* Dynamic Badge */}
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusColor[status]}`}>
          {status} Priority
        </span>
        <span className="text-xs text-slate-400 font-medium">{category}</span>
      </div>

      <h3 className="font-bold text-slate-800 text-lg mb-4 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">
            JD
          </div>
          <span className="text-xs text-slate-500">Assigned to you</span>
        </div>
        <div className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">
          Feb 2026
        </div>
      </div>
    </div>
  );
}