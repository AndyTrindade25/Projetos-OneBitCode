import React, {Fragment} from 'react';
import './style.css';
import DescriptionWithLink from './../shared/description_with_link'

const Planet = (props) => {
    const names = ['a', 'b3', 'c', 'd']

    return (
        <div onClick={props.clickOnPlanet}>
            <DescriptionWithLink description={props.description} link={props.link}/>

            <h4>Satélites</h4>
            <ul>
                {names.map((n) => {
                    <li>Satélite {n}</li>
                })}
            </ul>
            <hr/>
        </div> 
    )
}
 
export default Planet;