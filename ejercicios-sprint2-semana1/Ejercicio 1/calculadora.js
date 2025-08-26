/* const precioBaseSilla = 4500.50;
const tasaIva = 0.21;

let valorIva = precioBaseSilla * tasaIva;
let precioFinal = precioBaseSilla + valorIva;

console.log("Precio Base:", precioBaseSilla);
console.log("IVA", valorIva);
console.log("Precio Final: $", precioFinal);

 */

function calcularPrecioProducto(precioBase, tasaIva) {
    const valorIva = precioBase * tasaIva;
    const precioFinal = precioBase + valorIva;

    return {
        precioBase: precioBase,
        valorIva: valorIva,
        precioFinal: precioFinal
    };
}

const resultado = calcularPrecioProducto(4500.50, 0.21);

console.log("Precio Base:", resultado.precioBase);
console.log("IVA:", resultado.valorIva);
console.log("Precio Final:", resultado.precioFinal)
