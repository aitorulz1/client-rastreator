import React from 'react';

export default function Less({ less }) {
    return (
        <div className="main-container">
            <div className="plan">
                Hasta {less ? less.max : null} €
            </div>
            <span className="dark-grey">Cuota desde</span>
            <div className="">
                <span className="dark">{less ? less.fee : null} €/mes</span>
            </div>
        </div>
    )
}
