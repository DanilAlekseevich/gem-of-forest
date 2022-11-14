import React from 'react';
import './actions.scss';

import bath from "../../images/bath.svg";
import billiards from "../../images/billards.svg";
import gazebos from "../../images/gazebos.svg";
import fishing from "../../images/fishing.svg";

// import {ReactComponent as BathImg} from "../../images/bath.svg";
// import {ReactComponent as BilliardsImg} from "../../images/billards.svg";
// import {ReactComponent as GazebosImg} from "../../images/gazebos.svg";
// import {ReactComponent as FishingImg} from "../../images/fishing.svg";

import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Actions() {
    return (
        <div className="actions">
            <p className="actions__label">Чем заняться?</p>
            <div className="actions__items">
                <div className="actions__item">
                    <LazyLoadImage src={bath} effect='blur'/>
                    <p className="actions__items-label">Баня на дровах</p>
                </div>
                <div className="actions__item">
                    <LazyLoadImage src={billiards} effect='blur'/>
                    <p className="actions__items-label">Бильярд</p>
                </div>
                <div className="actions__item">
                    <LazyLoadImage src={gazebos} effect='blur'/>
                    <p className="actions__items-label">Беседки</p>
                </div>
                <div className="actions__item">
                    <LazyLoadImage src={fishing} effect='blur'/>
                    <p className="actions__items-label">Рыбалка в пруду</p>
                </div>
            </div>
        </div>
    );
}