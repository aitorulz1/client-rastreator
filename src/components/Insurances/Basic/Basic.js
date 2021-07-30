import React from 'react';
import PropTypes from 'prop-types';



export default function Basic({ basicObj }) {


    return (
        <div className="main-container">
            <div className="plan">
                {basicObj ? basicObj.title : null}
            </div>
            <span className="dark-grey">Desde</span>
            <div>
                <span className="dark">{basicObj ? basicObj.price_from : null} €/mes</span>
            </div>
        </div>
    );
}

Basic.propTypes = {
    basicObj: PropTypes.object
}