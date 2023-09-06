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

const ProductAddPage = () => {
  return (
    <PageDefault pageTitle={"Ürün Ekleme Sayfası "}>
      <div className="products-container d-flex wrap">
        <ProductFormYup />
      </div>
    </PageDefault>
  );
};

export default ProductAddPage;
