import React from "react";
import Button from "./Button";
import { SearchIcon } from "lucide-react";

const Search = ({
  onChange,
  placeholder,
  onClick,
}: {
  onChange?: () => void;
  placeholder?: string;
  onClick?: () => void;
}) => {
  return (
    <div className="flex items-center bg-white rounded-[40px]">
      <SearchIcon size={20} className="text-neutral mx-4" />
      <input
        type="text"
        onChange={onChange}
        className="rounded-[40px] focus:outline-none w-full"
        placeholder={"Cari disini..."}
      />
      <Button>Cari</Button>
    </div>
  );
};

export default Search;
