import { useEffect, useRef } from "react";
import "./search.css";
import PropTypes from "prop-types";

const SearchBox = ({
  isActive,
  isDisabled,
  onSearch,
  value,
  setValue,
  placeHolder,
}) => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "/" && event.ctrlKey) {
        searchInputRef.current.focus();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className={`search-box ${isActive ? "active" : ""} ${
        isDisabled ? "disabled" : ""
      }`}
    >
      <input
        ref={searchInputRef}
        type="text"
        className="search-input"
        placeholder={placeHolder}
        disabled={isDisabled}
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="search-shortcut">Ctrl+/</p>
    </div>
  );
};
SearchBox.propTypes = {
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onSearch: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeHolder: PropTypes.string,
};

export default SearchBox;
