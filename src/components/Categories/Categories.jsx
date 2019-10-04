import React from 'react';
import './Categories.css';

const Categories = ({ title, children }) => {
    return(
    <div className="categories">
          <h3 className="categories__title">{title}</h3>
          {children}
    </div>
    )
}

export default Categories;