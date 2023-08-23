import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

/**
 * ProductCard Componenti
 * @param {Product} product aldığı product datasını ekrana cart içinde gösterir
 * @returns Product Card JSX templati döndürür
 */
const ProductCard = ({ product }) => {
  const history = useHistory();

  const goToProduct = () => {
    // navitage programmatically
    history.push(`/products/${product.id}`);
  };

  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt={product?.name} src={product?.img} />
      <CardBody>
        <CardTitle tag="h3">{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {product.price}
        </CardSubtitle>
        <Button color="primary">Sepete Ekle</Button>
        <Button color="secondary" onClick={goToProduct}>
          İncele
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
