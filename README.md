# 🚀 UCR Web Components System

Un moderno, premium y escalable sistema de componentes web nativos, diseñado para el sistema informativo de la Sede Guanacaste de la Universidad de Costa Rica. 

Esta biblioteca ha sido completamente refactorizada para implementar las mejores prácticas de **Web Components modernos** sin necesidad de frameworks externos.

## 🛠 Tecnologías Core

* **Shadow DOM (Open)**: Garantiza una encapsulación total del CSS y estructura interna. Evita conflictos de estilos con el proyecto global y viceversa.
* **HTML Slots**: Permite inyectar contenido dinámico (`Default Slots` y `Named Slots`) en áreas específicas de los componentes, logrando máxima flexibilidad.
* **CSS Custom Properties (Variables)**: La forma moderna de permitir la personalización de temas (colores, fondos, tamaños) desde el exterior sin romper la encapsulación.
* **CSS Parts (`::part`)**: Expone partes internas del Shadow DOM para aplicar estilos profundos y estructurales desde un archivo CSS externo.

---

## 🎨 Guía de Personalización

Dado que todos los componentes utilizan `Shadow DOM`, su CSS interno está aislado. Para modificar su apariencia, puedes utilizar las **CSS Variables** o los **CSS Parts** expuestos.

### 1. Personalización mediante CSS Variables

Puedes cambiar los colores o estilos de manera global directamente sobre el tag del componente:

```css
/* Cambiar el tema global del Flyer */
ucr-flyer {
  --flyer-bg: #111827;           /* Fondo principal */
  --flyer-primary: #8b5cf6;      /* Color de acento primario */
  --flyer-secondary: #0ea5e9;    /* Color de acento secundario */
  --flyer-radius: 32px;          /* Radio de borde redondeado */
  --flyer-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); /* Sombra premium */
  --flyer-text-inverse: #ffffff; /* Texto invertido para contrastes */
}

/* Cambiar el tema del Letrero (SignBoard) */
sign-board {
  --sign-bg: linear-gradient(145deg, #1e1e2f, #151522);
  --sign-radius: 20px;
  --sign-accent: #8b5cf6;
}
```

### 2. Personalización mediante CSS Parts

Si necesitas estilos más específicos (por ejemplo, cambiar el grosor del borde, espaciados internos, etc.), los componentes exponen varias "partes":

```css
/* Añadir un borde blanco al wrapper principal del Flyer */
ucr-flyer::part(wrapper) {
  border: 4px solid rgba(255, 255, 255, 0.1);
}

/* Modificar el estilo del contenedor del logo en el Header */
flyer-header::part(logo-box) {
  transform: scale(1.1);
}

/* Modificar el estilo de la tarjeta QR */
flyer-qr::part(frame) {
  border-radius: 50%; /* Convertir el cuadro en un círculo */
}
```

---

## 🧩 Composición con Slots

Los componentes están diseñados para ser composables. Utilizan la API nativa de `<slot>` para proyectar contenido.

### Ejemplo: Sign Board

En lugar de pasar texto o arrays rígidos, se pueden pasar múltiples `<sign-item>` como hijos, los cuales se inyectan dinámicamente en el slot `"items"` y un slot de pie de página `"footer"`.

```html
<sign-board>
  <sign-item slot="items">Aulas 5, 6, 7</sign-item>
  <sign-item slot="items">Apoyo Informático</sign-item>
  <sign-item slot="items">Servidores</sign-item>
  
  <!-- Sobrescribir el footer por defecto -->
  <span slot="footer">SISTEMA UCR 2026</span>
</sign-board>
```

### Ejemplo: UCR Flyer

El `ucr-flyer` se auto-ensambla con los componentes internos mediante default slots. Si requieres reemplazar alguna pieza completa, simplemente se la inyectas con el atributo `slot="nombre-del-slot"`:

```html
<ucr-flyer>
  <!-- Inyectar un header completamente diferente -->
  <div slot="header" style="background: red; color: white;">
    <h1>ALERTA URGENTE</h1>
  </div>
</ucr-flyer>
```

---

## 🚀 Instalación y Uso Local

1. Asegúrate de estar usando un entorno de servidor web local para evitar problemas con las políticas de CORS de los módulos ES (`import`).
   ```bash
   npx serve src
   ```
2. Abre `http://localhost:3000` en tu navegador.

## 📱 Responsive Design Avanzado

El sistema entero fue programado implementando técnicas modernas CSS (`clamp()`, `min()`, `max()`, `aspect-ratio`), logrando que toda la interfaz se re-dimensione elásticamente y mantenga legibilidad y estética profesional tanto en teléfonos celulares, tablets y monitores ultrawide.
