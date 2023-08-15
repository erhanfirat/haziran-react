import { useEffect, useState } from "react";
import PageDefault from "./PageDefault";
import ProductCard from "../components/ProductCard";

const ProductsPage = ({ products = [] }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.warn(
      "[ComponentDidMount] ProductsPage Componenti yüklendi, browser a monte edildi"
    );

    return () => {
      console.warn("[ComponentWillUnmount] ProductsPage Componenti silindi");
    };
  }, []);

  return (
    <PageDefault pageTitle={"Ürünler Sayfası"}>
      <div>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      </div>
      <div className="products-container d-flex wrap">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((product) => (
            <ProductCard product={product} />
          ))}
      </div>
    </PageDefault>
  );
};

export default ProductsPage;
