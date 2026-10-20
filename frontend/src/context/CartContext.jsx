import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);
const CLAVE = 'carrito_dnd';

function cargarCarrito() {
  try {
    const guardado = localStorage.getItem(CLAVE);
    if (guardado) return JSON.parse(guardado);
  } catch (e) {
    // si falla, empezamos con carrito vacío
  }
  return [];
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(cargarCarrito);

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(items));
    } catch (e) {
      // ignorar errores de almacenamiento
    }
  }, [items]);

  const agregar = (producto) => {
    setItems((prev) => {
      const existe = prev.find((i) => i.id === producto.id);
      if (existe) {
        return prev.map((i) =>
          i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const quitar = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const vaciar = () => setItems([]);
  const total = items.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
  const cantidadTotal = items.reduce((suma, i) => suma + i.cantidad, 0);

  return (
    <CartContext.Provider value={{ items, agregar, quitar, vaciar, total, cantidadTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}