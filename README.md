# Brief de Proyecto Web — Partido Higuerillas

## 1. Sobre este documento

Este `README.md` es el informe/brief de proyecto para el desarrollador web. Su objetivo es dar todo el contexto de negocio, branding y requerimientos visuales necesarios para adaptar la **plantilla base de HTML** ya entregada.

Ya se te dejó, por separado, un **prompt inicial** con las instrucciones para adaptar la plantilla al negocio. Este documento complementa ese prompt: aquí encontrarás la información del negocio, el branding a aplicar y los requerimientos visuales obligatorios.

> **Importante:** este documento **no define la estructura de secciones** de la página. La estructura ya está dada por la plantilla base y debe respetarse tal cual.

## 2. Tipo de proyecto

**Landing page** de presentación de marca, orientada a dar a conocer el negocio y dirigir a los usuarios a sus canales de contacto (Facebook y teléfono).

## 3. Información del negocio

Toda la información disponible proviene de dos fuentes: la carpeta `imagenes/` (que contiene únicamente el archivo del logo, `partido higerillas.jpeg`) y los datos aportados directamente por el cliente. No se cuenta con más material (sin fotos adicionales, sin documentos, sin folletos).

| Dato | Valor |
|---|---|
| **Nombre del negocio** | Partido Higuerillas |
| **Rubro** | Transmisión de eventos en vivo |
| **Contacto (Facebook)** | Aurelio Cruz |
| **Teléfono** | 241 112 7553 |
| **Dirección** | No disponible — no se cuenta con este dato |
| **Horarios** | No disponible — no se cuenta con este dato |
| **Servicios/productos** | Transmisión en vivo de eventos (es la única descripción del servicio con la que se cuenta) |

**Nota sobre datos faltantes:** no hay dirección, horarios ni un listado detallado de servicios. No se debe inventar esta información. Si la plantilla requiere estos campos, usar textos genéricos de marcador (placeholder) o dejarlos pendientes hasta que el cliente los confirme.

**Lectura del logo:** el emblema incluye dos gallos flanqueando una figura central, lo que podría sugerir un vínculo con eventos del ámbito de peleas de gallos/palenques. Esto **no fue confirmado explícitamente por el cliente**, por lo que se deja como referencia visual únicamente y no debe usarse como afirmación textual en la web sin validarlo antes.

## 4. Branding (a partir del logo)

El único activo de marca disponible es el logo (`imagenes/partido higerillas.jpeg`): un emblema circular estilo sello/moneda grabada, en escala de grises, con el texto "PARTIDO HIGUERILLAS" en arco superior, una figura central femenina con sombrero y alas, dos gallos laterales y las iniciales "J & J" en la parte inferior.

### Paleta de colores

El logo es monocromático (negro, blancos y grises de la ilustración grabada). A partir de esos tonos, y para cumplir con el estilo premium/corporativo exigido, se define la siguiente paleta:

| Uso | Color | HEX |
|---|---|---|
| Base / fondo principal | Negro profundo | `#0B0B0C` |
| Superficie secundaria | Grafito | `#1E1E20` |
| Detalle / líneas de grabado | Plata | `#A8A8A8` |
| Texto claro / fondo alterno | Blanco hueso | `#F4F3EF` |
| Acento premium | Dorado | `#C9A227` |

El dorado es un color de acento (no extraído literalmente del logo, que es blanco y negro) recomendado para reforzar la lectura de "sello/emblema" en clave premium, típico de este tipo de ilustraciones grabadas.

### Tipografía sugerida

- **Titulares:** una fuente serif de estilo grabado/clásico (ej. *Cinzel* o *Playfair Display*), en línea con el carácter de sello/moneda del logo.
- **Cuerpo de texto:** una fuente sans-serif limpia y moderna (ej. *Inter* o *Montserrat*), que aporte el balance minimalista y corporativo.

### Identidad visual

Fondo predominantemente oscuro (negro/grafito), con el logo y detalles en plata/blanco, y el dorado reservado para acentos puntuales (botones, líneas divisorias, hover states, íconos). El resultado debe leerse como un sello de marca elegante, no como una ilustración vintage suelta.

## 5. Estilo visual obligatorio

- Estilo **premium, enterprise y corporativo** de marca.
- Nivel **big tech**: elegante y a la vez minimalista.

## 6. Efectos y animaciones requeridos

- Efectos visuales y **animaciones de scroll**.
- **Pantalla de carga (preloader)** con spinner + logo del negocio.
- Animaciones en el **título del hero**: efecto máquina de escribir, cambio de color en las letras u otros efectos tipográficos.

## 7. Instrucciones sobre assets

- El logo (`imagenes/partido higerillas.jpeg`) viene **con fondo** (fondo negro sólido detrás del sello circular). Debe **removerse el fondo** antes de usarlo, de forma que quede el emblema circular con transparencia, listo para colocarse sobre cualquier superficie del sitio (incluyendo el preloader).
- No hay más imágenes ni documentos disponibles del negocio en la carpeta `imagenes/`: es el único archivo provisto. Cualquier otra imagen necesaria (fondos, íconos, fotos de eventos) deberá resolverse con recursos genéricos/placeholder hasta que el cliente entregue material adicional.

## 8. Nota para el desarrollador

Podés iterar sobre el proyecto con Claude, dándole instrucciones las veces que sea necesario, hasta lograr el resultado deseado. No hace falta resolver todo en una sola pasada: ajustá, revisá y volvé a pedir cambios de forma incremental.

## 9. Checklist de trabajo

- [ ] Remover el fondo del logo (`imagenes/partido higerillas.jpeg`) y dejarlo con transparencia.
- [ ] Aplicar la paleta de colores definida (negro `#0B0B0C`, grafito `#1E1E20`, plata `#A8A8A8`, blanco hueso `#F4F3EF`, dorado `#C9A227`).
- [ ] Implementar la tipografía sugerida (serif de estilo grabado para titulares + sans-serif moderna para cuerpo).
- [ ] Aplicar el estilo premium/enterprise/big tech en toda la página, sobre la estructura de la plantilla base.
- [ ] Implementar animaciones de scroll.
- [ ] Implementar preloader con spinner + logo del negocio.
- [ ] Implementar animación del título del hero (typewriter, cambio de color u otro efecto tipográfico).
- [ ] Completar los datos de contacto (Facebook de Aurelio Cruz, teléfono 241 112 7553).
- [ ] Dejar pendientes/placeholder los campos sin información (dirección, horarios, detalle de servicios) hasta confirmarlos con el cliente.
- [ ] Iterar con Claude Code las veces que sea necesario hasta lograr el resultado final.
