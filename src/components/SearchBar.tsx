import { MapPin } from "phosphor-react";

export const SearchBar = (props: any) => {

  return (
    <form className="flex items-center" onSubmit={props.HandleSearch}>
      <div className="relative">
        <div className="absolute text-black inset-y-0 pl-1 flex items-center">
          <MapPin size={32} />
        </div>

        <input
          className="p-3 px-10 placeholder:font-bold placeholder:uppercase text-black font-semibold uppercase rounded-2xl transition-colors focus:outline-none focus:border-2 focus:border-blue-500 "
          type="search"
          placeholder="Search City..."
          onChange={(e) => props.onChangeSearch(e.target.value)}
          value={props.onSearch}
        />
      </div>
    </form>
  );
};
