import {Link} from 'react-router-dom'

export const Item = ({ i }) => {
  return (
    <div className=''>
      <h1>{i.title}</h1>
      <img src={i.imagen} alt={i.title} />
      <p>Precio: ${i.precio}</p>
      <p>Cantidad: {i.stock}</p>
      
        <Link to={`detalles/${i.id}` || `producto/detalles/${id}`} >
        <button className='border-solid border-blue-500 '>Detalles</button>
      </Link>
      
    </div>
  );
};
