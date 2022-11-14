import React from 'react';
import './about.scss';
import {LazyLoadImage} from "react-lazy-load-image-component";
import about from "../../images/aboutImage.svg";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function About() {
    return (
        <div className="about">
            <div className="about__information">
                <h1 className="about__information-title">О базе отдыха</h1>
                <p className="about__information-description">
                    Жемчужина леса предоставляет эксклюзивный загородный отдых в
                    сосновом бору заповедной зоны Красного Яра в 20 минутах от города.
                </p>
                <p className="about__information-description">
                    К вашим услугам комфортабельные дома разной вместимости,
                    электрическая и дровяная баня, спортивная рыбалка, различные
                    возможности для активного отдыха (волейбольная площадка, горка
                    тюбинг, каток зимой и многое другое).
                </p>
                <p className="about__information-description">
                    В 10 минутах от базы уединенный чистый пляж на берегу Волги.
                    Отличное место для различных форматов отдыха.
                </p>
            </div>
            <div className="about__image"><LazyLoadImage src={about} effect="blur"/>
            </div>
        </div>
    );
}