import React, { useState } from 'react';
import Menu from "../Componentes/Menu";

export default function ConfiguracionPage({ onLogoutSuccess }) {
    const [activeTab, setActiveTab] = useState('General');

    const handleSave = (section) => {
        alert(`Cambios guardados en la sección: ${section}`);
    };

    return (
        <div className="w3-theme-l5" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Menu onLogoutSuccess={onLogoutSuccess} />

            {/* Contenido */}
            <div className="w3-container w3-content fade-in" style={{ maxWidth: "1000px", marginTop: "80px", flex: 1 }}>
                <div className="w3-card w3-round w3-white premium-card">
                    <div className="w3-container w3-padding-16 w3-theme-d2 w3-round-large" style={{ margin: '10px' }}>
                        <h2 style={{ margin: 0 }}><i className="fa fa-cogs"></i> Configuración de la cuenta</h2>
                    </div>

                    {/* Pestañas */}
                    <div className="w3-bar w3-theme-l4 w3-border-bottom" style={{ display: 'flex' }}>
                        <button
                            className={`w3-bar-item w3-button tablink ${activeTab === 'General' ? 'w3-theme-d1' : ''}`}
                            style={{ flex: 1 }}
                            onClick={() => setActiveTab('General')}
                        >
                            General
                        </button>
                        <button
                            className={`w3-bar-item w3-button tablink ${activeTab === 'Privacidad' ? 'w3-theme-d1' : ''}`}
                            style={{ flex: 1 }}
                            onClick={() => setActiveTab('Privacidad')}
                        >
                            Privacidad
                        </button>
                        <button
                            className={`w3-bar-item w3-button tablink ${activeTab === 'Notificaciones' ? 'w3-theme-d1' : ''}`}
                            style={{ flex: 1 }}
                            onClick={() => setActiveTab('Notificaciones')}
                        >
                            Notificaciones
                        </button>
                    </div>

                    {/* Contenido de pestañas */}
                    <div className="w3-container w3-padding-24">

                        {activeTab === 'General' && (
                            <div id="General" className="fade-in">
                                <h4>Información personal</h4>
                                <div className="w3-section">
                                    <label>Nombre</label>
                                    <input className="w3-input w3-border w3-round" type="text" defaultValue="Juan Pérez" />
                                </div>
                                <div className="w3-section">
                                    <label>Correo electrónico</label>
                                    <input className="w3-input w3-border w3-round" type="email" defaultValue="juan@email.com" />
                                </div>
                                <div className="w3-section">
                                    <label>Biografía</label>
                                    <textarea className="w3-input w3-border w3-round" rows="3" defaultValue="Diseñador UI/UX. Amante del café."></textarea>
                                </div>
                                <button className="w3-button w3-theme-d2 w3-round btn-hover" onClick={() => handleSave('General')}>
                                    <i className="fa fa-save"></i> Guardar cambios
                                </button>
                            </div>
                        )}

                        {activeTab === 'Privacidad' && (
                            <div id="Privacidad" className="fade-in">
                                <h4>Privacidad y seguridad</h4>
                                <div className="w3-section">
                                    <label>¿Quién puede ver tu perfil?</label>
                                    <select className="w3-select w3-border w3-round">
                                        <option>Todos</option>
                                        <option defaultValue>Solo amigos</option>
                                        <option>Solo yo</option>
                                    </select>
                                </div>
                                <div className="w3-section">
                                    <label>¿Quién puede enviarte solicitudes de amistad?</label>
                                    <select className="w3-select w3-border w3-round">
                                        <option>Todos</option>
                                        <option defaultValue>Amigos de amigos</option>
                                    </select>
                                </div>
                                <div className="w3-section">
                                    <label>Cambiar contraseña</label>
                                    <input className="w3-input w3-border w3-round" type="password" placeholder="Nueva contraseña" />
                                </div>
                                <button className="w3-button w3-theme-d2 w3-round btn-hover" onClick={() => handleSave('Privacidad')}>
                                    <i className="fa fa-lock"></i> Actualizar privacidad
                                </button>
                            </div>
                        )}

                        {activeTab === 'Notificaciones' && (
                            <div id="Notificaciones" className="fade-in">
                                <h4>Preferencias de notificaciones</h4>
                                <div className="w3-section">
                                    <input className="w3-check" type="checkbox" defaultChecked /> <label>Recibir notificaciones por correo</label>
                                </div>
                                <div className="w3-section">
                                    <input className="w3-check" type="checkbox" defaultChecked /> <label>Notificaciones de nuevos mensajes</label>
                                </div>
                                <div className="w3-section">
                                    <input className="w3-check" type="checkbox" /> <label>Notificaciones de cumpleaños</label>
                                </div>
                                <div className="w3-section">
                                    <input className="w3-check" type="checkbox" defaultChecked /> <label>Notificaciones de grupos</label>
                                </div>
                                <button className="w3-button w3-theme-d2 w3-round btn-hover" onClick={() => handleSave('Notificaciones')}>
                                    <i className="fa fa-bell"></i> Guardar preferencias
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <br />
            <footer className="w3-container w3-theme-d3 w3-padding-16 w3-center">
                <h5>RedSocial © 2025</h5>
            </footer>
        </div>
    );
}
