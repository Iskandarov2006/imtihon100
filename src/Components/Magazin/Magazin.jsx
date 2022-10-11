import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Magazin.css";

// Carusel Img
import carusel1 from "../../img/carusel1.jpg";
import carusel2 from "../../img/carusel2.jpg";
import carusel3 from "../../img/carusel3.jpg";
// Carusel img END

// Footer Kivi Img
import KiviFooter from "../../img/kiviFooter.jpg";
import PlayMarkety from "../../img/PlayMarkety.jpg";
// Footer Kivi Img END

function Magazin() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div className="NavBottom">
        <div className="Inputs">
          <div>
            <i classname="fas fa-magnifying-glass"></i>
            <input
              type="search"
              name="search"
              id="search"
              className="searchInput"
              placeholder="Введите название обявления или  выберите из списка"
            />
          </div>
        </div>
        <div className="InputBottom">
          <div className="inputbottom1">Интерсное</div>
          <div className="inputbottom2">Топ</div>
          <div className="inputbottom3">Отличные предложение</div>
          <div className="inputbottom4">Супер цена</div>
          <div className="inputbottom5">
            г.Ташкент <i class="fas fa-location-dot"></i>
          </div>
          <div className="inputbottom6">
            г.Термез <i class="fas fa-location-dot"></i>
          </div>
          <div className="inputbottom7">
            г.Самарканд <i class="fas fa-location-dot"></i>
          </div>
        </div>
        <div className="selectedCard">
          <h4>Вы сейчас в рубрике</h4>
          <div className="clickselect">
            <div>
              <div className="elektronika"><h5>Электроника</h5><button><i class="fa fa-times" aria-hidden="true"></i></button></div>
              <div className="Monitor"><h5>Мониторы</h5><button><i class="fa fa-times" aria-hidden="true"></i></button></div>
            </div>
            <div className="down">
              <i class="fa fa-angle-down"  aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="InputRange">
          <h4>Выберите цену от и до</h4>
          <input type={'range'} id="range" title={Range.END_TO_START} />
        </div>
      </div>
      <div className="Cards">
        <div className="CardsHeader">
          <h3 className="active">
            <Link to="/" className={"CategoryCardsLink active"}>
              <b>Новые объявления</b>
            </Link>
          </h3>
          <h3>
            <Link to="/" className={"CategoryCardsLink"}>
              <b>Лучщие предложение</b>
            </Link>
          </h3>
        </div>
        <div className="CardsBody">
          {data ? (
            data.map((item) => (
              <Link
                to={`/products/${item.id}`}
                key={item.id}
                style={{ textDecoration: "none", color: "black" }}
              >
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
        <div className="Caruselimg">
          <div className="ImgsCarusel">
            <img src={carusel1} alt="" />
            <img src={carusel2} alt="" />
            <img src={carusel3} alt="" />
            <img src={carusel2} alt="" />
            <img src={carusel1} alt="" />
            <img src={carusel3} alt="" />
          </div>
        </div>
      </div>

      <div className="FooterCard">
        <div className="FooterCardHeader">
          <Link to="/">САМОЕ ИНТЕРЕСНОЕ</Link>
        </div>
        <div className="FooterCards">
          {data ? (
            data.map((item) => (
              <Link
                to={`/products/${item.id}`}
                key={item.id}
                style={{ textDecoration: "none", color: "black" }}
              >
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

      <div className="KiviPlayMarketAppStore">
        <div className="KiviFooter">
          <img src={KiviFooter} alt="" />
        </div>
        <div className="PlayApp">
          <img src={PlayMarkety} alt="" />
        </div>
      </div>
    </>
  );
}
export default Magazin;
