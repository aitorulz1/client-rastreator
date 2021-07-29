import React, { Fragment } from 'react';
import { VscChromeClose } from "react-icons/vsc";

export default function Gracias() {
    return (
        <Fragment>
            <div className="close"><VscChromeClose /></div>
            <div className="gracias">
                <span className="dark">¡Gracias!</span> Aquí tienes todo lo que buscas
            </div>
        </Fragment>
    )
}
