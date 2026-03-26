export const LoadingSpinner = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-legal-grey border-t-legal-blue rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export const LoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <LoadingSpinner size="lg" />
        <p className="text-center text-legal-grey mt-4 font-serif">
          Loading your legal solutions...
        </p>
      </div>
    </div>
  );
};

export const InlineLoader = () => {
  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <div
        className="w-2 h-2 bg-legal-blue rounded-full animate-pulse"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="w-2 h-2 bg-legal-blue rounded-full animate-pulse"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="w-2 h-2 bg-legal-blue rounded-full animate-pulse"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  );
};
