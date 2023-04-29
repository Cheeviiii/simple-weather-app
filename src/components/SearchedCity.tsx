import React from "react";

export const SearchedCity = ({ weather }: any) => {
  return (
    <div className="w-full flex-col flex items-center bg-[#00747C] h-[350px] shadow-2xl rounded-3xl pt-2">
      <h1 className="text-black text-center font-bold text-lg uppercase">
        {weather.name} - {weather.sys.country}
      </h1>

      <img
        className="w-[200px] h-[200px]"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="Icon"
      />

      <h1 className="text-black text-center font-bold text-3xl">
        {Math.round(weather.main.temp)}°C
      </h1>
    </div>
  );
};
