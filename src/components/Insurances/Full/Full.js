import React from 'react';
import PropTypes from 'prop-types';

export default function Full({ fullObj }) {

    return (
        <div className="main-container">
            <div className="plan">
                {fullObj ? fullObj.title : null}
            </div>
            <span className="dark-grey">Desde</span>
            <div>
                <span className="dark">{fullObj ? fullObj.price_from : null} €/mes</span>
            </div>
        </div>
    );
}

Full.propTypes = {
    fullObj: PropTypes.object
}