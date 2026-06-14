#  TrabajoFrontEnd — Cambiador de Tema

Aplicación web desarrollada con **React + Vite** que muestra una tarjeta de perfil con la opción de cambiar entre modo claro y modo oscuro.

---

##  ¿Qué hace la aplicación?

- Muestra una tarjeta de perfil con nombre y habilidades.
- Permite alternar entre **modo claro ** y **modo oscuro ** con un botón.
- El cambio de tema aplica a toda la página usando clases CSS condicionales.
- Cada habilidad es un botón interactivo con un popover informativo al hacer clic aparece y al volver hacer click desaparece.
- El estado del tema claro oscuro se maneja con el hook `useState` de React.

---

##  Tecnologías utilizadas

- [React](https://react.dev/) — biblioteca de UI
- [Vite](https://vitejs.dev/) — bundler y servidor de desarrollo
- [Bootstrap 5](https://getbootstrap.com/) — estilos y diseño responsivo

---

##  Estructura del proyecto

```
src/
├── App.jsx                    # Componente principal, maneja el estado del tema
├── App.css                    # Transición suave entre temas
├── data/
│   └── habilidades.js         # Array de datos de habilidades
└── components/
    ├── ThemeCard.jsx          # Tarjeta de perfil
    └── BotonHability.jsx      # Botón individual con popover por habilidad
```

---

##  Instalación y ejecución

### Requisitos previos
- Node.js >= 18
- npm >= 9

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/ManuelMiri/PROGRAMACION-FRONT-END.git
cd PROGRAMACION-FRONT-END

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

Luego abre tu navegador en `http://localhost:5173`

---

##  Demostracion en linea

[https://ManuelMiri.github.io/PROGRAMACION-FRONT-END/](https://ManuelMiri.github.io/PROGRAMACION-FRONT-END/)

---

## 🎨 Decisiones de diseño

- **Bootstrap 5:** Se usó para el diseño responsivo, adaptándose a móvil, tablet y escritorio con el sistema de grilla `col-12 col-sm-8 col-md-6 col-lg-4`.
- **Componentes separados:** `App.jsx` maneja el estado; `ThemeCard.jsx` muestra la tarjeta; `BotonHability.jsx` es reutilizable para cada habilidad.
- **Datos separados:** Las habilidades están en `data/habilidades.js`, separadas de la lógica visual.
- **Popovers:** Cada habilidad muestra información adicional al hacer clic, usando Bootstrap JS y el hook `useRef`.
- **Transición:** Se usa `transition` en CSS para que el cambio de tema sea suave.