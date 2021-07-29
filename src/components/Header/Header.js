import React from 'react';
import Gracias from './Gracias';
import Banner from './Banner';

import '../../scss/header.sass';

export default function Header() {
    return (
        <div>
            <Gracias />
            <Banner />
        </div>
    )
}
