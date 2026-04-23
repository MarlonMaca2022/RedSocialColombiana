import React, { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import PlantillaRedSocialPage from "./pages/PlantillaRedSocialPage"
import LoginPage from "./pages/LoginPage"
import RegistroPage from "./pages/RegistroPage"
import PerfilPage from "./pages/PerfilPage"
import GruposPage from "./pages/GruposPage"
import ConfiguracionPage from "./pages/ConfiguracionPage"
import ChatPage from "./pages/ChatPage"

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  useEffect(() => {
    // Creamos el usuario por defecto si no existe
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.find(u => u.email === 'Marlon@cesde.net');
    
    if (!exists) {
      users.push({ email: 'Marlon@cesde.net', password: '1qaz2wsx' });
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  // Función para manejar el login y forzar re-render
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Función para manejar el logout y forzar re-render
  const handleLogoutSuccess = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/registro" element={<RegistroPage />} />
        
        {/* Rutas Protegidas */}
        <Route 
          path="/home" 
          element={isLoggedIn ? <PlantillaRedSocialPage onLogoutSuccess={handleLogoutSuccess} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/perfil" 
          element={isLoggedIn ? <PerfilPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/grupos" 
          element={isLoggedIn ? <GruposPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/configuracion" 
          element={isLoggedIn ? <ConfiguracionPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/chat" 
          element={isLoggedIn ? <ChatPage /> : <Navigate to="/" />} 
        />

        {/* Redirigir cualquier otra ruta al login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
