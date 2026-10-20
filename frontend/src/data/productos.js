const CLAVE = 'productos_dnd';

const productosIniciales = [
  { id: 1, nombre: 'Set de dados poliédricos', categoria: 'Dados', precio: 12990, stock: 25 },
  { id: 2, nombre: 'Manual del Jugador', categoria: 'Libros', precio: 34990, stock: 10 },
  { id: 3, nombre: 'Miniatura de dragón', categoria: 'Miniaturas', precio: 18990, stock: 8 },
  { id: 4, nombre: 'Pantalla del Dungeon Master', categoria: 'Accesorios', precio: 15990, stock: 12 },
];

function cargar() {
  try {
    const guardado = localStorage.getItem(CLAVE);
    if (guardado) return JSON.parse(guardado);
  } catch (e) {
    // si falla, usamos los datos iniciales
  }
  return productosIniciales;
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

export function obtenerProductos() {
  return cargar();
}

export function obtenerProducto(id) {
  return cargar().find((p) => p.id === Number(id));
}

export function crearProducto(datos) {
  const nuevo = { ...datos, id: Date.now() };
  guardar([...cargar(), nuevo]);
  return nuevo;
}

export function actualizarProducto(id, cambios) {
  const lista = cargar().map((p) => (p.id === Number(id) ? { ...p, ...cambios } : p));
  guardar(lista);
}

export function eliminarProducto(id) {
  guardar(cargar().filter((p) => p.id !== Number(id)));

}