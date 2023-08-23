// outsource JS
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "reactstrap";
// internal JS
import PageDefault from "./PageDefault";
import ProductCard from "../components/ProductCard";
import { useAxios } from "../hooks/useAxios";
// CSS imports

const ProductDetailPage = () => {
  const { productId } = useParams();

  const [product, getProduct, showSpinner, err] = useAxios(
    {},
    "get",
    `https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/${productId}`
  );

  useEffect(() => {
    productId && getProduct();
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
        {showSpinner && (
          <Spinner className="m-5" color="primary">
            Loading...
          </Spinner>
        )}
        {!showSpinner && <ProductCard product={product} />}
      </div>
    </PageDefault>
  );
};

export default ProductDetailPage;
