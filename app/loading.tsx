export default function Loading() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan/20 border-t-cyan rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}