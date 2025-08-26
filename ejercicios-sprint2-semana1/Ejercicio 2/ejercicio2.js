const contraseñaCorrecta = "Juancho214"

let contraseñaUsuario = prompt("por favor, ingresa tu contraseña:");

if (contraseñaCorrecta === contraseñaUsuario) {
    alert("¡Acceso Concedido!");
} else if (contraseñaUsuario === ""){
    alert("No ingreso ninguna contraseña"); 
} else {
    alert("Contraseña incorrecta. Acceso Denegado");
}