// outsource JS
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "reactstrap";
// internal JS
import PageDefault from "./PageDefault";
import ProductCard from "../components/ProductCard";
import { REQ_TYPES, useAxios } from "../hooks/useAxios";
// CSS imports

const ProductDetailPage = () => {
  const { productId } = useParams();

  const [getProduct, product, showSpinner] = useAxios({
    reqType: REQ_TYPES.GET,
    endpoint: `products/${productId}`,
  });

  const nums = [1, 2, 3, 4, 5];
  const [bir, iki, uc, ...kalanlar] = nums;

  const obj1 = { name: "ali", email: "ali@tas.com", age: 19 };
  const { age, email: userEmail } = obj1;

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
