import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const ProductCard = ({ product }) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt={product.name} src={product.img} />
      <CardBody>
        <CardTitle tag="h3">{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {product.price}
        </CardSubtitle>
        <Button type="primary">Sepete Ekle</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
