import React from 'react';
import { Ingredient } from '../CocktailList/types';
import "./styles.css";

export type Props = {
    ingredients?: Ingredient[]
}

export const Glass: React.FC<Props> = ({ingredients}) => {
    let totalParts = 0;
    ingredients?.forEach((value) => {
        totalParts+=value.part;
    });

    return (
        <div>
            <div className='glass-wrapper'>
                <div className='glass-body'>
                    <div className='glass-ingredients'>
                        {
                            ingredients?.map((ingredient, index) => {
                                const height = `${ingredient.part / totalParts * 100}%`;
                                const pluralS = ingredient.part != 1 ? "s" : "" ;
                                const text = `${ingredient.part} part${pluralS} of `;
                                const animationDuration = 0.5;
                                const animationDelay = animationDuration * (ingredients.length - index - 1);
                                /** 
                                 * We make a random index so that react will always  
                                 * recreate the whole div and the animation will always work
                                **/
                                const elIndex = `${ingredient.name}-${Math.random()}`;

                                return (
                                    <div className='ingredient-text-wrapper' key={elIndex} style={{
                                        backgroundColor: ingredient.color,
                                        width: '100%',
                                        height,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        animationDuration: `${animationDuration}s`, 
                                        animationDelay: `${animationDelay}s`
                                    }}>
                                        <div className='ingredient-text'>
                                            {text}
                                            <span className='ingredient-name ingredient-text'>{ingredient.name}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
            <hr className='glass-base'/>
        </div>
    )
}