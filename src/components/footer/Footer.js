import React from 'react';
import './footer.scss';
import logo from "../../images/logo.svg";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <LazyLoadImage src={logo} alt="logo"/>
            </div>
            <div className="footer__social-network">
                <p>Подписывайтесь на нас:</p>
            </div>
            <div className="footer__contacts">
                <p className="footer__contacts-number">+7(917)605-97-06</p>
                <p className="footer__contacts-location">Солнечный переулок, 1а <br/> с. Красный Яр, Ульяновская область</p>
            </div>
        </div>
    );
}
