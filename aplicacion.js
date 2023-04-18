let carrito = [];


let btnMostrar = document.getElementById("mostrar-btn");
let btnBorrar = document.getElementById("borrar-btn");

function hayProductos() {
  switch (carrito.length) {
    case 0:
      btnMostrar.style.display = "none";
      btnBorrar.style.display = "none";
      break;
    default:
      btnMostrar.style.display = "block";
      btnBorrar.style.display = "block";
  }
}


function cargarUnProducto() {
  const nuevoProducto = new Producto();
  nuevoProducto.nombre = prompt("Escribe el nombre de la pelicula que desea ver: ");
  nuevoProducto.cantidad = Number(prompt("¿Cuantas entradas deseas? "));
  nuevoProducto.sala = prompt("¿en que tipo de sala? 2d, 3d, 4d ");
  nuevoProducto.precio = Number(prompt("indique el precio elegido (500$ 2d, 1000$ 3d, 1500$ 4d) "));

  carrito.push(nuevoProducto);
  console.log("Sus eleciones fuero guardadas correctamente!");
}


const cargarProductos = () => {
  let seguir;
  do {
    cargarUnProducto();
    hayProductos();
    seguir = prompt("¿Desea adquirir alguna entrada mas? si/no");
  } while (seguir == "si");
};


function borrarProducto(producto) {
  producto = prompt("si quiere eliminar alguna entrada, porfavor indiquenos el nombre de dicha pelicula: ");
  let index;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre === producto) {
      index = i;
      carrito.splice(index, 1);
    }
  }
}


function mostrarCarrito() {
  let ticket = "";
  let totalTicket = 0;
  carrito.forEach((producto) => {
    ticket = `${ticket} Nombre: ${producto.nombre} \n Precio: ${
      producto.precio
    } \n Cantidad: ${producto.cantidad} \n Sala: ${
      producto.sala
    }\n Sub total: $${producto.subTotal()}\n \n`;
  });

  totalTicket = carrito.reduce((total, producto) => {
    return total + producto.subTotal();
  }, 0);
  alert(ticket + `Total: $${totalTicket}`);
  console.log(totalTicket);
}

hayProductos();