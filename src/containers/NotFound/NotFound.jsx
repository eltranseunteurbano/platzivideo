import React from 'react';
import './NotFound.css';

import { Link } from 'react-router-dom';

const NotFound = () => {

    return(
        <React.Fragment>
            <div className="container">
                <div className="copy-container center-xy">
                    <p>
                    404, page not found.
                    </p>
                    <span className="handle"></span>
                </div>
                <Link className="center-xy textolink" to ="/">Volver al inicio</Link>
            </div>
        </React.Fragment>
    );
}

export default NotFound;