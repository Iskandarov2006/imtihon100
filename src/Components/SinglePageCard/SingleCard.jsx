import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./SingleCard.css";
import SingleCardImg from "../../img/SingleCardImg.jpg";
function SingleUser() {
  const [posts, setPosts] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  const params = useParams();
  const [shownumbers1, setShownumbers1] = useState(false)
  const [shownumbers2, setShownumbers2] = useState(false)
  const shownumber1 = () =>{
    setShownumbers1(prev => !prev )
  }
  const shownumber2 = () =>{
    setShownumbers2(prev => !prev )
  }
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((data) => {
        setPosts({
          isFetched: true,
          data: data.data,
          error: false,
        });
      })
      .catch((err) => {
        setPosts({
          isFetched: false,
          data: [],
          error: err,
        });
      });
  }, []);
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
      {
        <div className="CardSection">
          <p className="SingleCardNav">
            Объявления / Ташкент Недвижимость / Ташкент Квартиры / Ташкент
            Продажа / Новостройки Ташкент
          </p>
          <h1 className="SingleCardTitle">{posts.data.title}</h1>
          <div className="ImgAndAboutCard">
            <div className="SingleCardImgDiv">
              <div>
                <img src={SingleCardImg} alt="" />
                <img
                  className={"SingleCardImage"}
                  src={posts.data.image}
                  alt=""
                />
              </div>
            </div>
            <div className="SingleCardAbout">
              <div className="SingleArktikul">
                <h5>Артикул:{posts.data.id}</h5>
                <p>обновлено: 28.04.17 добавлено: 28.04.17 </p>
              </div>
              <div className="SummPriceSingleCard">
                <h1>{posts.data.price}y.e.</h1>
              </div>
              <div className="TashkentYunusobod">
                <span>Ташкент, Ташкентская область, Юнусабадский район </span>
              </div>
              <div className="Buttons">
                <div className="ButonsSingleButton OneButton">
                  <span>99891 166 {shownumbers1?('6578'):('****')}</span><p onClick={shownumber1}>Покозать польностю</p>
                </div>
                <div className="ButonsSingleButton TwoButton">
                  <span>99891 166 {shownumbers2?('4578'):('****')}</span> <p onClick={shownumber2}>Покозать польностю</p>
                </div>
              </div>
              <div className="Avtor">
                <p>Автор обьявлении: </p><span>Зухриддин Темиров</span>
              </div>
              <div className="ButtonsBlue">
                <div className="ButtonBlues buttonOne">
                  Написать автору
                </div>
                <div className="ButtonBlues ButtonTwo">
                  Предложить свою цену
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <div className="SingleCardTable">
        <table>
          <tr>
            <td>Количество комнат:<h5>{posts.data.id}</h5></td>
            <td>Общая площадь: <h5>40 м2</h5></td>
            <td>Этаж: <h5>32</h5></td>
          </tr>
          <tr>
            <td>Этажность дома: <h5>{posts.data.id}</h5></td>
            <td>Состояние квартиры: <h5>Первая сдача </h5></td>
            <td>Этаж: <h5>32</h5></td>
          </tr>
          <tr>
            <td>Планировка <h5>Раздельная</h5></td>
            <td>Год постройки/сдачи <h5>Сдача в 2017</h5></td>
            <td>Ремонт <h5>Авторский проект</h5></td>
          </tr>
          <tr>
            <td>Санузел <h5>2 санузла и более</h5></td>
            <td>Меблирована <h5>Да</h5></td>
            <td>Высота потолков <h5>32</h5></td>
          </tr>
        </table>
      </div>
      <p className="TableBottomText">
        <h5>Рядом есть</h5>
        <p>
          Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе
        </p>
      </p>

      <div className="AboutText">
        <p>
          {
            posts.data.description
          }
        </p>
      </div>

      <div className="CardsApi">
        <div className="span">
          <h3>
            Похожие объявления
          </h3>
          <h3>
            Обьявление автора
          </h3>
        </div>
        <div className="OverflowScroll">
          {data ? (
            data.map((item) => (
                <Link to={`/`} key={item.id} style={{ textDecoration: "none", color: "black" }}>
                  <div className="card border-0">
                    <div className="CardImg">
                      <img src={item.image} alt="Api Img None" />
                    </div>
                    <div className="CardBody">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <h5 className="Narxi">{item.price} сум</h5>
                    </div>
                  </div>
                </Link>
            ))
          ) : (
            <h1>Baza bilan aloqa yo'q 404ERROR</h1>
          )}
        </div>
      </div>

    </div>
  );
}

export default SingleUser;

//   posts.isFetched && !posts.error && posts.data.length > 0 ? (
//     posts.data.map(q => (
//         <h1 key={q.id}>{q.id}</h1>
//     ))
//   ) : (
//     <h1>EROOR</h1>
//   )
