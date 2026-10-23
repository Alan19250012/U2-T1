// Funciones que hacen los calculos de la cotizacion

function calcularCostoPaginas(paginas, precioPagina) {
  return paginas * precioPagina;
}

function calcularCostoAdicional(horas, precioHora) {
  return horas * precioHora;
}

function calcularSubtotal(costoPaginas, costoAdicional) {
  return costoPaginas + costoAdicional;
}

function calcularIva(subtotal) {
  return subtotal * 0.16;
}

function calcularTotal(subtotal, iva) {
  return subtotal + iva;
}

// Esta funcion junta todos los calculos y devuelve un objeto con el resultado
function generarCotizacion(datos) {
  const costoPaginas = calcularCostoPaginas(datos.paginas, datos.precioPagina);
  const costoAdicional = calcularCostoAdicional(datos.horas, datos.precioHora);
  const subtotal = calcularSubtotal(costoPaginas, costoAdicional);
  const iva = calcularIva(subtotal);
  const total = calcularTotal(subtotal, iva);

  return {
    cliente: datos.cliente,
    proyecto: datos.proyecto,
    costoPaginas: costoPaginas,
    costoAdicional: costoAdicional,
    subtotal: subtotal,
    iva: iva,
    total: total
  };
}

// Muestra la cotizacion dentro del elemento con id "contenidoResultado"
function mostrarCotizacion(cotizacion) {
  const contenedor = document.getElementById("contenidoResultado");
  const seccion = document.getElementById("resultado");

  contenedor.innerHTML = "";
  contenedor.innerHTML =
    "<p><strong>Cliente:</strong> " + cotizacion.cliente + "</p>" +
    "<p><strong>Proyecto:</strong> " + cotizacion.proyecto + "</p>" +
    "<p><strong>Costo de paginas:</strong> $" + cotizacion.costoPaginas.toFixed(2) + "</p>" +
    "<p><strong>Costo adicional:</strong> $" + cotizacion.costoAdicional.toFixed(2) + "</p>" +
    "<p><strong>Subtotal:</strong> $" + cotizacion.subtotal.toFixed(2) + "</p>" +
    "<p><strong>IVA (16%):</strong> $" + cotizacion.iva.toFixed(2) + "</p>" +
    '<p class="total"><strong>Total:</strong> $' + cotizacion.total.toFixed(2) + "</p>";

  seccion.classList.remove("oculto");
}

// Guarda la ultima cotizacion en localStorage
function guardarCotizacion(cotizacion) {
  localStorage.setItem("ultimaCotizacion", JSON.stringify(cotizacion));
}

// Recupera la ultima cotizacion guardada, si existe
function cargarUltimaCotizacion() {
  const guardada = localStorage.getItem("ultimaCotizacion");
  if (guardada) {
    const cotizacion = JSON.parse(guardada);
    mostrarCotizacion(cotizacion);
  }
}

// Evento submit del formulario
document.getElementById("formularioCotizacion").addEventListener("submit", function (evento) {
  evento.preventDefault();

  const datos = {
    cliente: document.getElementById("cliente").value,
    proyecto: document.getElementById("proyecto").value,
    paginas: Number(document.getElementById("paginas").value),
    precioPagina: Number(document.getElementById("precioPagina").value),
    horas: Number(document.getElementById("horas").value),
    precioHora: Number(document.getElementById("precioHora").value)
  };

  const cotizacion = generarCotizacion(datos);
  guardarCotizacion(cotizacion);
  mostrarCotizacion(cotizacion);
});

// Al cargar la pagina, se muestra la ultima cotizacion guardada
cargarUltimaCotizacion();
