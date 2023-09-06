import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import {
  deleteProductActionCreator,
  loadProductsActionCreator,
} from "../store/actions/productsActions";
import { toast } from "react-toastify";
import { REQ_TYPES, useAxios } from "../hooks/useAxios";

/**
 * ProductCard Componenti
 * @param {Product} product aldığı product datasını ekrana cart içinde gösterir
 * @returns Product Card JSX templati döndürür
 */
const ProductCard = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [doDeleteProduct, delRes, delLoading, delErr] = useAxios({
    reqType: REQ_TYPES.DELETE,
    endpoint: `products/${product?.id}`,
  });

  const goToProduct = () => {
    // navitage programmatically
    history.push(`/products/${product?.id}`);
  };

  const editProduct = () => {
    history.push(`/product-form/${product?.id}`);
  };

  // const deleteProduct = (productId) =>
  //   dispatch(deleteProductActionCreator(productId));

  const deleteProduct = () => {
    product.id &&
      doDeleteProduct()
        .then((res) => {
          // iki seçenek
          // 1. reducer içinden sil
          // dispatch({ type: productsActions.delete, payload: productId });

          // 2. load products from zero
          dispatch(loadProductsActionCreator());
        })
        .catch((err) => {
          toast.error(`HATA! ${err.message}`);
        });
  };

  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt={product?.name} src={product?.img} />
      <CardBody>
        <CardTitle tag="h3">{product?.name}</CardTitle>
        <CardText>{product?.description}</CardText>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {product?.price}
        </CardSubtitle>
        <Button color="secondary" onClick={goToProduct}>
          İncele
        </Button>
        <Button color="primary">Sepete Ekle</Button>
        <Button color="warnig" onClick={editProduct}>
          Düzenle
        </Button>
        <Button
          color="danger"
          onClick={() => product && deleteProduct(product?.id)}
        >
          Sil
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
