import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"

export function NotFound() {
    return (
        <div className="Not">
            <h2>404 - Not Found</h2>
            <p>Lo siento, la página que buscas no existe.</p>
            <Link to="/" className="volver">Ir a la página principal</Link>
        </div>
    )
}

