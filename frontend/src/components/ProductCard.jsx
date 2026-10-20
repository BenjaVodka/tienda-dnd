import { Link } from 'react-router-dom';

function ProductCard({ producto, onAgregar }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="text-muted">{producto.categoria}</p>
        <p className="fw-bold">${producto.precio.toLocaleString('es-CL')}</p>
        <Link className="btn btn-outline-secondary mb-2 mt-auto" to={`/producto/${producto.id}`}>
          Ver detalle
        </Link>
        <button className="btn btn-success" onClick={() => onAgregar(producto)}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

function ProductCard({ producto, onAgregar }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="text-muted">{producto.categoria}</p>
        <p className="fw-bold">${producto.precio.toLocaleString('es-CL')}</p>
        <button className="btn btn-success mt-auto" onClick={() => onAgregar(producto)}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;