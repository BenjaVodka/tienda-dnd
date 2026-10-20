import { useParams, Link } from 'react-router-dom';
import { obtenerProducto } from '../data/productos';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const producto = obtenerProducto(id);
  const { agregar } = useCart();

  if (!producto) {
    return (
      <div className="container py-4">
        <p>Producto no encontrado.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2>{producto.nombre}</h2>
      <p className="text-muted">Categoría: {producto.categoria}</p>
      <p className="fs-4 fw-bold">${producto.precio.toLocaleString('es-CL')}</p>
      <p>Stock disponible: {producto.stock}</p>
      <button className="btn btn-success me-2" onClick={() => agregar(producto)}>
        Añadir al carrito
      </button>
      <Link className="btn btn-outline-secondary" to="/">Volver</Link>
    </div>
  );
}

export default ProductDetail;