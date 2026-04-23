import React from 'react';
import { Link } from 'react-router-dom';

export default function RegistroPage() {
    return (
        <div className="w3-container w3-content" style={{ maxWidth: "500px", marginTop: "100px" }}>
            <div className="w3-card-4 w3-round-xlarge w3-white w3-padding-32 w3-center">
                <h2>Registrarse</h2>
                <p>Esta página de registro estará disponible pronto.</p>
                <Link to="/" className="w3-button w3-theme-d2 w3-round">Volver al Login</Link>
            </div>
        </div>
    );
}
