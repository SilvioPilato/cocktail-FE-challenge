import React from 'react';
import { Ingredient } from '../CocktailList/types';
import { GlassIngredients } from './GlassIngredients';
import "./styles.css";

export type Props = {
    ingredients?: Ingredient[]
}

export const Glass: React.FC<Props> = ({ingredients}) => {
    return (
        <div>
            <div className='glass-wrapper'>
                <div className='glass-body'>
                    <GlassIngredients ingredients={ingredients} />
                </div>
            </div>
            <hr className='glass-base'/>
        </div>
    )
}