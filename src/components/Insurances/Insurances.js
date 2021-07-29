import React, { useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';
import InsurancesChild from './InsurancesChild';
import ItemsCarousel from 'react-items-carousel';
import '../../scss/prices.sass';

export default function Isurances() {

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const [insurances, guardarInsurances] = useState([]);

    useEffect(() => {
        const obtenerInsurances = async () => {
            try {
                const respuesta = await clienteAxios.get('/insurances');
                guardarInsurances(respuesta.data)
            } catch (error) {
                console.error(error);
            }
        }
        obtenerInsurances();
    }, [])

    const insurancesArray = [insurances]

    return (
        <div className="prices-container">

            <div className="ask-container">
                <div className="ask-content">

                    <div className="ask">
                        ¿Vas a necesitar un seguro?
                    </div>

                    <button className="ask-button">
                        Personalizar
                    </button>

                </div>
            </div>
            <div className="CategoriesContainer">
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    leftChevron={<button>{'<'}</button>}
                    rightChevron={<button>{'>'}</button>}
                    outsideChevron
                    chevronWidth={0}
                >
                    {insurancesArray.map((insurance, index) => (
                        <InsurancesChild
                            key={index}
                            insurance={insurance}
                        />
                    ))}
                </ItemsCarousel>
            </div>
        </div>
    )
}
