import { Skeleton } from "../ui/skeleton"

export default function DashboardSkeleTon() {
  return (
    <div className="flex min-h-screen bg-[#0B0D13]">
      {/* Sidebar Skeleton */}
      <div className="w-64 border-r border-zinc-800 bg-[#0B0D13] p-6 space-y-6">
        <Skeleton className="h-8 w-24 bg-zinc-800" />
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full bg-zinc-800" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-64 bg-zinc-800" />
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-16 bg-zinc-800" />
            ))}
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-6 rounded-lg bg-[#12141C] border border-zinc-800">
              <Skeleton className="h-4 w-24 mb-2 bg-zinc-800" />
              <Skeleton className="h-8 w-20 bg-zinc-800" />
            </div>
          ))}
        </div>

        {/* Graph Skeleton */}
        <div className="rounded-lg border border-zinc-800 bg-[#12141C] p-6">
          <Skeleton className="h-6 w-48 mb-6 bg-zinc-800" />
          <div className="relative">
            <Skeleton className="h-[300px] w-full bg-zinc-800" />
            {/* Purple gradient overlay to match the graph style */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
          </div>
        </div>

        {/* Most Affected APIs */}
        <div className="rounded-lg border border-zinc-800 bg-[#12141C] p-6">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-6 w-48 bg-zinc-800" />
            <Skeleton className="h-6 w-20 bg-zinc-800" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex justify-between items-center p-4 border border-zinc-800 rounded-lg bg-[#0B0D13]">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32 bg-zinc-800" />
                  <Skeleton className="h-3 w-48 bg-zinc-800" />
                </div>
                <Skeleton className="h-4 w-16 bg-zinc-800" />
              </div>
            ))}
          </div>
        </div>

        {/* Incident Types */}
        <div className="rounded-lg border border-zinc-800 bg-[#12141C] p-6">
          <Skeleton className="h-6 w-32 mb-6 bg-zinc-800" />
          <div className="h-[200px] flex items-center justify-center">
            <Skeleton className="h-full w-full bg-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  )
}

