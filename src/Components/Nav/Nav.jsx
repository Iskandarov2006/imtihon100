import { Link } from "react-router-dom";
import NavLogo from "../../img/NavLogo.jpg";
import "./Nav.css";
function Nav() {
  return (
    <>
    <nav className="HomeNav">
        <ul className="HomeNavUl">
          <div className="logo">
            <img src={NavLogo} alt="NavLogo.jpg none" />
            <h3>Продай, найди, купи все что пожелаешь…</h3>
          </div>
          <li>
            <Link to="/">Объявления</Link>
          </li>
          <li>
            <Link to="/magazin">Магазины</Link>
          </li>
          <li>
            <Link to="/adminpanel">Для бизнеса</Link>
          </li>
          <li>
            <Link to="/add-product">Помощь</Link>
          </li>
          <div className="LangueSignup">
            <Link to="/">Рус | O’z</Link>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "250px",
              }}
            >
              {localStorage.getItem("email")}
              {localStorage.getItem("email") &&
              localStorage.getItem("password") ? (
                <Link
                to='/adminpanel-sozlamalar'
                  className="UserName"
                  style={{ margin: "0 15px" }}
                >
                  {localStorage.getItem("email")[0]}
                </Link>
              ) : (
                <Link to="/registerpage">Вход | Регистрация</Link>
              )}
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
