import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard"; // We'll make this file next!

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Welcome back, Mercy!</h1>
          <p className="text-slate-500">Here’s what’s happening with your projects today.</p>
        </div>

        {/* This is the Grid where our cards live */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TaskCard title="Build Portfolio UI" category="Development" status="High" />
          <TaskCard title="Setup GitHub Repo" category="DevOps" status="Medium" />
          <TaskCard title="Study React Hooks" category="Learning" status="Low" />
        </div>
      </main>
    </div>
  );
}