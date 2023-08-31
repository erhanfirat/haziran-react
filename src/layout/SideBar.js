import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { productsActions } from "../store/actions/productsActions";
import { Button } from "reactstrap";
import { loadProducts } from "../utils/api";

const activeNavLink = {
  backgroundColor: "#fffff !important",
  color: "rgb(13,110,253) !important",
};

const SideBar = () => {
  const dispatch = useDispatch();
  const productsLength = useSelector(
    (store) => store.products.productsList.length
  );

  const clearProducts = () => dispatch({ type: productsActions.clear });

  const getProducts = () =>
    loadProducts().then((res) =>
      dispatch({ type: productsActions.set, payload: res.data })
    );

  return (
    <div className="side-bar p-3 bg-primary color-white">
      <nav className="side-bar-nav">
        <ul className="p-0">
          <li>
            <NavLink
              to={"/"}
              className={(isActive) =>
                isActive ? "btn nav-btn-active" : "btn btn-primary"
              }
              exact
            >
              Ana Sayfa
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/counter"}
              className={(isActive) =>
                isActive ? "btn nav-btn-active" : "btn btn-primary"
              }
            >
              Sayaç
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={(isActive) =>
                isActive ? "btn nav-btn-active" : "btn btn-primary"
              }
            >
              Ürünler [{productsLength}]
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/whoweare"}
              className={(isActive) =>
                isActive ? "btn nav-btn-active" : "btn btn-primary"
              }
            >
              Hakkımızda
            </NavLink>
          </li>
          <li>
            <Button color="danger" onClick={clearProducts}>
              Clear Products
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={getProducts}>
              Load Products
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
