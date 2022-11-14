import React from 'react';
import './preview.scss';
import preview from "../../images/preview.svg";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Preview() {
    return (
        <div className="preview">
            <LazyLoadImage src={preview} className="preview__img"/>
            <div className="preview__information">
                <p className="preview__tagline">
                    Загородный отдых в комфортабельных домах
                </p>
                <p className="preview__description">
                    База отдыха в сосновом бору заповедной зоны Красного Яра в 20
                    минутах от города
                </p>
            </div>
            <button className="preview__button">Подобрать дом</button>
        </div>
    );
}

