import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// Category img
import birinchi from "../../img/birinchi.jpg";
import ikkinchi from "../../img/ikkinchi.jpg";
import uchinchi from "../../img/uchinchi.jpg";
import turtinchi from "../../img/turtinchi.jpg";
import beshinchi from "../../img/beshinchi.jpg";
import oltinchi from "../../img/oltinchi.jpg";
import yettinchi from "../../img/yettinchi.jpg";
import sakkizinchi from "../../img/sakkizinchi.jpg";
import tuqqizinchi from "../../img/tuqqizinchi.jpg";
// Category img END

// Carusel Img
import carusel1 from "../../img/carusel1.jpg";
import carusel2 from "../../img/carusel2.jpg";
import carusel3 from "../../img/carusel3.jpg";
// Carusel img END

// Footer Kivi Img
import KiviFooter from "../../img/kiviFooter.jpg";
import PlayMarkety from "../../img/PlayMarkety.jpg";
// Footer Kivi Img END

function Home() {
  const [eshyo, setEshyo] = useState(false);
  const eshyoclicked = () => {
    setEshyo(true);
  };
  
  const eshyoclickedClose =() =>{
    setEshyo(false)
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div className="Categorys">
        <div className="IconsLeftRight">
          <i className="fa-solid fa-left-long"></i>
        </div>
        <div className="imgCategory">
          <img src={birinchi} alt="" />
          <img src={ikkinchi} alt="" />
          <img src={uchinchi} alt="" />
          <img src={turtinchi} alt="" />
          <img src={beshinchi} alt="" />
          <img src={oltinchi} alt="" />
          <img src={yettinchi} alt="" />
          <img src={sakkizinchi} alt="" />
          <img src={tuqqizinchi} alt="" />
        </div>
        <div className="IconsLeftRight">
          <i className="fa-solid fa-right-long"></i>
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
            <h1 style={{textAlign: 'center'}}>Baza bilan aloqa yo'q 404ERROR</h1>
          )}
        </div>
        {eshyo ? (
          <h6 className="pokazateshyo" onClick={eshyoclickedClose}>
            Покозать еще (20){" "}
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </h6>
        ) : (
          <h6 className="pokazateshyo" onClick={eshyoclicked}>
            Покозать еще (20){" "}
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </h6>
        )}
        <div className="CardsBody">
          {eshyo ? (
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
            // <h1 style={{textAlign: 'center'}}>Baza bilan aloqa yo'q 404ERROR</h1>
            ''
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
          <Link to="/">Просмотренные</Link>
          <Link to="/">Выбор редакции</Link>
          <Link to="/">Сниженные цены</Link>
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
export default Home;
