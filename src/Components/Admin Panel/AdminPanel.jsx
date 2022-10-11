import React from "react";
import { Link } from "react-router-dom";
import "./AdminPanel.css";
import img from "../../img/Oval2.png";
import KiviFooter from '../../img/kiviFooter.jpg'
import PlayMarkety from '../../img/PlayMarketyDark.jpg'
function AdminPanel() {
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
      <div className="bgWhitesmoke">
        <div className="SingleNav">
          <div>
            <Link to="">Объявления</Link>
            <Link to="">Сообщения</Link>
            <Link to="">Платежи и счёт</Link>
            <Link to="/adminpanel-sozlamalar">Настройки</Link>
            <Link to="">Мой бизнес</Link>
          </div>
          <hr />
        </div>
        <div className="TableNav">
          <Link to="">Фото</Link>
          <Link to="">Название</Link>
          <Link to="">Цена</Link>
          <Link to="">Дата</Link>
          <Link to="">Действие</Link>
        </div>

        <div className="TableAdmin">
          <div className="TableHeader">
            <img src={img} alt="" />
            <h4>Срочно нужен программист yii2</h4>
            <h4>
              2 000 000 <br /> 6 000 000 сум
            </h4>
            <h4>
              # 345 002 <br /> С: 28 июнь <br /> По: 28 июль
            </h4>
            <div className="buttons">
              <button>
                <div className="ArrowUpIcon1 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Поднять
              </button>
              <button>
                <div className="ArrowUpIcon2 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Рекламировать
              </button>
            </div>
          </div>
          <hr />
          <div className="TableBody">
            <span>Статистика</span>
            <span>Просмотры: 195</span>
            <span>Тел.: 200</span>
            <span>В Избранном: 0</span>
          </div>
        </div>

        <div className="TableAdmin">
          <div className="TableHeader">
            <img src={img} alt="" />
            <h4>Срочно нужен программист yii2</h4>
            <h4>
              2 000 000 <br /> 6 000 000 сум
            </h4>
            <h4>
              # 345 002 <br /> С: 28 июнь <br /> По: 28 июль
            </h4>
            <div className="buttons">
              <button>
                <div className="ArrowUpIcon1 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Поднять
              </button>
              <button>
                <div className="ArrowUpIcon2 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Рекламировать
              </button>
            </div>
          </div>
          <hr />
          <div className="TableBody">
            <span>Статистика</span>
            <span>Просмотры: 195</span>
            <span>Тел.: 200</span>
            <span>В Избранном: 0</span>
          </div>
        </div>

        <div className="TableAdmin">
          <div className="TableHeader">
            <img src={img} alt="" />
            <h4>Срочно нужен программист yii2</h4>
            <h4>
              2 000 000 <br /> 6 000 000 сум
            </h4>
            <h4>
              # 345 002 <br /> С: 28 июнь <br /> По: 28 июль
            </h4>
            <div className="buttons">
              <button>
                <div className="ArrowUpIcon1 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Поднять
              </button>
              <button>
                <div className="ArrowUpIcon2 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Рекламировать
              </button>
            </div>
          </div>
          <hr />
          <div className="TableBody">
            <span>Статистика</span>
            <span>Просмотры: 195</span>
            <span>Тел.: 200</span>
            <span>В Избранном: 0</span>
          </div>
        </div>

        <div className="TableAdmin">
          <div className="TableHeader">
            <img src={img} alt="" />
            <h4>Срочно нужен программист yii2</h4>
            <h4>
              2 000 000 <br /> 6 000 000 сум
            </h4>
            <h4>
              # 345 002 <br /> С: 28 июнь <br /> По: 28 июль
            </h4>
            <div className="buttons">
              <button>
                <div className="ArrowUpIcon1 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Поднять
              </button>
              <button>
                <div className="ArrowUpIcon2 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Рекламировать
              </button>
            </div>
          </div>
          <hr />
          <div className="TableBody">
            <span>Статистика</span>
            <span>Просмотры: 195</span>
            <span>Тел.: 200</span>
            <span>В Избранном: 0</span>
          </div>
        </div>

        <div className="TableAdmin">
          <div className="TableHeader">
            <img src={img} alt="" />
            <h4>Срочно нужен программист yii2</h4>
            <h4>
              2 000 000 <br /> 6 000 000 сум
            </h4>
            <h4>
              # 345 002 <br /> С: 28 июнь <br /> По: 28 июль
            </h4>
            <div className="buttons">
              <button>
                <div className="ArrowUpIcon1 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Поднять
              </button>
              <button>
                <div className="ArrowUpIcon2 ArrowUpIcon">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                Рекламировать
              </button>
            </div>
          </div>
          <hr />
          <div className="TableBody">
            <span>Статистика</span>
            <span>Просмотры: 195</span>
            <span>Тел.: 200</span>
            <span>В Избранном: 0</span>
          </div>
        </div>
      </div>
      <div className="KiviAdminPanel">
        <div className="KiviFooter">
          <img src={KiviFooter} alt="" />
        </div>
        <div className="textKiviImg">
            <p>Веб сайт бесплатных обьявлений | на базе 
имеется 234 944 999 шт обяления</p>
        </div>
        <div className="PlayApp">
          <img src={PlayMarkety} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
