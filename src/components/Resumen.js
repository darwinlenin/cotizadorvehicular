import React, {Fragment} from 'react';
import {primerMayuscula} from '../helper';
import styled from '@emotion/styled';

const ContenedorResumen= styled.div`
    padding:1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    // extraer de datos
    const {marca, year, plan} = datos;

    if(marca === '' || year ==='' || plan ==='') 
        return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)} </li>
                <li>Plan: {primerMayuscula(plan)} </li>
                <li>Año del Auto: {year}</li>
            </ul>
        </ContenedorResumen>
     );
}

export default Resumen;