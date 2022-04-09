import react, { createContext, useContext, useState } from "react";

const WheaterContext = createContext();

export default function WheaterProvider({ children }) {
  const [search, setSearch] = useState("");
  const [wheater, setWheater] = useState(null);
  const [forecast, setForecast] = useState(null);
  return (
    <WheaterContext.Provider
      value={{
        search,
        setSearch,
        wheater,
        setWheater,
        forecast,
        setForecast,
      }}
    >
      {children}
    </WheaterContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(WheaterContext);
  if (!context) throw new Error("useSearch must be used within a CountProvider");
  const { search, setSearch } = context;
  return { search, setSearch };
}

export function useWheater() {
  const context = useContext(WheaterContext);
  if (!context) throw new Error("useWheater must be used within a CountProvider");
  const { wheater, setWheater } = context;
  return { wheater, setWheater };
}

export function useForecast() {
  const context = useContext(WheaterContext);
  if (!context) throw new Error("useForecast must be used within a CountProvider");
  const { forecast, setForecast } = context;
  return { forecast, setForecast };
}