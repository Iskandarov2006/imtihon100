import React, { Fragment } from "react";
import "./AddProduct.css";
import { Link } from 'react-router-dom'
// Category IMG
import birinchi from "../../img/birinchi.jpg";
import ikkinchi from "../../img/ikkinchi.jpg";
import uchinchi from "../../img/uchinchi.jpg";
import turtinchi from "../../img/turtinchi.jpg";
import beshinchi from "../../img/beshinchi.jpg";
import oltinchi from "../../img/oltinchi.jpg";
import yettinchi from "../../img/yettinchi.jpg";
import sakkizinchi from "../../img/sakkizinchi.jpg";
import tuqqizinchi from "../../img/tuqqizinchi.jpg";
//Category IMG END
import labelimg from '../../img/labelimg.jpg'
import { useState } from "react";
import { useRef } from "react";
function AddProduct() {
  const phone = useRef()
  const emailRef = useRef()
  const nameRef = useRef()
  const [registersuccses, setRegistersuccses] = useState(false)
  const FormsendDobavit = (e) => {
    e.preventDefault()
    setRegistersuccses(true)
  }
  const closeRegister = () =>{
    setRegistersuccses(false)
  }
  return (
    <Fragment>

      {
        registersuccses ? (
          <div className="registersuccses">
            <div className="registerwhite">
              <div className="seccses">
                <h4>Sizning ma'lumotlaringiz</h4>
                <button onClick={closeRegister}><i class="fa fa-close" aria-hidden="true"></i></button>
              </div>
              <div className="About">
                <p>Telefon raqamingiz: {phone.current.value}</p>
                <p>Elektron pochta manzilingiz: {emailRef.current.value}</p>
                <p>Ismingiz: {nameRef.current.value}</p>
              </div>
            </div>
          </div>
        ) : ('')
      }



      <h2 className={"OneTextHeader"}>Добавить обьявления бесплатно</h2>
      <h5 className={"OneTextHeader"}>
        Для добавления вашего обьявлении вы должны выбрать категорию
      </h5>
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
      <div className="alerts">
        <div className="transform90deg"></div>
        <div className="izmenit">
          <h5>
            Вы выбрали: <span>Недвижимость » Дома » Аренда долгосрочная</span>
          </h5>
          <button>
            <h6>
              <i class="fas fa-pencil"></i>
            </h6>{" "}
            Изменить
          </button>
        </div>
      </div>


      <div className="Form">
        <div>
          <h6>Цена</h6>
          <div className="Договорная">
            <input type="number" placeholder="400 000" />
            <select>
              <option>Сум</option>
              <option>Dollar</option>
              <option>Rubl</option>
            </select>
            <input type="checkbox" className="checkbox" />
            <h6>Договорная</h6>
          </div>
          <div className="Количество">
            <h6>Количество комнат*</h6>
            <input type="number" placeholder="4" />
            <input type="number" placeholder="900" />
            <input type="number" placeholder="90" />
          </div>
          <div className="Расположение">
            <h6>Расположение*</h6>
            <div className="Rospolojenya">
              <div>
                <span><input type="checkbox" />В городе</span><br />
                <span><input type="checkbox" />В пригороде</span><br />
                <span><input type="checkbox" />В сельской местности</span><br />
              </div>
              <div>
                <span><input type="checkbox" />Вдоль трассы</span><br />
                <span><input type="checkbox" />Возле водоема, реки</span><br />
                <span><input type="checkbox" />В предгорьях</span><br />
              </div>
              <div>
                <span><input type="checkbox" />В дачном массиве</span><br />
                <span><input type="checkbox" />На закрытой территории</span><br />
              </div>
            </div>
          </div>
          <div className="checkboxbottominput">
            <div>
              <h6>Этажность дома*</h6>
              <input type="number" placeholder="4" />
            </div>
            <div><h6>Высота потолков</h6>
              <input type="number" placeholder="2m" />
            </div>
            <div><h6>Площадь участка*</h6>
              <input type="number" placeholder="342" />
            </div>
          </div>
          <div className="Расположение">
            <h6>Состояние дома</h6>
            <div className="Rospolojenya">
              <div>
                <span><input type="checkbox" />Авторский проект</span><br />
                <span><input type="checkbox" />Средний ремонт</span><br />
                <span><input type="checkbox" />Евроремонт</span><br />
              </div>
              <div>
                <span><input type="checkbox" />Требует ремонта</span><br />
                <span><input type="checkbox" />Предчистовая отделка</span><br />
                <span><input type="checkbox" />Не достроен</span><br />
              </div>
              <div>
                <span><input type="checkbox" />Черновая отделка</span><br />
                <span><input type="checkbox" />Под снос</span><br />
              </div>
            </div>
          </div>
          <div className="checkboxbottominput">
            <div>
              <h6>Тип дома</h6>
              <select>
                <option>Коттедж</option>
                <option>Коттедж</option>
              </select>
            </div>
            <div><h6>Электричество</h6>
              <select>
                <option>Есть возможность подключения</option>
                <option>Есть возможность подключения</option>
              </select>
            </div>
          </div>
          <div className="Расположение">
            <h6>Отопление</h6>
            <div className="Rospolojenya">
              <div>
                <span><input type="checkbox" />Центральное</span><br />
                <span><input type="checkbox" />На газе</span><br />
                <span><input type="checkbox" />На твердом топливе</span><br />
              </div>
              <div>
                <span><input type="checkbox" />На жидком топлив</span><br />
                <span><input type="checkbox" />Электрическое</span><br />
                <span><input type="checkbox" />Смешанное</span><br />
              </div>
              <div>
                <span><input type="checkbox" />Без отопления</span><br />
              </div>
            </div>
          </div>



          <div className="Расположение">
            <h6>Электричество</h6>
            <div className="Rospolojenya">
              <h5 style={{ margin: '25px 0' }}>Есть возможность подключения</h5>
            </div>
          </div>


          <div className="Расположение">
            <br /><br /><br />
            <div className="Rospolojenya">
              <hr />
            </div>
          </div>

          <div className="imgadd">

            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>


            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>


            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>


            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>


            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>


            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>


            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>


            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>


            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>


            <div>
              <label htmlFor="img"><img src={labelimg} alt="" /><input type="file" id="img" /></label>
            </div>
          </div>


          <h4>Местоположение объекта</h4>
          <div className="Mestopolojenie">
            <div className="region">
              <h6>Регион</h6>
              <select>
                <option value="Ташкент">Ташкент</option>
                <option value="Ташкент">Ташкент</option>
              </select>
            </div>
            <div className="Город">
              <h6>Город / Район</h6>
              <select>
                <option>Мирза Улугбекский район</option>
                <option>Мирза Улугбекский район</option>
                <option>Мирза Улугбекский район</option>
                <option>Мирза Улугбекский район</option>
              </select>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47931.90679462436!2d69.31085345034747!3d41.33617598947867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4431777da7b%3A0x289db26806f061e!2z0JzQuNGA0LfQvi3Qo9C70YPQs9Cx0LXQutGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1665484839869!5m2!1sru!2s" width="600" height="450" allowfullscreen="" loading="lazy"
            className="Xarita"
            referrerpolicy="no-referrer-when-downgrade"></iframe>



          <div className="FormaSend">
            <form>
              <label htmlFor="phone">Телефонный номер</label>
              <input type="tel" ref={phone} placeholder="+99894 888 74452" required />

              <label htmlFor="email">Email-адрес</label>
              <input type="email" ref={emailRef} placeholder="ilhomjopiskandarov2006@gmail.com" required />

              <label htmlFor="name">Контактный лицо</label>
              <input type="text" ref={nameRef} placeholder="Зухриддин" required />

              <div className="send">
                <button onClick={FormsendDobavit}>Добавить обьявления бесплатно</button>
                <Link to='/'>Предпросмотр</Link>
              </div>
            </form>
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default AddProduct;
