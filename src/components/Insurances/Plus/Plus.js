import React from 'react';

export default function Plus({ plusObj }) {

    return (
        <div className="main-container">
            <div className="plan">
                {plusObj ? plusObj.title : null}
            </div>
            <span className="dark-grey">Desde</span>
            <div>
                <span className="dark">{plusObj ? plusObj.price_from : null} €/mes</span>
            </div>
        </div>
    );
}

