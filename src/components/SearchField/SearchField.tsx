import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../icons/Search.svg";
import { ReactComponent as CrossIcon } from "../../icons/Cross.svg";
import s from "./SearchField.module.css"; // Import your CSS module

export const SearchField: React.FunctionComponent<{ value: string; onValueChange: (args: string) => void; isDisabled?: boolean }> = ({ value, onValueChange, isDisabled = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: any) => {
    onValueChange(event.target.value);
  };

  const handleClear = () => {
    onValueChange("");
  };

  return (
    <div className={`${s["search-field"]} ${isFocused ? s["focused"] : ""}`}>
      <div className={s.search_icon}>
        <SearchIcon />
      </div>
      <input type="text" value={value} disabled={isDisabled} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder="Search..." />
      {value && (
        <div onClick={handleClear} className={s.clear_icon}>
          <CrossIcon />
        </div>
      )}
    </div>
  );
};
