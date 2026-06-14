// Importamos los componentes para mostrar cada habilidad profesora
import BotonHability from "./BotonHability";
import habilidades from "../data/habilidades";

//Componente que recibe isDark como prop desde App.jsx para cambiar su apariencia segun el tema actual
function ThemeCard({ isDark }) {
  return (
    // Aca cambia entre fondo oscuro y claro segun isDark 
    <div className={`card text-center p-4 border-0 shadow ${isDark ? "bg-secondary text-light" : "bg-white text-dark"}`}>

      <div className="fs-1 mb-2">👨‍💻</div>
      <h2 className="card-title fw-bold">Manuel Rodriguez</h2>
      <h4 className="card-title fw-bold">Estudiante Tecnico Ciberseguridad</h4>
      <p className="card-text text-muted mb-3">Instituto IPG</p>

      <hr />
      <h4 className="card-title fw-bold">Habilidades</h4>
      <ul className="list-unstyled text-start mb-3">

        {/*key es obligatorio en react cuando se renderizan listas profesora*/}
        {habilidades.map((h) => (
          <BotonHability key={h.nombre} {...h} isDark={isDark} />
        ))}
      </ul>

      <span className="badge bg-primary fs-6">
        Tema actual: {isDark ? "Oscuro 🌙" : "Claro ☀️"}
      </span>

    </div>
  );
}

export default ThemeCard;