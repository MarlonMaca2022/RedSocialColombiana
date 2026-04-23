import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage({ onLoginSuccess }) {
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        // Obtenemos los usuarios de localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Verificamos si existe el usuario y la contraseña coincide
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            onLoginSuccess();
            navigate('/home');
        } else {
            alert('Credenciales incorrectas. Intenta de nuevo.');
        }
    };

    return (
        <div className="w3-theme-l5" style={{ minHeight: '100vh' }}>
            {/* Navbar */}
            <div className="w3-top">
                <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                    <button 
                        className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" 
                        onClick={toggleNav}
                    >
                        <i className="fa fa-bars"></i>
                    </button>
                    <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
                        <i className="fa fa-home w3-margin-right"></i>Logo
                    </Link>
                    <Link to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
                        <i className="fa fa-sign-in"></i> Iniciar sesión
                    </Link>
                    <Link to="/registro" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
                        <i className="fa fa-user-plus"></i> Registrarse
                    </Link>
                </div>
            </div>

            {/* Navbar móvil */}
            <div id="navDemo" className={`w3-bar-block w3-theme-d2 w3-hide-large w3-hide-medium w3-large ${showNav ? 'w3-show' : 'w3-hide'}`}>
                <Link to="/" className="w3-bar-item w3-button w3-padding-large">Inicio</Link>
                <Link to="/login" className="w3-bar-item w3-button w3-padding-large">Iniciar sesión</Link>
                <Link to="/registro" className="w3-bar-item w3-button w3-padding-large">Registrarse</Link>
            </div>

            {/* Contenedor principal */}
            <div className="w3-container w3-content" style={{ maxWidth: "500px", marginTop: "100px" }}>
                <div className="w3-card-4 w3-round-xlarge w3-white">
                    <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
                        <h2 className="w3-center">Iniciar sesión</h2>
                    </div>
                    <form className="w3-container w3-padding-24" onSubmit={handleLogin}>
                        <div className="w3-section">
                            <label><i className="fa fa-envelope"></i> Correo electrónico</label>
                            <input className="w3-input w3-border w3-round" type="email" placeholder="tu@email.com" required />
                        </div>
                        <div className="w3-section">
                            <label><i className="fa fa-lock"></i> Contraseña</label>
                            <input className="w3-input w3-border w3-round" type="password" placeholder="********" required />
                        </div>
                        <div className="w3-section">
                            <button className="w3-button w3-theme-d2 w3-round w3-block w3-section" type="submit">
                                <i className="fa fa-sign-in"></i> Acceder
                            </button>
                        </div>
                        <p className="w3-center"><a href="#">¿Olvidaste tu contraseña?</a></p>
                        <p className="w3-center">
                            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
