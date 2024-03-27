
export const Item = ({producto}) => {
  return (
    <div>
      <h1>{producto.title}</h1>
      <img src={producto.imagen} alt="" />
      <p>{producto.description}</p>
    </div>
  );
};
