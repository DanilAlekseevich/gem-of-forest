import "./App.scss";
import logo from "./images/logo.svg";
import Houses from "./components/houses/Houses";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="header">
          <img src={logo} alt="logo" className="logo" />
          <ul className="menu__list">
            <li className="menu__link">Дома</li>
            <li className="menu__link">О нас</li>
            <li className="menu__link">Правила</li>
            <li className="menu__link">Маршрут</li>
            <li className="menu__link">Контакты</li>
          </ul>
          <div className="phoneNumber">
            <p className="number">+7 (917) 605-97-06</p>
          </div>
        </div>
        <div className="preview">
          <div className="preview__information">
            <p className="preview__tagline">
              Загородный отдых в комфортабельных домах
            </p>
            <p className="preview__description">
              База отдыха в сосновом бору заповедной зоны Красного Яра в 20
              минутах от города
            </p>
          </div>
          <div className="preview__button">
            <p className="preview_button-text">Подобрать дом</p>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="actions">
          <p className="actions__label">Чем заняться?</p>
          <div className="actions__items">
            <div className="item1">
              <p className="actions__items-label">Баня на дровах</p>
            </div>
            <div className="item2">
              <p className="actions__items-label">Бильярд</p>
            </div>
            <div className="item3">
              <p className="actions__items-label">Беседки</p>
            </div>
            <div className="item4">
              <p className="actions__items-label">Рыбалка в пруду</p>
            </div>
          </div>
        </div>
        
        <Houses />

        <div className="about">
          <div className="about__information">
            <h1 className="about__information-title">О базе отдыха</h1>
            <p className="about__information-description">
              Жемчужина леса предоставляет эксклюзивный загородный отдых в
              сосновом бору заповедной зоны Красного Яра в 20 минутах от города.
            </p>
            <p className="about__information-description">
              {" "}
              К вашим услугам комфортабельные дома разной вместимости,
              электрическая и дровяная баня, спортивная рыбалка, различные
              возможности для активного отдыха (волейбольная площадка, горка
              тюбинг, каток зимой и многое другое).{" "}
            </p>
            <p className="about__information-description">
              {" "}
              В 10 минутах от базы уединенный чистый пляж на берегу Волги.
              Отличное место для различных форматов отдыха.{" "}
            </p>
          </div>
          <div className="about__image"></div>
        </div>

        <div className="feedbacks">
            <p className="feedbacks__title">Отзывы</p>
        </div>

        <div className="stocks">

        </div>
      </div>
    </div>
  );
}

export default App;
