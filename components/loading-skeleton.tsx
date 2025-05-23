export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-8 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero section skeleton */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="space-y-4 flex-1">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
          <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
          <div className="flex gap-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-32"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-32"></div>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg w-full max-w-md mx-auto"></div>
        </div>
      </div>

      {/* Section skeletons */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-1/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg w-full"></div>
        </div>
      ))}
    </div>
  )
}
