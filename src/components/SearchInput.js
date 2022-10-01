import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "../styles/searchInput.css";

export default function SearchInput({ type, searchValue }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  function handleKeyword(e) {
    const { value } = e.target;
    setKeyword(value);
  }

  function handleEnter(e) {
    if (e.key === "Enter") return handleSearch();
  }

  function handleSearch() {
    if (!keyword) return;
    navigate(`/search?keyword=${keyword}&type=${type}`);
  }
  return (
    <div className="search-input">
      <input
        onChange={handleKeyword}
        onKeyDown={handleEnter}
        type="text"
        placeholder={type !== "search" ? "Search " + type : "Search"}
        defaultValue={searchValue}
      />
      <IoSearch onClick={handleSearch} />
    </div>
  );
}
