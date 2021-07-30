import React from 'react';
import Less from './Less/Less';
import More from './More/More';
import PropTypes from 'prop-types';

export default function LoansChild({ loan }) {

    const loanAll = Object.values(loan);

    const lessThan = loanAll.filter(el => el.max < 10000)
    const biggerThanOrdered = loanAll.filter(el => el.max >= 10000).sort((a, b) => a.max - b.max);

    return (
        <div className="categories">
            <div className="slide-block">
                {lessThan && lessThan.map((less, index) => (
                    <Less
                        key={index}
                        less={less}
                    />
                ))}
            </div>
            <div className="slide-block">
                {biggerThanOrdered && biggerThanOrdered.map((more, index) => (
                    <More
                        key={index}
                        more={more}
                    />
                ))}
            </div>
        </div>
    );
}

LoansChild.propTypes = {
    loan: PropTypes.object
}
