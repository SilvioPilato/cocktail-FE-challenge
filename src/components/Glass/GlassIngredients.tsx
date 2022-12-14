import React from 'react';
import { Props } from '.';
import "./styles.css";

export const GlassIngredients: React.FC<Props> = ({ingredients}) => {
    const totalParts = ingredients?.reduce((total, current) => total + current.part, 0) || 0;
    return (
        <div className='glass-ingredients'>
            {
                ingredients?.map((ingredient, index) => {
                    const height = `${ingredient.part / totalParts * 100}%`;
                    const pluralS = ingredient.part != 1 ? "s" : "" ;
                    const text = `${ingredient.part} part${pluralS} of `;  
                    const animationDuration = 0.5;
                    const animationDelay = animationDuration * index;
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
    )
}