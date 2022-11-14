import React from 'react';
import "./rules.scss";

export default function Rules() {
    return (
        <div className="rules">
            <h1 className="rules__label">Правила пребывания</h1>
            <div className="rules__item">
                <hr/>
                <p className="rules-ask">Со скольки можно заехать в дом?</p>
                <p className="rules-answer">Заезд в дома осуществляется в 14:00, выезд и сдача дома в 12:00.</p>
                <hr/>
            </div>
        </div>
    );
}