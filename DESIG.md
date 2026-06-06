# DESIG.md — Sistema de Diseño de Beasts.dev Freelance

> Documento de referencia visual para la landing page. Contiene la paleta de colores, tipografía, componentes y directrices de layout que cualquier implementación debe respetar. Para las reglas de negocio, estructura de secciones y stack técnico consulta [`AGENTS.md`](./AGENTS.md).

---

## 1. Identidad de Marca

- **Concepto central:** *"Ingeniería de Alto Rendimiento"*. Estética futurista y vanguardista que combina precisión técnica con visuales agresivos y de alta energía.
- **Elementos visuales clave:** Entornos oscuros, acentos naranjas vibrantes, bordes iluminados (glow) y mockups 3D de dispositivos.
- **Logo principal:** El escudo de **las Tres Bestias** (Lobo, Zorro, Dálmata) es la marca de autoridad. Aparece en Navbar y en la sección Sobre Nosotros.
- **Tono visual:** Premium, técnico, enérgico. Nunca infantil ni genérico.

---

## 2. Paleta de Colores (Dark Mode Only)

Toda la landing opera en modo oscuro. **No existe un tema claro.**

| Token | Valor | Uso |
|---|---|---|
| **Primary (Brand)** | `#ff6600` | CTAs principales, estados activos, acentos iluminados. |
| **Surface-Base** | `#131313` | Fondo principal de la página. |
| **Surface-Container** | `#1c1b1b` | Fondo de tarjetas y contenedores de sección. |
| **Accent-Glow (intenso)** | `rgba(255, 102, 0, 0.3)` | `box-shadow` y gradientes radiales de acento. |
| **Accent-Glow (sutil)** | `rgba(255, 102, 0, 0.1)` | Glows secundarios, halos de íconos. |
| **Text-High** | `#ffffff` | Headlines y cuerpo principal. |
| **Text-Medium** | `#a1a1aa` | Subtítulos, copy secundario, labels. |
| **Border-Subtle** | `rgba(255, 255, 255, 0.1)` | Bordes de tarjetas y navbar. |
| **Border-Active** | `#ff6600` | Borde iluminado en hover de portafolio y plan popular. |

### 2.1 Configuración recomendada en `tailwind.config.js`

```js
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#ff6600',
        'primary-light': '#ff8c42',
      },
      surface: {
        base: '#131313',
        container: '#1c1b1b',
      },
    },
  },
}
```

---

## 3. Tipografía

- **Familia:** **Montserrat** (Google Fonts), cargada vía `<link>` en `index.html`.
- **Pesos disponibles:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold), 900 (black).

| Nivel | Peso | Tamaño sugerido | Uso |
|---|---|---|---|
| H1 (Hero) | 900 (Black) | `text-5xl` a `text-7xl` | Titular principal. |
| H2 (Secciones) | 800 (ExtraBold) | `text-3xl` a `text-5xl` | Títulos de sección. |
| H3 (Tarjetas) | 700 (Bold) | `text-xl` a `text-2xl` | Títulos de tarjetas. |
| Subtítulo / Label | 500–600 (Medium/Semibold) | `text-base` a `text-lg` | Subtítulos, badges. |
| Body | 400 (Regular) | `text-base` | Cuerpo, descripciones. |

**Reglas tipográficas:**
- `line-height: 1.6` en body para legibilidad.
- `tracking-tight` en headlines para impacto.
- `font-bold` y `font-black` de Tailwind para los pesos altos.
- Solo **una** familia tipográfica en todo el sitio (Montserrat).

---

## 4. Componentes Base

### 4.1 Navbar (Sticky)

- **Fondo:** `bg-surface-base/70 backdrop-blur-xl` (efecto glassmorphism).
- **Borde inferior:** `1px solid rgba(255, 255, 255, 0.1)`.
- **Contenido:** Logo de las tres bestias a la izquierda · enlaces de navegación (Inicio, Nosotros, Redes) · botón CTA de conversión a la derecha.
- **Comportamiento:** `sticky top-0 z-50`. Se mantiene visible al hacer scroll.

### 4.2 Botones (CTA Primario)

- **Gradiente:** `linear-gradient(to right, #ff6600, #ff8c42)` (de naranja a naranja claro).
- **Forma:** `rounded-full` o `rounded-lg` según contexto.
- **Padding:** `px-6 py-3` (móvil) / `px-8 py-4` (desktop).
- **Tipografía:** `font-bold text-white`.
- **Hover:** `hover:scale-105` + `hover:shadow-[0_0_20px_rgba(255,102,0,0.5)]` (glow naranja).
- **Transición:** `transition-all duration-300`.

### 4.3 Feature Cards

- **Fondo:** `bg-surface-container`.
- **Borde:** sutil blanco, `border border-white/10`.
- **Íconos:** naranja `#ff6600` con halo `box-shadow: 0 0 12px rgba(255,102,0,0.3)`.
- **Layout:** grid horizontal en desktop (`md:grid-cols-5`), apilados o con scroll horizontal en móvil.

### 4.4 Pricing Tables

- **Estructura:** 3 tarjetas lado a lado en desktop, apiladas en móvil.
- **Tarjeta base:** `bg-surface-container border border-white/10 rounded-2xl p-8`.
- **Plan "Most Popular" (€35/mes):**
  - Borde persistente: `border-2 border-brand-primary`.
  - Glow: `shadow-[0_0_40px_rgba(255,102,0,0.4)]`.
  - Badge superior: *"Más Popular"* con `bg-brand-primary text-white`.
- **Checkmarks de features:** color `#ff6600` con un tick SVG o el ícono ✓ de Tailwind.
- **Botón CTA:** mismo estilo que 4.2, ubicado al pie de cada tarjeta.

### 4.5 Portfolio Grid

- **Layout:** grid de 2-3 columnas en desktop (`md:grid-cols-2 lg:grid-cols-3`), 1 columna en móvil.
- **Tarjeta base:** `bg-surface-container rounded-2xl overflow-hidden`.
- **Imagen:** mockup 3D de alta calidad del proyecto, `aspect-video` o similar.
- **Hover state:**
  - Borde iluminado: `hover:border-brand-primary` con transición `transition-all duration-300`.
  - Botón *"Ver Demo en Vivo"* aparece superpuesto con `opacity-0 group-hover:opacity-100`.
- **Proyectos a incluir:**
  1. **TechNova Solutions** — Landing corporativa premium oscura.
  2. **Aura Lifestyle** — E-commerce / catálogo minimalista.
  3. **Nexus AI Platform** — Landing con integración de agente IA.

### 4.6 Social Conversion Cards (Instagram / TikTok)

- **Fondo:** `bg-surface-container`.
- **Borde:** `border border-white/10 rounded-2xl`.
- **Ícono:** logo oficial de la red, blanco o naranja `#ff6600`, tamaño `w-12 h-12` o mayor.
- **Texto:** descripción breve del canal (ver copy en `AGENTS.md` sección 3.8).
- **Botón de acción:** CTA con mismo gradiente naranja, abre el perfil oficial en nueva pestaña (`target="_blank" rel="noopener noreferrer"`).
- **Hover:** `hover:border-brand-primary` + `hover:shadow-[0_0_30px_rgba(255,102,0,0.4)]` + `hover:scale-[1.02]`.
- **Touch targets grandes:** padding generoso, mínimo 56px de alto en el botón.

---

## 5. Layout & Spacing

- **Estrategia:** **Mobile-first**. Diseñar y validar primero en mobile, luego escalar.
- **Breakpoints de Tailwind:** `sm: 640px` · `md: 768px` · `lg: 1024px` · `xl: 1280px`.
- **Contenedor máximo:** `max-w-7xl` (1280px) centrado con `mx-auto px-6`.
- **Padding vertical por sección:** `py-20` (móvil) / `py-32` (desktop).
- **Grids:** 2 o 3 columnas en desktop según el componente (ver detalles arriba).
- **Divisores de sección:** sutiles — gradientes oscuros (`bg-gradient-to-b from-surface-base to-surface-container`) o líneas `border-t border-white/5`. Evitar separadores duros.
- **Jerarquía visual:** cada sección debe tener un H2 claro, un subtítulo opcional y contenido diferenciado por espaciado, no por líneas decorativas.

---

## 6. Guía Visual por Sección

### 6.1 Hero Section

- **Fondo:** gradiente oscuro/negro con líneas naranjas sutiles (pueden ser SVG o CSS).
- **Logotipo:** el logo de las tres bestias visible pero elegante, en la parte superior o superpuesto.
- **H1:** *"¡Impulsa tu Marca con una Landing Page Profesional!"* — Montserrat 900, `text-5xl md:text-7xl`, `text-white`.
- **Subtítulo:** copy persuasivo sobre páginas modernas, rápidas y optimizadas para móviles.
- **CTA principal:** botón grande naranja `¡Solicita tu Demo Gratis Aquí!`.
- **Mockup 3D:** composición de laptop + smartphone mostrando una landing en funcionamiento, ubicada a la derecha en desktop y debajo del texto en móvil.

### 6.2 Features Bar

- 5 micro-features en fila horizontal (desktop) o grid compacto (móvil):
  1. **Diseño Moderno**
  2. **100% Optimizado para Móviles**
  3. **Conversión y Velocidad**
  4. **Dominio Profesional (.com, .net, etc.)**
  5. **Soporte 7 días a la semana**
- Cada feature con ícono SVG naranja y label corto.

### 6.3 Metodología (El Gancho)

- **Título:** *"Tu Web Primero, Los Pagos Después"*.
- **Copy:** explica la demo gratuita sin compromiso.
- **3 pasos numerados:** **1. Consulta → 2. Desarrollo → 3. Lanzamiento**. Cada paso con número grande, título y breve descripción.
- **CTA secundario:** *"Quiero ver mi propuesta gratis"*.

### 6.4 Pricing (Planes de Rendimiento)

- 3 tarjetas escalonadas (ver 4.4 para el detalle del plan popular).
- Nombres sugeridos: **Esencial (€25)** · **Profesional (€35, Most Popular)** · **Pro + IA (€55)**.
- Features de cada plan detalladas en `AGENTS.md` sección 3.5.

### 6.5 Portafolio (Casos de Éxito)

- **Título:** *"Casos de Éxito: Proyectos que Impulsan Marcas"*.
- **Subtítulo:** *"Una muestra de las interfaces modernas, dinámicas y de alta conversión que diseñamos para nuestros clientes."*
- **Grid:** 3 proyectos (TechNova, Aura, Nexus AI) con efecto hover (ver 4.5).

### 6.6 Sobre Nosotros

- **Título:** *"El Equipo Detrás de Beasts.dev"*.
- **Copy:** equipo multidisciplinario de devs y diseñadores freelance, combinación de ingeniería de software con diseño de vanguardia, soporte 7 días, metodología transparente.
- **Elemento gráfico:** logo de las tres bestias (Lobo, Zorro, Dálmata) en tamaño prominente, o siluetas estilizadas con filtro oscuro y acentos naranjas. Pequeños íconos con especialidades (Full Stack, UI/UX, Automatizaciones con IA).

### 6.7 Contacto (CTA Final)

- **id:** `#contacto` (anclaje al que apuntan todos los CTAs del sitio).
- **Título:** *"¡Hagamos Realidad tu Próxima Página Web!"*.
- **Subtítulo:** *"No necesitas llenar formularios aburridos. Haz clic en cualquiera de nuestras redes sociales oficiales y escríbenos un mensaje directo para coordinar tu Demostración Gratuita."*
- **Tarjetas:** 2 bloques lado a lado en desktop (apilados en móvil) — Instagram y TikTok (ver 4.6).
- **Texto de cierre (urgencia):** *"Atención disponible los 7 días de la semana. ¡Escríbenos ahora mismo y responderemos a tu idea de negocio de inmediato!"*

---

## 7. Reglas de Estilo Generales

- **Fondo general:** Dark Premium — paleta de negros y grises oscuros profundos, jamás un fondo claro.
- **Acentos:** uso estricto de los tonos naranja vibrante y ámbar definidos arriba. Ningún otro color de acento.
- **Tipografía:** sans-serif moderna, limpia, de alta legibilidad, con variantes de peso marcadas.
- **Transiciones:** `transition-all duration-300` en todos los hovers de tarjetas y botones para mantener una experiencia fluida.
- **Sombras:** priorizar glows naranjas sobre sombras grises genéricas; reservar `shadow-2xl` para casos excepcionales.
- **Bordes:** preferir `border-white/10` para tarjetas base, `border-brand-primary` para estados activos/hover.
- **Espaciado:** generoso y respirado; nunca saturar visualmente una sección.
- **Consistencia:** los mismos tokens (colores, pesos, radios) se usan en todas las secciones, sin variantes ad-hoc.

---

## 8. Referencias

- **Reglas de negocio, stack y estructura:** [`AGENTS.md`](./AGENTS.md)
