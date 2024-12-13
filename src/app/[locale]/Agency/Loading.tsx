export default function Loading() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-dark rounded-full animate-spin"></div>
          <div className="text-lg font-medium text-gray-600">Loading...</div>
        </div>
      </div>
    )
  }