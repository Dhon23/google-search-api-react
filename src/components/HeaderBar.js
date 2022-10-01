/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { IoImages, IoSearch, IoNewspaperOutline } from "react-icons/io5";
import logo from "../images/logo.png";
import SearchInput from "./SearchInput";
import "../styles/headerBar.css";

export default function HeaderBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState();
  const [type, setType] = useState();

  const handleClick = (type) => () => {
    navigate({
      pathname: "search",
      search: `?keyword=${keyword}&type=${type}`,
    });
  };

  useEffect(() => {
    setKeyword(searchParams.get("keyword"));
    setType(searchParams.get("type"));
  }, [searchParams]);

  return (
    <header>
      <div>
        <div onClick={() => navigate("/")} className="img">
          <img src={logo} alt="" />
        </div>
        <div className="input">
          {location.pathname !== "/news/bookmark" ? (
            <SearchInput type={type} searchValue={keyword} />
          ) : (
            <h1>News Bookmark</h1>
          )}
          <button
            onClick={() => navigate("/news/bookmark")}
            className={type === "news" ? "active" : ""}
          >
            Bookmark
          </button>
        </div>
      </div>
      <div className="nav">
        <a
          onClick={handleClick("search")}
          className={(type === "search" && "active") || ""}
        >
          <IoSearch />
          Search
        </a>
        <a
          onClick={handleClick("image")}
          className={(type === "image" && "active") || ""}
        >
          <IoImages />
          Images
        </a>
        <a
          onClick={handleClick("news")}
          className={(type === "news" && "active") || ""}
        >
          <IoNewspaperOutline />
          News
        </a>
      </div>
    </header>
  );
}
