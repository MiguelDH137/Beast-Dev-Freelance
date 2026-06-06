# AGENTS.md — Contexto y Reglas para Agentes IA

> Landing Page oficial de **Beasts.dev Freelance**. Este documento define el contexto de negocio, el stack tecnológico estricto y las reglas de implementación que cualquier IA debe seguir al desarrollar o mantener este repositorio. Para los tokens visuales (colores, tipografía, componentes) consulta [`DESIG.md`](./DESIG.md).

---

## 1. Contexto del Proyecto

- **Marca:** Beasts.dev Freelance
- **Propósito:** Captar clientes interesados en la creación de Landing Pages mediante un modelo de **suscripción mensual** con barrera de entrada baja: una **Demostración Gratuita** sin compromiso.
- **Flujo de Conversión Único:** La página **no utiliza pasarelas de pago ni formularios externos**. Todos los botones de llamado a la acción (CTA) del sitio —ubicados en Hero, Metodología y las tarjetas de precios— redirigen al usuario mediante **scroll suave (Smooth Scroll)** directamente a la sección final de Contacto (id `#contacto`).
- **Público Objetivo:** Emprendedores, marcas personales y empresas que buscan digitalizarse con alta velocidad y conversión.

---

## 2. Stack Tecnológico Estricto

Para garantizar la máxima velocidad de carga y mantener el código ligero, **está estrictamente prohibido instalar frameworks pesados o librerías externas** (Formik, React-Bootstrap, GSAP, AOS, etc.). Ver excepciones aprobadas en §6.8.

| Capa | Tecnología |
|---|---|
| Marcado | HTML5 semántico |
| Framework | React.js (componentes funcionales + Hooks nativos) |
| Lógica | JavaScript (ES6+) |
| Estilos | Tailwind CSS (clases de utilidad exclusivamente) |
| Tipografía | Google Fonts (Montserrat) cargado por `<link>` |

Cualquier comportamiento interactivo (modales, toggles, navegación, smooth scroll) debe resolverse con **React** (`useState`, `useEffect`, `useRef`) y **clases de Tailwind CSS**. Excepción: ver §6.8 para animaciones declarativas aprobadas.

---

## 3. Estructura de Secciones (orden obligatorio)

La landing es una **Single Page Application** con las siguientes secciones, en este orden:

1. **Navbar** — Navegación minimalista (Inicio, Nosotros, Redes) + botón CTA de conversión.
2. **Hero Section** — H1 *"¡Impulsa tu Marca con una Landing Page Profesional!"*, subtítulo persuasivo, mockup responsivo (Laptop + Smartphone) y CTA principal `¡Solicita tu Demo Gratis Aquí!`.
3. **Features Bar** — Fila horizontal de micro-características: Diseño Moderno · 100% Optimizado · Conversión y Velocidad · Pro Domain · 7 Days Support.
4. **Metodología (El Gancho)** — Título *"Tu Web Primero, Los Pagos Después"* con 3 pasos: **1. Consulta → 2. Desarrollo → 3. Lanzamiento**.
5. **Planes de Rendimiento (Pricing)** — Tres tarjetas con suscripción mensual:
   - **Plan €25/mes** — Single Landing Page, Mobile Optimized, Basic SEO.
   - **Plan €35/mes (Most Popular)** — Multi-page Sitio, Advanced SEO tactics, CMS Integration, Priority Support.
   - **Plan €55/mes** — Everything in Pro, AI Chatbot Integration, Dynamic Conversion.
6. **Proyectos Realizados (Portafolio)** — Grid de proyectos: TechNova Solutions, Aura Lifestyle, Nexus AI Platform. Tarjetas con efecto hover.
7. **Sobre Nosotros** — Humanización de la marca con el logotipo de las tres bestias (Lobo, Zorro, Dálmata) y copy orientado a ingeniería de software de alto rendimiento.
8. **CTA Final (Contacto)** — id `#contacto`. Título *"¡Hagamos Realidad tu Próxima Página Web!"*. Dos tarjetas de redirección directa: **Instagram** y **TikTok**.
9. **Footer** — Enlaces legales y firma de marca.

> ⚠️ Toda sección debe estar envuelta en un contenedor con `id` semántico (`#hero`, `#metodologia`, `#pricing`, `#portafolio`, `#nosotros`, `#contacto`) para que el smooth scroll funcione correctamente.

---

## 4. Convenciones de Código y Estructura de Carpetas

### 4.1 Organización de archivos

```
src/
├── assets/           # Imágenes, logos, mockups, iconos SVG
│   ├── logo/         # Variantes del logo de las tres bestias
│   ├── mockups/      # Mockups 3D (laptop, smartphone)
│   └── icons/        # Íconos de features, redes sociales
├── components/       # Componentes reutilizables (átomos/moléculas)
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FeatureCard.jsx
│   ├── PricingCard.jsx
│   ├── PortfolioCard.jsx
│   └── SocialCard.jsx
├── sections/         # Bloques de la landing (un archivo por sección)
│   ├── Hero.jsx
│   ├── FeaturesBar.jsx
│   ├── Methodology.jsx
│   ├── Pricing.jsx
│   ├── Portfolio.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── hooks/            # Hooks personalizados
│   └── useSmoothScroll.js
├── App.jsx           # Composición de secciones
├── main.jsx          # Entry point
└── index.css         # Directivas de Tailwind (@tailwind base/components/utilities)
```

### 4.2 Convenciones de naming

- **Componentes:** PascalCase (`PricingCard.jsx`).
- **Hooks:** camelCase con prefijo `use` (`useSmoothScroll.js`).
- **Constantes:** UPPER_SNAKE_CASE para valores fijos (precios, IDs de anclaje).
- **Funciones/variables:** camelCase.
- **IDs de sección:** kebab-case en español (`#sobre-nosotros`, `#planes`).
- **Clases Tailwind:** seguir el orden `layout → spacing → sizing → typography → color → effects`.

### 4.3 Buenas prácticas

- Componentes funcionales con arrow functions y props desestructuradas.
- Sin `any` ni tipado dinámico innecesario (no se usa TypeScript salvo cambio explícito del equipo).
- Sin `console.log` ni código comentado en commits.
- Sin archivos muertos ni imports sin uso.
- Evitar inline styles; usar siempre clases de Tailwind.

---

## 5. Comandos de Desarrollo

Comandos estándar del stack (ajustar `package.json` al inicializar el proyecto con Vite + React + Tailwind):

| Comando | Descripción |
|---|---|
| `npm install` | Instala dependencias (solo las del template: react, react-dom, tailwindcss). |
| `npm run dev` | Levanta el servidor de desarrollo (por defecto en `http://localhost:5173`). |
| `npm run build` | Genera el build de producción en `/dist`. |
| `npm run preview` | Sirve el build de producción localmente para validación final. |
| `npm run lint` | Ejecuta ESLint sobre el código fuente. |

> 🚫 **No instalar** paquetes adicionales sin aprobación explícita del equipo.

---

## 6. Reglas de Implementación

1. **Cero dependencias nuevas.** Toda interacción se resuelve con React + Tailwind. Excepción: ver §6.8.
2. **Mobile-first obligatorio.** Diseñar primero para móvil y escalar con breakpoints `sm`, `md`, `lg`, `xl`.
3. **Smooth Scroll funcional.** Todos los CTAs del sitio deben llevar a `#contacto` con desplazamiento suave. Implementar con `scroll-behavior: smooth` en CSS global **o** con un hook `useSmoothScroll` que intercepte los clics en anchors internos.
4. **Copy en español.** Tono persuasivo, profesional y directo. Respetar la maqueta textual de la sección 3.
5. **Dark mode permanente.** No se contemplan temas claros; consultar paleta en `DESIG.md`.
6. **Accesibilidad básica:** etiquetas `alt` en imágenes, `aria-label` en botones solo con ícono, contraste suficiente en textos (`#a1a1aa` sobre `#131313` es el mínimo aceptable, preferir `#ffffff` para cuerpo principal).
7. **Rendimiento:** lazy load de imágenes pesadas (mockups), evitar re-renders innecesarios con `useMemo`/`useCallback` solo cuando aporten valor real.

### 6.8 Excepciones aprobadas de animación

Por aprobación explícita del equipo, las siguientes librerías están **excepcionalmente permitidas** en este proyecto, aunque §2 y §6.1 las prohibirían por defecto. La aprobación es limitada a estos tres paquetes y al alcance descrito; cualquier ampliación requiere nueva aprobación.

| Librería              | Tamaño gz | Propósito autorizado                                                                 |
| --------------------- | --------- | ------------------------------------------------------------------------------------ |
| `motion`              | ~12-16 kB | Animaciones declarativas en React: `whileInView`, parallax, springs, `AnimatePresence` |
| `lenis`               | ~5 kB     | Smooth scroll premium (reemplaza `scroll-behavior: smooth` nativo en CSS)            |
| `@number-flow/react`  | ~5 kB     | Counters numéricos animados (Methodology 01/02/03)                                    |

**Restricciones de uso**:
- `motion` solo donde CSS keyframes + `IntersectionObserver` no son suficientes.
- `lenis` reemplaza completamente el smooth scroll nativo; no se combina con `scroll-behavior: smooth` (quitar la directiva CSS de `index.css`).
- `@number-flow/react` solo para counters numéricos; para texto se usa `motion`.
- El bundle gzipped total no debe superar **100 kB** (baseline sin deps de animación: ~55 kB → tope: +45 kB).
- Cualquier nueva librería de animación o efecto requiere aprobación explícita y actualización de esta sección.

**Coordinación con accesibilidad**:
- Toda la app se envuelve en `<MotionConfig reducedMotion="user">` para que `motion` respete automáticamente la preferencia del sistema operativo.
- Lenis debe detenerse (`lenis.stop()`) si la media query `prefers-reduced-motion: reduce` está activa.
- El `MagneticButton` no afecta a dispositivos touch (el listener `onMouseMove` no se dispara en touch).

---

## 7. Checklist de Verificación Final

Antes de dar por terminada cualquier entrega, el agente debe validar:

- [ ] Las 9 secciones renderizan en el orden establecido.
- [ ] Todos los CTAs (Hero, Metodología, Pricing) hacen smooth scroll a `#contacto`.
- [ ] La página es 100% responsive en mobile, tablet y desktop (sin scroll horizontal, sin overflow).
- [ ] No se han añadido dependencias nuevas a `package.json`.
- [ ] La paleta y tipografía coinciden con `DESIG.md`.
- [ ] El logo de las tres bestias aparece en Navbar y/o Sobre Nosotros.
- [ ] Las tres tarjetas de pricing muestran precios €25 / €35 (Most Popular) / €55 con el plan destacado con borde y glow.
- [ ] El grid de portafolio muestra los 3 proyectos (TechNova, Aura, Nexus AI) con hover de borde naranja.
- [ ] Las dos tarjetas sociales de Instagram y TikTok son clicables y apuntan a los perfiles oficiales.
- [ ] No hay errores ni warnings en la consola del navegador.
- [ ] No hay `console.log`, código comentado ni archivos muertos.
- [ ] El copy está 100% en español, con tono persuasivo y profesional.
- [ ] `npm run build` se completa sin errores y el bundle JS gzipped no supera 100 kB.
- [ ] `npm run lint` pasa sin warnings.
- [ ] Si está activa la media query `prefers-reduced-motion: reduce`, todas las animaciones de `motion` y Lenis se neutralizan automáticamente.

---

## 8. Referencias

- **Sistema de diseño completo:** [`DESIG.md`](./DESIG.md)
- **Repositorio:** [Beast-Dev-Freelance](.)
