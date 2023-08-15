const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div>{product.price}</div>
    </div>
  );
};

export default ProductCard;
