export const Item = ({producto}) => {
  return (
    <div>
      <img src={producto.imagen} alt={producto.title} width={200} />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>${producto.price}</p>
      <p>{producto.stock}</p>
    </div>
  );
};
