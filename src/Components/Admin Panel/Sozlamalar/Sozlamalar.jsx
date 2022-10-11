import React from "react";
import { Link } from "react-router-dom";
// import "./AdminPanel.css";
import KiviFooter from "../../../img/kiviFooter.jpg";
import './Sozlamalar.css'
import PlayMarkety from  "../../../img/PlayMarketyDark.jpg";
function Sozlamalar() {
    const logout = () =>{
        localStorage.removeItem('email', 'password')
    }
  return (
    <div>
      <div className="headernav">
        <div className="selects">
          <div className="OneSelect">
            <select>
              <option value="категория">Любая категория</option>
              <option value="категория">категория</option>
              <option value="категория">Любая</option>
            </select>
          </div>
          <div className="TwoSelected">
            <h1>Что будем искать ?</h1>
          </div>
          <div className="ThereSelect">
            <select>
              <option value="#">По всей Узбекистану</option>
              <option value="#">По всей Узбекистану</option>
              <option value="#">По всей Узбекистану</option>
              <option value="#">По всей Узбекистану</option>
            </select>
          </div>
          <div className="FourSelect">
            <button>Найти</button>
          </div>
        </div>
        <div className="ButtonNav">
          <button>
            <div>+</div> Добавить обьявления
          </button>
        </div>
      </div>
      <div className="NameAndPopolnit">
        <h4 className="NameZukhriddin">Здравствуйте Зухриддин Темиров</h4>
        <div className="popolnit">
          <h6>Ваш счет: 2 3000 сум</h6>
          <button>
            <span>+</span> Пополнить
          </button>
        </div>
      </div>
      <div className="bgWhitesmoke bgheight">
        <div className="SingleNav">
          <div>
            <Link to="/adminpanel">Объявления</Link>
            <Link to="/adminpanel">Сообщения</Link>
            <Link to="/adminpanel">Платежи и счёт</Link>
            <Link to="/adminpanel-sozlamalar" style={{color: '#0d6efd'}}>Настройки</Link>
            <Link to="/adminpanel">Мой бизнес</Link>
          </div>
          <hr />
        </div>
        <div className="Logout">
            <Link to='/' onClick={logout}>Logout</Link>
        </div>
      </div>
      <div className="KiviAdminPanel">
        <div className="KiviFooter">
          <img src={KiviFooter} alt="" />
        </div>
        <div className="textKiviImg">
          <p>
            Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
            обяления
          </p>
        </div>
        <div className="PlayApp">
          <img src={PlayMarkety} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sozlamalar