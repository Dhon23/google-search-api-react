import { NavLink } from "react-router-dom";
import { IoImages, IoSearch, IoNewspaperOutline } from "react-icons/io5";
import "../styles/navBar.css";
export default function NavBar() {
  return (
    <nav>
      <NavLink to={"/"} end>
        <IoSearch /> Search
      </NavLink>
      <NavLink to={"/image"}>
        <IoImages /> Image
      </NavLink>
      <NavLink to={"/news"}>
        <IoNewspaperOutline /> News
      </NavLink>
    </nav>
  );
}
