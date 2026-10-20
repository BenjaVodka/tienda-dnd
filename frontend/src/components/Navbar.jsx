import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cantidadTotal, total } = useCart();

  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Tienda D&D</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menu">
          <Link to="/carrito" className="btn btn-success">
            Carrito ({cantidadTotal}) ${total.toLocaleString('es-CL')}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;