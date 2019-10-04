import React from 'react';
import './Search.css';

export default function Search (){
    return(
        <section className="search">
            <h2 className="search__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className="input" placeholder="Buscar..."/>
      </section>
    )
}