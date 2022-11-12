import React from 'react';
import './price.scss';

import PriceRow from "./PriceRow";

export default function Price() {
    const prices = [
        {
            id: 1,
            when: 'Пн, Пт, Вс',
            value: '7000 ₽/сутки',
        },
        {
            id: 2,
            when: 'Сб',
            value: '8000 ₽/сутки',
        },
    ];
    return (
        <div>
            <table>
                {
                    prices.map(row => {
                        return (
                            <PriceRow key={row.id} when={row.when} value={row.value}/>
                        )
                    })
                }
            </table>
        </div>
    )
}
