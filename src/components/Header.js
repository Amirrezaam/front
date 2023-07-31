import { useCookies } from "react-cookie";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {

  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
  const navigate = useNavigate();

  const className = ({ isActive }) => (isActive ? "active" : "")

  return (
    <header id="header" className="clearfix">
      <nav className="navbar navbar-default navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#tr-mainmenu"
            aria-controls="tr-mainmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-align-justify"></i>
            </span>
          </button>
          <NavLink to="/" className="navbar-brand">
            <img className="img-fluid" src={logo} alt="Logo" />
          </NavLink>

          <div className="collapse navbar-collapse" id="tr-mainmenu">
            <ul className="nav navbar-nav">
              <li>
                <NavLink
                  end
                  to="/"
                  className={className}
                >
                  خانه
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/advertisements"
                  className={className}
                >
                  آگهی ها
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={className}
                >
                  پشتیبانی
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={className}
                >
                  درباره ما
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={className}
                >
                  ارتباط با ما
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <ul className="sign-in">
              <li>
                <i className="fa fa-user"></i>
              </li>
              {
                cookies.userID ?
                  <li class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">پروفایل من<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><Link to="/dashboard">داشبورد</Link></li>
                      <li><Link to="/dashboard/my-ads">آگهی های من</Link></li>
                      <li><a onClick={() => { removeCookie("userID"); navigate("/") }}>خروج از حساب</a></li>
                    </ul>
                  </li> :
                  <li>
                    <NavLink
                      to="/login"
                      className={className}
                    >
                      ورود
                    </NavLink>
                  </li>
              }
            </ul>

            <NavLink to="/add-advertising-details" className="btn">
              افزودن آگهی شما
            </NavLink>
          </div>
        </div>
      </nav>
    </header >
  );
}
export default Header;