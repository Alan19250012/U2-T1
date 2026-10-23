# U2 T1 - Sistema de cotizacion de servicios web

Pequeña aplicacion web hecha con HTML, CSS y JavaScript puro (sin frameworks).

## Que hace

- Pide los datos del cliente y del proyecto mediante un formulario.
- Calcula el costo de paginas, el costo adicional por horas, subtotal, IVA y total usando funciones de JavaScript.
- Guarda la ultima cotizacion en `localStorage`.
- Al recargar la pagina, muestra de nuevo la ultima cotizacion.

## Archivos

- `index.html`: estructura del formulario y de la zona de resultado.
- `styles.css`: estilos de la pagina.
- `script.js`: funciones de calculo y manejo del formulario.

## Como usarlo

1. Abre `index.html` en el navegador (doble clic).
2. Llena el formulario.
3. Presiona "Calcular cotizacion".
4. El resultado aparece abajo y queda guardado, asi que al recargar la pagina sigue ahi.

## Calculos

- Costo de paginas = paginas x precio por pagina
- Costo adicional = horas x precio por hora
- Subtotal = costo de paginas + costo adicional
- IVA = subtotal x 0.16
- Total = subtotal + IVA
