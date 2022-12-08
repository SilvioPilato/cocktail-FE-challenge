import React, { useCallback } from 'react'
import { Cocktail } from './types';

type Props = {
    onClick: (cocktail: Cocktail) => void;
    cocktail: Cocktail;
}

export const CocktailButton : React.FC<Props> = ({onClick, cocktail}) => {
    const onButtonClick = useCallback(() => {
        onClick(cocktail)
    }, [cocktail])
    return (
        <button className='cocktail-button' onClick={onButtonClick}>{cocktail.name}</button>
    )
}