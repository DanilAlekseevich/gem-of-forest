import React from 'react';
import './header.scss';
import logo from "../../images/logo.svg";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Header() {
    return (
        <div className="header">
            <LazyLoadImage src={logo}  alt="logo" className="logo"/>
            <ul className="menu__list">
                <li>Дома</li>
                <li>О нас</li>
                <li>Правила</li>
                <li>Маршрут</li>
                <li>Контакты</li>
            </ul>
            <div className="phoneNumber">
                +7 (917) 605-97-06
            </div>
        </div>
    );
}