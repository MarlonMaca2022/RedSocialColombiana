import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Menu({ onLogoutSuccess }) {
    const [showNav, setShowNav] = useState(false);
    const navigate = useNavigate();

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        onLogoutSuccess();
        navigate('/');
    };

    return (
        <>
            {/* Navbar */}
            <div className="w3-top">
                <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                    <button className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" onClick={toggleNav}>
                        <i className="fa fa-bars"></i>
                    </button>
                    <Link to="/home" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right"></i>Red Social</Link>
                    <Link to="/grupos" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Grupos"><i className="fa fa-globe"></i></Link>
                    <Link to="/perfil" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i className="fa fa-user"></i></Link>
                    <Link to="/chat" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i className="fa fa-envelope"></i></Link>
                    <div className="w3-dropdown-hover w3-hide-small">
                        <button className="w3-button w3-padding-large" title="Notifications"><i className="fa fa-bell"></i><span className="w3-badge w3-right w3-small w3-green">3</span></button>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: "300px" }}>
                            <Link to="#" className="w3-bar-item w3-button">One new friend request</Link>
                            <Link to="#" className="w3-bar-item w3-button">John Doe posted on your wall</Link>
                            <Link to="#" className="w3-bar-item w3-button">Jane likes your post</Link>
                        </div>
                    </div>
                    
                    {/* Botón de Logout */}
                    <button 
                        onClick={handleLogout}
                        className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" 
                        title="Cerrar sesión"
                    >
                        <i className="fa fa-sign-out"></i>
                    </button>

                    <Link to="/configuracion" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
                        <img src="https://www.w3schools.com//w3images/avatar2.png" className="w3-circle" style={{ height: "23px", width: "23px" }} alt="Avatar" />
                    </Link>
                </div>
            </div>

            {/* Navbar on small screens */}
            <div id="navDemo" className={`w3-bar-block w3-theme-d2 w3-hide-large w3-hide-medium w3-large ${showNav ? 'w3-show' : 'w3-hide'}`}>
                <Link to="/home" className="w3-bar-item w3-button w3-padding-large">Inicio</Link>
                <Link to="/grupos" className="w3-bar-item w3-button w3-padding-large">Grupos</Link>
                <Link to="/perfil" className="w3-bar-item w3-button w3-padding-large">Perfil</Link>
                <button onClick={handleLogout} className="w3-bar-item w3-button w3-padding-large w3-block w3-left-align">Cerrar sesión</button>
            </div>
        </>
    )
}
