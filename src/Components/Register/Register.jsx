import React, { useRef } from "react";
import "./Register.css";
import HeaderRight from "../../img/Register.png";
import RegisterMessage from '../../img/RegisterMessage.jpg'
function Register() {
  const emailRef = useRef();
  const passRef = useRef();
  const FormSubmit = (e) => {
    localStorage.setItem("email", emailRef.current.value);
    localStorage.setItem("password", passRef.current.value);
  };
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

      <div className="HeaderRegister">
        <div className="leftHeader">
          <h1>Ваша регистрация завершена!</h1>
          <a href="">
            <p>
              Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен
              в виде смс на ваше телефонный номер
            </p>
          </a>
          <div className="Form">
            <form>
              <label htmlFor="emailandtel">
                Введите email или номер телефона
              </label>
              <input
                type="tel"
                ref={emailRef}
                placeholder="99891 167 27 23"
                id="emailandtel"
              />
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                ref={passRef}
                placeholder="***********"
                id="password"
              />
              <button onClick={FormSubmit}>Войти</button>
            </form>
          </div>
        </div>
        <div className="rightHeader">
          <div className="Message">
            <div>
              {/* <h1>kivi</h1>
              <p>Откройте для себя целую плошадку для продаже</p>
              <button>Как это делать?</button> */}
              <img src={RegisterMessage} alt="" />
            </div>
          </div>
          <img src={HeaderRight} alt="form img" />
        </div>
      </div>
    </div>
  );
}

export default Register;
