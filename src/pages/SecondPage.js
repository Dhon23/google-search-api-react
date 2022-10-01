import { Outlet } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";

export default function SecondPage() {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
}
