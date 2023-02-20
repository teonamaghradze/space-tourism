import logo from "./assets/logo.svg";
import "./Header.styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/space-tourism">
        <img className="logo" alt="logo" src={logo} />
      </Link>

      <ul className="navbar-links">
        <Link className="li" to="/space-tourism">
          {" "}
          <p>00 Home</p>
        </Link>

        <Link className="li" to="/destination">
          {" "}
          <p>01 Destination</p>
        </Link>

        <Link className="li" to="/crew">
          <p>02 Crew</p>
        </Link>
        <Link className="li" to="/technology">
          <p>03 Technology</p>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
