import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountryCard from "./components/CountryCard";
import CountriesList from "./components/CountriesList";
import { Outlet } from "react-router";
import Skeleton from "react-loading-skeleton";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
const App = () => {
  
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
