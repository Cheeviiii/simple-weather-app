import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { SearchedCity } from "./components/SearchedCity";

export const App = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<any>({});

  const api = {
    key: "d06b3d3ca94e90c75eacc22346466f71",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const HandleSearch = (e: any) => {
    e.preventDefault();

    FetchClimate(search);
  };

  const FetchClimate = (e: any) => {
    fetch(
      `${api.base}weather?q=${search}&units=metric&appid=${api.key}&lang=pt_br`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setSearch("");
        console.log(result);
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-1">
        <SearchBar
          HandleSearch={HandleSearch}
          onSearch={search}
          onChangeSearch={setSearch}
        />
        {weather.cod === "404" || "400" ? <h1>{weather.message}</h1> : ""}

        {typeof weather.main != "undefined" ? (
          <SearchedCity weather={weather} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
