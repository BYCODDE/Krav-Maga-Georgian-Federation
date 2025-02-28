export function PriceCardsContentSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="bg-[#A9A9A9] w-full h-fit max-w-[400px] p-4 rounded-3xl my-5 animate-pulse">
          <div>
            <div className="h-[150px] w-full rounded-3xl bg-gray-400"></div>
          </div>
          <div className="text-white flex flex-col gap-2 pt-2">
            <div className="h-4 bg-gray-400 w-3/4 rounded"></div>
            <div className="h-3 bg-gray-400 w-full rounded"></div>
            <div className="h-3 bg-gray-400 w-1/2 rounded"></div>
            <div className="h-3 bg-gray-400 w-1/2 rounded"></div>
            <div className="h-3 bg-gray-400 w-2/3 rounded"></div>
          </div>
          <div className="pt-3 flex items-center justify-between gap-3">
            <div className="h-8 bg-gray-400 w-24 rounded-2xl"></div>
            <div className="h-6 bg-gray-400 w-16 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
