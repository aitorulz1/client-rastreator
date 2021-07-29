import React, { useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';
import LoansChild from './LoansChild';
import ItemsCarousel from 'react-items-carousel';
import '../../scss/prices.sass';

export default function Loans() {

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const [loans, guardarLoans] = useState([]);

    useEffect(() => {
        const obtenerLoans = async () => {
            try {
                const respuesta = await clienteAxios.get('/loans');
                guardarLoans(respuesta.data)
            } catch (error) {
                console.error(error);
            }
        }
        obtenerLoans();
    }, [])

    const loandValues = [loans]

    return (
        <div className="prices-container">

            <div className="ask-container">
                <div className="ask-content">

                    <div className="ask">
                        ¿Quieres financiación?
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
                    {loandValues.map((loan, index) => (
                        <LoansChild
                            key={index}
                            loan={loan}
                        />
                    ))}
                </ItemsCarousel>
            </div>
        </div>
    )
}
