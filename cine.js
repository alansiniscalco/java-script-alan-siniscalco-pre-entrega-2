class Producto {
    nombre;
    precio;
    cantidad;
    sala;
  
    constructor(nombre, precio, cantidad, sala) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.sala = sala;
    }
  
  
    subTotal = () => {
      return this.precio * this.cantidad;
    };
  }
  