// outsource JS
import { useEffect, useState } from "react";
import { Input, Spinner } from "reactstrap";
// internal JS
import PageDefault from "./PageDefault";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsActionCreator } from "../store/actions/productsActions";
import { FETCH_STATES } from "../store/reducers/productsReducer";
// CSS imports

const ProductsPage = ({}) => {
  const [searchText, setSearchText] = useState("");
  const products = useSelector((store) => store.products.productsList);
  const productFetched = useSelector((store) => store.products.fetchState);
  const productsLoading = useSelector((store) => store.products.loading);

  const dispatch = useDispatch();

  //
  useEffect(() => {
    console.warn(
      "[ComponentDidMount] ProductsPage Componenti yüklendi, browser a monte edildi"
    );

    if (productFetched === FETCH_STATES.notFetched) {
      dispatch(loadProductsActionCreator());
    }

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
      {productsLoading && (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      )}
      {!productsLoading && (
        <div className="products-container d-flex wrap">
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
        </div>
      )}
    </PageDefault>
  );
};

export default ProductsPage;
