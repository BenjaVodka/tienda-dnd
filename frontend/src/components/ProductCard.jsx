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