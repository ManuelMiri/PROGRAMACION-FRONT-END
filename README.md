# 🌙 TrabajoFront — Cambiador de Tema

Aplicación web desarrollada con **React + Vite** que muestra una tarjeta de perfil con la opción de cambiar entre modo claro y modo oscuro.

---

## 🚀 ¿Qué hace la aplicación?

- Muestra una tarjeta de perfil con nombre, rol y habilidades.
- Permite alternar entre **modo claro ☀️** y **modo oscuro 🌙** con un botón.
- El cambio de tema aplica a toda la página usando clases CSS condicionales.
- El estado del tema se maneja con el hook `useState` de React.

---

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/) — biblioteca de UI
- [Vite](https://vitejs.dev/) — bundler y servidor de desarrollo
- CSS propio — estilos sin frameworks externos

---

## 📁 Estructura del proyecto

```
src/
├── App.jsx              # Componente principal, maneja el estado del tema
├── App.css              # Estilos generales y variables de tema
└── components/
    └── ThemeCard.jsx    # Componente de tarjeta de perfil
```

---

## ⚙️ Instalación y ejecución

### Requisitos previos
- Node.js >= 18
- npm >= 9

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/trabajofront.git
cd trabajofront

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

Luego abre tu navegador en `http://localhost:5173`

---

## 🎨 Decisiones de diseño

- **Paleta:** Azul oscuro (`#1a1a2e`) como base del modo oscuro, gris azulado claro (`#f0f4ff`) para el modo claro.
- **Componentes:** `App.jsx` maneja el estado y la estructura general; `ThemeCard.jsx` es un componente reutilizable que recibe `isDark` como prop.
- **Transición:** Se usa `transition` en CSS para que el cambio de tema sea suave y no brusco.
- **Sin frameworks CSS:** Los estilos son completamente propios para demostrar dominio de CSS.