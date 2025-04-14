import { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useOutletContext } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
 
  const [isdark] = useTheme();
  console.log([isdark]);
  return (
    <main className={`${isdark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu  setQuery={setQuery} />
      </div>
     
      <CountriesList query={query} />
      
    </main>
  );
}
