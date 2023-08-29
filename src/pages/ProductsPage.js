// outsource JS
import { useEffect, useState } from "react";
import { Input } from "reactstrap";
// internal JS
import PageDefault from "./PageDefault";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
// CSS imports

const ProductsPage = ({  }) => {
  const [searchText, setSearchText] = useState("");
  const products = useSelector((store) => store.products);

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
        <Input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Type to filter products..."
        />
      </div>
      <div className="products-container d-flex wrap">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((product, i) => (
            <ProductCard
              product={product}
              key={i}
            />
          ))}
      </div>
    </PageDefault>
  );
};

export default ProductsPage;
