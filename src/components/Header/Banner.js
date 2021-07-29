import React from 'react';
import VW from '../../assets/images/vw.jpg';
import { VscCheck } from "react-icons/vsc";
import { HiDownload } from "react-icons/hi";


export default function Banner() {
    return (
        <div className="banner-container">
            <img src={VW} alt="precio seguros vw" />
            <div className="grey-container">
                <div className="data-container">
                    <div className="data-content">

                        <div className="oferta">
                            <div className="points">
                                <div className="icon"><VscCheck /></div>
                                <span className="dark-smaller">Oferta personalizada enviada</span>
                                <div className="sub-container">
                                    <span className="dark-grey">Volkswagen se pondrá en contacto contigo en breves</span>
                                </div>
                            </div>
                        </div>

                        <div className="descarga">
                            <div className="points">
                                <div className="icon"><HiDownload /></div>
                                <a href="#">Descarga catálogo del coche</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
