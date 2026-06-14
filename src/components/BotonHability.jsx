// Importamos useEffect para ejecutar codigo cuando el componente se monta
import { useEffect, useRef } from "react";

// Componente que recibe 4 props
function BotonHability({ emoji, nombre, info, isDark }) {
  
  // Creamos una referencia al botón para que Bootstrap pueda encontrarlo profesora
  const btnRef = useRef(null);

  useEffect(() => {
    // Inicializamos el popover de Bootstrap sobre el botón referenciado
    const popover = new window.bootstrap.Popover(btnRef.current, {
      trigger: "click",
      placement: "top",
    });
    return () => popover.dispose();
  }, []);

  return (
    <li className="py-1">
      <button
        ref={btnRef}
        type="button"
        // Cambia la clase según el tema: blanco en oscuro, gris en claro
        className={`btn btn-sm w-100 text-start ${isDark ? "btn-outline-light" : "btn-outline-secondary"}`}
        data-bs-toggle="popover"
        title={nombre}
        data-bs-content={info}
      >
        {emoji} {nombre}
      </button>
    </li>
  );
}

export default BotonHability;