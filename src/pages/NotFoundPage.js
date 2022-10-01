import { Link } from "react-router-dom";
import "../styles/notFound.css"
export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div>
        <h1>404 Not Found</h1>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
}
