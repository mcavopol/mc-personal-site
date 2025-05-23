export default function SectionLoading() {
  return (
    <div className="section-padding bg-white dark:bg-black">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="animate-pulse space-y-8">
          {/* Section header skeleton */}
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-2/3"></div>
          </div>

          {/* Content skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2"></div>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
