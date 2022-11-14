import React from 'react';
import './route.scss';

import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

export default function Route() {

    return (
        <div className="route">
            <h1 className="route__label">Как добраться</h1>
            <div className="route__information">
                <p className="route__description">База отдыха находится<br/> в 20км от центра города</p>
                <p className="route__location">Солнечный переулок, 1а <br/>с. Красный Яр, Чердаклинский район,<br/> Ульяновская область</p>
            </div>
            <YMaps >
                <Map defaultState={{center: [54.220996, 48.554571], zoom: 10}} width="1200px" height="500px">
                    <Placemark geometry={[54.220996, 48.554571]}/>
                </Map>
            </YMaps>
        </div>
    );
}