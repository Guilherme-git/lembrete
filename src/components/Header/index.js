import React from 'react';
import {Link} from 'react-router-dom';

import './style.css'

export default () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="btn btn-sm active btnMenu nav-link" role="button" aria-pressed="true">Página inicial</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="btn btn-sm active btnMenu nav-link" role="button" aria-pressed="true">Criar lembrete</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}