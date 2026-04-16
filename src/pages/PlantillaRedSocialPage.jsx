import React from 'react'
import Menu from "../Componentes/Menu"
import Perfil from "../Componentes/Perfil"
import Acordeon from "../Componentes/Acordeon"
import Intereses from "../Componentes/Intereses"
import Alerta from "../Componentes/Alerta"
import Nuevopost from "../Componentes/Nuevopost"
import Publicaciones from "../Componentes/Publicaciones"
import Eventos from "../Componentes/Eventos"
import Request from "../Componentes/Request"
import Adds from "../Componentes/Adds"

export default function PlantillaRedSocialPage() {
    return (
        <div>
            <Menu />

            {/* Page Container */}
            <div className="w3-container w3-content" style={{ maxWidth: "1400px", marginTop: "80px" }}>
                {/* The Grid */}
                <div className="w3-row">
                    {/* Left Column */}
                    <div className="w3-col m3">
                        <Perfil />
                        <br />
                        <Acordeon />
                        <br />
                        <Intereses />
                        <br />
                        <Alerta />
                    </div>

                    {/* Middle Column */}
                    <div className="w3-col m7">
                        <Nuevopost />
                        <Publicaciones />
                    </div>

                    {/* Right Column */}
                    <div className="w3-col m2">
                        <Eventos />
                        <br />
                        <Request />
                        <br />
                        <Adds />
                    </div>
                </div>
            </div>
            <br />

            {/* Footer */}
            <footer className="w3-container w3-theme-d3 w3-padding-16">
                <h5>Footer</h5>
            </footer>

            <footer className="w3-container w3-theme-d5">
                <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
            </footer>
        </div>
    )
}
