import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
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
      <div className="body"></div>
    </div>
  );
}

export default App;
