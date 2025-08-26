let totalCompra = 0 

while (confirm("¿Desea agregar un producto al carrito")) {
    let valorProducto = prompt("ingrese el valor del producto");

    valorProducto = parseFloat(valorProducto);

    if(!isNaN(valorProducto) && valorProducto>0) {
        totalCompra += valorProducto;
        alert(`Producto agregado ✅. Subtotal actual: $${totalCompra.toFixed(2)}`);
    } else {
        alert("❌ Valor inválido. Debe ser un número mayor que 0.");
    }    
}

alert(`🛒 El total de su compra es: $${totalCompra.toFixed(2)}`);