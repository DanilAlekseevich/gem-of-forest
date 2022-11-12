import React from 'react';
import './price.scss';

export default function PriceRow({when, value}) {
    return (
        <tr>
            <td className="price__when">{when}</td>
            <td className="price__when"> - </td>
            <td className="price__value">{value}</td>
        </tr>
    )
}
