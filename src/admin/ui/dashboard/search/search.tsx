import React, { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(location.search);

      params.set("page", "1");

      if (e.target.value) {
        e.target.value.length > 2
          ? params.set("q", e.target.value)
          : params.delete("q");
      } else {
        params.delete("q");
      }
      navigate(`${location.pathname}?${params.toString()}`);
    },
    300
  );

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl w-max bg-[#2e374a]">
      <MdSearch size={20} />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none text-white"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
