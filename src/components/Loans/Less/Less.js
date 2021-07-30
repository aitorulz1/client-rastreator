import React from 'react';
import PropTypes from 'prop-types';

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

Less.propTypes = {
    less: PropTypes.object
}