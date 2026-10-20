import { useState } from 'react';
import { obtenerProductos } from '../data/productos';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

function Home() {
  const [productos] = useState(obtenerProductos);
  const [busqueda, setBusqueda] = useState('');
  const { agregar } = useCart();

  const filtrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container py-4">
      <input
        className="form-control mb-3"
        placeholder="Buscar producto"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {filtrados.map((p) => (
          <div className="col" key={p.id}>
            <ProductCard producto={p} onAgregar={agregar} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;