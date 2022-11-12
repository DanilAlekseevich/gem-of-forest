import React from 'react';
import "./house.scss";

import Price from "./price/Price";

export default function House() {
    return (
        <div className="houses__house">
            <div className="houses__house__image-slider"></div>
            <div className="houses__house__information">
                <h1 className="houses__house__information-title">Дом большой</h1>
                <p className="houses__house__information-people">Вместимость: 20-25 человек</p>
                <p className="houses__house__information-description">Два этажа. На первом - кухня и баня, на втором -
                    гостиная и три спальни. Три кровати и два дивана.</p>
                <Price/>
            </div>
            <button className="reserve__button">Забронировать</button>
        </div>
    )
}
