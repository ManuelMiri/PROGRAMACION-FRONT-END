// Importamos useState para manejar el estado del tema, el hijo ThemeCard y el estilo de transsicion

import { useState } from "react";
import ThemeCard from "./components/ThemeCard";
import "./App.css";


// Componente principal de la aplicación profesora
function App() {
  const [isDark, setIsDark] = useState(false);

  // Funcion que invierte el valor de isDark cada vez que se llama, si isDark es false lo cambia a true, y viceversa
  const changeTema = () => {
    setIsDark(!isDark);
  };

  return (

    // Cambia el fondo y color de texto de toda la pagina segun isDark 
    <div className={`min-vh-100 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}>

      {/* Navbar tambien cambia de tema segun isDark */}
      <nav className={`navbar px-4 border-bottom ${isDark ? "navbar-dark bg-dark" : "navbar-light bg-white"}`}>
        <span className="navbar-brand fw-bold">PROGRAMACIÓN FRONT END</span>
        <button className="btn btn-sm btn-outline-primary" onClick={changeTema}>
          {isDark ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </nav>

      {/* Contenido principal centrado con grilla de Bootstrap */}
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">

            {/* Pasamos isDark como prop para que ThemeCard tambien cambie de tema */}
            <ThemeCard isDark={isDark} /> 
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;