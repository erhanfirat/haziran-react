// outsource JS
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// internal JS
import PageDefault from "./PageDefault";
import ProductCard from "../components/ProductCard";
// CSS imports

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    productId &&
      axios
        .get(
          `https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/${productId}`
        )
        .then((res) => {
          setProduct(res.data);
        });
  }, [productId]);

  useEffect(() => {
    console.warn(
      "[ComponentDidMount] ProductsPage Componenti yüklendi, browser a monte edildi"
    );

    return () => {
      console.warn("[ComponentWillUnmount] ProductsPage Componenti silindi");
    };
  }, []);

  return (
    <PageDefault pageTitle={"Ürün Detay Sayfası " + productId}>
      <div className="products-container d-flex wrap">
        <ProductCard product={product} />
      </div>
    </PageDefault>
  );
};

export default ProductDetailPage;
