import React from 'react';
import { CocktailButton } from './CocktailButton';
import { Cocktail } from './types';
import './styles.css';

export type Props = {
    cocktails: Cocktail[];
    onButtonClick: (cocktail: Cocktail) => void
}

export const CocktailList: React.FC<Props> = ({cocktails, onButtonClick}) => {
    return (
        <div className='cocktails-list'>
            {
                cocktails.map((cocktail) => 
                    <CocktailButton key={`${cocktail.name}-button`}  cocktail={cocktail} onClick={onButtonClick}/>
                )
            }
        </div>
    )
}