import searchIcon from "../../Images/search-icon.png";
import "../../Styles/SearchInput.css";

const SearchInput = () => {
  return (
    <div className="nav-search-container">
      <img alt="search-icon" className="search-icon" src={searchIcon} />
      <input
        type="text"
        className="nav-search-input"
        placeholder="Search for Products, Brand and More"
      />
    </div>
  );
};

export default SearchInput;
