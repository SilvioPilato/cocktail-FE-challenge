import React from 'react';
import { Ingredient } from '../CocktailList/types';
import "./styles.css";

export type Props = {
    ingredients?: Ingredient[]
}

export const Glass: React.FC<Props> = ({ingredients}) => {
    let parts = 0;
    ingredients?.forEach((value) => {
        parts+=value.part;
    });

    return (
        <div className='glass-wrapper'>
            <div className='glass-body'>
                <div className='glass-ingredients'>
                    {
                        ingredients?.map((ingredient) => {
                            const height = `${ingredient.part / parts * 100}%`;
                            const pluralS = ingredient.part != 1 ? "s" : "" ;
                            const text = `${ingredient.part} part${pluralS} of `;
                            return (
                                <div className='ingredient-text' style={{
                                    backgroundColor: ingredient.color,
                                    width: '100%',
                                    height,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <div>
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
    )
}