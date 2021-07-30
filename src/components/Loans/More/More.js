import React from 'react';
import PropTypes from 'prop-types';

export default function More({ more }) {
    return (
        <div className="main-container">
            <div className="plan">
                Hasta {more ? more.max : null} €
            </div>
            <span className="dark-grey">Cuota desde</span>
            <div className="">
                <span className="dark">{more ? more.fee : null} €/mes</span>
            </div>
        </div>
    )
}

More.propTypes = {
    more: PropTypes.object
}