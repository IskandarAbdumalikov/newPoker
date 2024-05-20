import "./adminProducts.scss";
import axios from "../../../api";
import useFetch from "../../../hooks";

const AdminProducts = () => {
  const { data, loading, error } = useFetch(`/products`);
  console.log(data);

  let productItem = data?.products.map((product) => (
    <div className="product__card" key={product.id}>
      <div className="product__card__img">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="product__card__info">
        <h3>{product.title}</h3>
        <p className="product__description">{product.description}</p>
        <p>{product.price} $</p>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <h1>Admin products</h1>
      <div className="product__cards container ">{productItem}</div>
    </div>
  );
};

export default AdminProducts;
