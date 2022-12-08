import React, { Fragment } from 'react';
import './styles.css';

export const Header = () => {
    return (
        <Fragment>
            <img className="barman-img" src="./img/barman.png" />
            <h1 className="app-title">HI! SELECT YOUR COCKTAIL</h1>
        </Fragment>
    );
}