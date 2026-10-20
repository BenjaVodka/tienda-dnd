import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Carrito() {
  const { items, quitar, vaciar, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-4">
        <h2>Carrito de compras</h2>
        <p>Tu carrito está vacío.</p>
        <Link to="/">Ir a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2>Carrito de compras</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id}>
                <td>{i.nombre}</td>
                <td>${i.precio.toLocaleString('es-CL')}</td>
                <td>{i.cantidad}</td>
                <td>${(i.precio * i.cantidad).toLocaleString('es-CL')}</td>
                <td>
                  <button className="btn btn-sm btn-danger" onClick={() => quitar(i.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4>Total: ${total.toLocaleString('es-CL')}</h4>
      <button className="btn btn-secondary me-2" onClick={vaciar}>Limpiar</button>
    </div>
  );
}

export default Carrito;