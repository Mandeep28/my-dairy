import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";
import { FaTrash , FaHeart , FaGear  } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
  <nav className="navbar navbar-expand-lg  bg-light navbar-ligh shadow shadow-lg">
    <div className="container">
      <Link className="navbar-brand text-uppercase d-flex align-items-center " to="/">
        <GiNotebook className="fs-2 text-warning me-1 " />
        My Dairy
      </Link>
      <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
        <FaBars className="text-dark fs-5" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item ">
            <Link className={`nav-link mx-2 ${pathname==='/dashboard' ? 'active': ''}`} to="/dashboard" >
             <FaHome className=" mx-1 fs-6 mb-1 " />
             All Notes
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link mx-2 ${pathname==='/dashboard/favourite' ? 'active': ''}`} to="/dashboard/favourite">
            <FaHeart className=" mx-1 fs-6 mb-1" />
              Favourite
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link mx-2 ${pathname==='/dashboard/trashbin' ? 'active': ''}`} to="/dashboard/trashbin" >
            <FaTrash className=" mx-1 fs-6 mb-1" />
              Trash Bin
            </Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-link mx-2 ${pathname==='/dashboard/setting' ? 'active': ''}`} to="/dashboard/setting" >
            <FaGear className=" mx-2 fs-6 mb-1" />
            Setting
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
};

export default Header;
