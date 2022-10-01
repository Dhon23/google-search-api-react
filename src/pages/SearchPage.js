import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import SearchInput from "../components/SearchInput";
import "../styles/search.css";

export default function SearchPage({ type }) {
  const navigate = useNavigate();

  return (
    <section className="search">
      <div>
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <SearchInput type={type} />
        <div>
          {/* <button onClick={handleSearch}>Search</button> */}
          {type === "news" && (
            <button onClick={() => navigate("/news/bookmark")}>Bookmark</button>
          )}
        </div>
      </div>
    </section>
  );
}
