import React, { useState } from 'react';
import Menu from "../Componentes/Menu";

export default function GruposPage() {
    const [myGroups, setMyGroups] = useState([
        {
            id: 1,
            name: "Diseñadores UI/UX",
            img: "https://www.w3schools.com/w3images/avatar2.png",
            members: "1.2k miembros",
            posts: "15 publicaciones nuevas"
        },
        {
            id: 2,
            name: "Desarrollo Web",
            img: "https://www.w3schools.com/w3images/avatar5.png",
            members: "3.4k miembros",
            posts: "8 publicaciones nuevas"
        },
        {
            id: 3,
            name: "Fotografía Creativa",
            img: "https://www.w3schools.com/w3images/avatar6.png",
            members: "856 miembros",
            posts: "3 publicaciones nuevas"
        }
    ]);

    const [suggestedGroups, setSuggestedGroups] = useState([
        {
            id: 4,
            name: "Viajeros del mundo",
            img: "https://www.w3schools.com/w3images/forest.jpg",
            members: "5.1k miembros"
        },
        {
            id: 5,
            name: "Tecnología y gadgets",
            img: "https://www.w3schools.com/w3images/lights.jpg",
            members: "8.2k miembros"
        },
        {
            id: 6,
            name: "Cocina fácil",
            img: "https://www.w3schools.com/w3images/nature.jpg",
            members: "2.7k miembros"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    const handleJoin = (group) => {
        // Remove from suggested
        setSuggestedGroups(suggestedGroups.filter(g => g.id !== group.id));
        // Add to my groups
        setMyGroups([...myGroups, { ...group, posts: "Recién unido" }]);
    };

    const filteredSuggested = suggestedGroups.filter(g =>
        g.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w3-theme-l5" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Menu />

            <div className="w3-container w3-content fade-in" style={{ maxWidth: "1200px", marginTop: "80px", flex: 1 }}>
                <div className="w3-row-padding">

                    {/* Columna izquierda: Mis grupos */}
                    <div className="w3-col m6 w3-margin-bottom">
                        <div className="w3-card w3-round w3-white premium-card" style={{ minHeight: '600px' }}>
                            <div className="w3-container w3-padding-16 w3-theme-d2 w3-round-large" style={{ margin: '10px' }}>
                                <h3 style={{ margin: 0 }}><i className="fa fa-group"></i> Mis grupos</h3>
                            </div>
                            <ul className="w3-ul w3-hoverable">
                                {myGroups.map(group => (
                                    <li key={group.id} className="w3-padding-16 chat-item">
                                        <img src={group.img} className="w3-left w3-circle w3-margin-right avatar-img" style={{ width: "50px", height: "50px", objectFit: "cover" }} alt="grp" />
                                        <span className="w3-large">{group.name}</span>
                                        <button className="w3-button w3-small w3-theme-d2 w3-right w3-round btn-hover">Ver grupo</button>
                                        <br />
                                        <span className="w3-opacity">{group.members} · <span className="w3-text-theme" style={{ fontWeight: 'bold' }}>{group.posts}</span></span>
                                    </li>
                                ))}
                            </ul>
                            <div className="w3-container w3-padding-16">
                                <button className="w3-button w3-block w3-theme-l1 w3-round-large btn-hover">
                                    <i className="fa fa-plus"></i> Crear nuevo grupo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha: Grupos sugeridos y búsqueda */}
                    <div className="w3-col m6">
                        <div className="w3-card w3-round w3-white premium-card">
                            <div className="w3-container w3-padding-16 w3-theme-d1 w3-round-large" style={{ margin: '10px' }}>
                                <h3 style={{ margin: 0 }}><i className="fa fa-star"></i> Grupos sugeridos</h3>
                            </div>
                            <ul className="w3-ul w3-hoverable">
                                {filteredSuggested.length > 0 ? filteredSuggested.map(group => (
                                    <li key={group.id} className="w3-padding-16 chat-item">
                                        <img src={group.img} className="w3-left w3-circle w3-margin-right avatar-img" style={{ width: "50px", height: "50px", objectFit: "cover" }} alt="grp" />
                                        <span className="w3-large">{group.name}</span>
                                        <button
                                            className="w3-button w3-small w3-green w3-right w3-round btn-hover"
                                            onClick={() => handleJoin(group)}
                                        >
                                            <i className="fa fa-plus"></i> Unirse
                                        </button>
                                        <br />
                                        <span className="w3-opacity">{group.members}</span>
                                    </li>
                                )) : (
                                    <li className="w3-padding-32 w3-center w3-opacity">
                                        <p>No se encontraron más grupos sugeridos.</p>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <br />

                        {/* Buscar grupos */}
                        <div className="w3-card w3-round w3-white premium-card">
                            <div className="w3-container w3-padding-24">
                                <h4 style={{ marginTop: 0 }}>Buscar grupos</h4>
                                <div className="w3-row">
                                    <div className="w3-col s9">
                                        <input
                                            className="w3-input w3-border w3-round"
                                            type="text"
                                            placeholder="Nombre del grupo..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                    <div className="w3-col s3" style={{ paddingLeft: '10px' }}>
                                        <button className="w3-button w3-theme-d2 w3-round w3-block btn-hover">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <br />
            <footer className="w3-container w3-theme-d3 w3-padding-16 w3-center" style={{ marginTop: '20px' }}>
                <h5>RedSocial © 2025</h5>
            </footer>
        </div>
    );
}

