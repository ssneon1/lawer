export const SkeletonLoader = () => {
  return (
    <div className="w-full animate-pulse">
      {/* Header skeleton */}
      <div className="h-12 bg-gray-200 rounded-lg mb-6 w-3/4"></div>
      
      {/* Content skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
      
      {/* Card skeleton */}
      <div className="mt-8 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-48 bg-gray-200 rounded-lg"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export const PageSkeleton = () => {
  return (
    <div className="min-h-screen space-y-8 p-4 animate-pulse">
      {/* Hero skeleton */}
      <div className="h-64 bg-gray-200 rounded-lg"></div>
      
      {/* Title skeleton */}
      <div className="h-12 bg-gray-200 rounded w-3/4"></div>
      
      {/* Content skeleton */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
