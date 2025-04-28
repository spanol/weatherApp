const AwaitSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-blue-100 opacity-70 animate-pulse"></div>
        <svg
          className="absolute top-0 left-0 w-24 h-24 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
        Discover the Weather Anywhere
      </h1>

      <p className="text-lg text-gray-600 max-w-md mb-6">
        To start, search for a city name above and get instant weather
        information!
      </p>

      <div className="flex space-x-2">
        {["🌤️", "⛅", "🌦️", "🌧️", "❄️"].map((emoji, index) => (
          <span
            key={index}
            className="text-2xl opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Try searching for: "London", "Tokyo", or "New York"</p>
      </div>
    </div>
  );
};

export default AwaitSearch;
