import React from "react"
import { Routes, Route } from "react-router-dom"
import PlantillaRedSocialPage from "./pages/PlantillaRedSocialPage"
import LoginPage from "./pages/LoginPage"
import RegistroPage from "./pages/RegistroPage"
import PerfilPage from "./pages/PerfilPage"
import GruposPage from "./pages/GruposPage"
import ConfiguracionPage from "./pages/ConfiguracionPage"
import ChatPage from "./pages/ChatPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PlantillaRedSocialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/grupos" element={<GruposPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </>
  )
}

export default App
