import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar container mx-auto py-5 font-black text-white align-middle">
      <ul className="flex flex-row flex-wrap justify-center gap-x-4">
        <li>
          <Link to="/" className="hover:underline underline-offset-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="/programs" className="hover:underline underline-offset-2">
            Programs
          </Link>
        </li>
      </ul>
    </div>
  );
};
