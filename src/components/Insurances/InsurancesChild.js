import React from 'react';
import Basic from './Basic/Basic';
import Plus from './Plus/Plus';
import Full from './Full/Full';
import '../../scss/prices.sass';
import PropTypes from 'prop-types'; 

export default function InsurancesChild({ insurance }) {

  const { mapfre, mutua, 'linea-directa': lineaDirecta } = insurance;

  const basicArray = [mapfre?.basic, mutua?.basic, lineaDirecta?.basic]
  const basicOrderedPrice = basicArray.sort((a, b) => a.price_from - b.price_from);

  const plusArray = [mapfre?.plus, mutua?.plus, lineaDirecta?.plus]
  const plusOrderedPrice = plusArray.sort((a, b) => a.price_from - b.price_from);

  const fullArray = [mapfre?.full, mutua?.full, lineaDirecta?.full].sort((a, b) => a.price_from - b.price_from)
  const fullOrderedPrice = fullArray.sort((a, b) => a.price_from - b.price_from);

  console.log(insurance)
  console.log(fullOrderedPrice)

  return (
    <div className="categories">
      <div className="slide-block">
        {basicOrderedPrice && basicOrderedPrice.map((basicObj, index) => (
          <Basic
            key={index}
            basicObj={basicObj}
          />
        ))}
      </div>
      <div className="slide-block">
        {plusOrderedPrice.map((plusObj, index) => (
          <Plus
            key={index}
            plusObj={plusObj}
          />
        ))}
      </div>
      <div className="slide-block">
        {fullOrderedPrice.map((fullObj, index) => (
          <Full
            key={index}
            fullObj={fullObj}
          />
        ))}
      </div>
    </div>
  )
}

InsurancesChild.propTypes = {
  insurance: PropTypes.object
}