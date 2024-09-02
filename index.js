
let totalPresupuesto = 0;
let continuar = true;
let componentes = [
    { nombre: "Procesador", precio: 200 },
    { nombre: "Placa base", precio: 150 },
    { nombre: "Memoria RAM", precio: 80 }
];
let preciosAdicionales = [
    { nombre: "Fuente de poder", precio: 50 },
    { nombre: "Disco duro", precio: 100 },
    { nombre: "Tarjeta gráfica", precio: 300 }
];
function calcularTotal(componentesSeleccionados) {
    let total = 0;
    for (let i = 0; i < componentesSeleccionados.length; i++) {
        total += componentesSeleccionados[i].precio;
    }
    return total;
}
function agregarComponentes() {
    let componentesSeleccionados = [];
    let componentesAdicionalesSeleccionados = [];
    
    while (continuar) {
        let componente = prompt("Ingrese el nombre del componente (Procesador, Placa base, Memoria RAM) o 'salir' para terminar:");
        
        if (componente.toLowerCase() === 'salir') {
            continuar = false;
        } else {
            let encontrado = componentes.find(item => item.nombre.toLowerCase() === componente.toLowerCase());
            if (encontrado) {
                componentesSeleccionados.push(encontrado);
                alert(`Agregado: ${encontrado.nombre} - Precio: $${encontrado.precio}`);
            } else {
                alert("Componente no encontrado. Por favor, inténtelo de nuevo.");
            }
        }
    }
    continuar = true;
    while (continuar) {
        let componenteAdicional = prompt("Ingrese un componente adicional (Fuente de poder, Disco duro, Tarjeta gráfica) o 'salir' para terminar:");
        
        if (componenteAdicional.toLowerCase() === 'salir') {
            continuar = false;
        } else {
            let adicionalEncontrado = preciosAdicionales.find(item => item.nombre.toLowerCase() === componenteAdicional.toLowerCase());
            if (adicionalEncontrado) {
                componentesAdicionalesSeleccionados.push(adicionalEncontrado);
                alert(`Agregado: ${adicionalEncontrado.nombre} - Precio: $${adicionalEncontrado.precio}`);
            } else {
                alert("Componente adicional no encontrado. Por favor, inténtelo de nuevo.");
            }
        }
    }
    totalPresupuesto = calcularTotal(componentesSeleccionados) + calcularTotal(componentesAdicionalesSeleccionados);
    alert(`El total de su presupuesto es: $${totalPresupuesto}`);
}
agregarComponentes();
