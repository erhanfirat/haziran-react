// outsource JS
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "reactstrap";
// internal JS
import PageDefault from "./PageDefault";
import { REQ_TYPES, useAxios } from "../hooks/useAxios";
import ProductFormYup from "../components/ProductFormYup";
// CSS imports

const ProductFormPage = () => {
  const { productId } = useParams();

  const [getProduct, product, showSpinner] = useAxios({
    reqType: REQ_TYPES.GET,
    endpoint: `products/${productId}`,
  });

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
    <PageDefault pageTitle={"Ürün Form Sayfası " + productId}>
      <div className="products-container d-flex wrap">
        {showSpinner && (
          <Spinner className="m-5" color="primary">
            Loading...
          </Spinner>
        )}
        {!showSpinner && <ProductFormYup productInitial={product} />}
      </div>
    </PageDefault>
  );
};

export default ProductFormPage;
