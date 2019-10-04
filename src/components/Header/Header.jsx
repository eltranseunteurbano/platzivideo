import React from 'react';
import './Header.css';

export default function Header (){
    return(
        <header>
             <header className="header">
                <img className="header__img" src={process.env.PUBLIC_URL + './logo-platzi-video-BW2.png'} alt="Platzi Video" />
                <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={process.env.PUBLIC_URL + './user-icon.png'} alt=""/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
                </div>
            </header>
        </header>
    )
}