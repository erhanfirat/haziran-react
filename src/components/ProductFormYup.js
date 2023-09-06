import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import * as Yup from "yup";
import { REQ_TYPES, useAxios } from "../hooks/useAxios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadProductsActionCreator } from "../store/actions/productsActions";

const productDataInitial = {
  name: "",
  description: "",
  img: "",
  price: 0,
  stock: 0,
};

const ProductFormYup = ({ productInitial }) => {
  const history = useHistory();
  const [productData, setProductData] = useState(
    productInitial || productDataInitial
  );
  const [formErrors, setFormErrors] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    stock: "",
  });
  const [isValid, setValid] = useState(false);

  const dispatch = useDispatch();

  const [updateProduct, resUpdate, loadingUpdate] = useAxios({
    reqType: REQ_TYPES.PUT,
    endpoint: `products/${productData.id}`,
    payload: productData,
  });

  const [createProduct, resCreate, loadingCreate] = useAxios({
    reqType: REQ_TYPES.POST,
    endpoint: `products`,
    payload: productData,
  });

  const productFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("Ürün ismi alanı zorunludur!")
      .min(4, "İsim değeri minimum 4 karakter olabilir."),
    description: Yup.string().required("Açıklama alanı zorunludur."),
    img: Yup.string().url("Geçerli bir URL adresi giriniz."),
    price: Yup.number().test(
      "positive-number",
      "Fiyat 0'dan büyük olmalı!",
      (value, context) => {
        // custom validation
        // return true | false
        return value > 0;
      }
    ),
    stock: Yup.number().positive("Stok bilgisi pozitif sayı olmalıdır."),
  });

  const inputChangeHandler = (event) => {
    const { value, name, checked, type } = event.target; // name = "password" | "email" | "name"
    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    }); // setter async çalışır

    Yup.reach(productFormSchema, name)
      .validate(type === "checkbox" ? checked : value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const productSubmitHandler = (e) => {
    e.preventDefault();
    if (productData.id) {
      // UPDATE: PUT
      updateProduct().then((resData) => {
        history.push({ pathname: `/products/${productData.id}` });
      });
    } else {
      // ADD PRODUCT: POST
      createProduct().then(() => {
        dispatch(loadProductsActionCreator());
      });
    }
  };

  useEffect(() => {
    console.log("productData > ", productData);
    productFormSchema.isValid(productData).then((valid) => setValid(valid));
  }, [productData]);

  return (
    <Form onSubmit={productSubmitHandler} className="product-form">
      <FormGroup>
        <Label>İsim</Label>
        <Input
          type="text"
          name="name"
          onChange={inputChangeHandler}
          value={productData.name}
          invalid={!!formErrors.name}
        />
        <FormFeedback>{formErrors.name}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label>Açıklama</Label>
        <Input
          type="text"
          name="description"
          onChange={inputChangeHandler}
          value={productData.description}
          invalid={!!formErrors.description}
        />
        <FormFeedback>{formErrors.description}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label>Görsel URL</Label>
        <Input
          type="url"
          name="img"
          onChange={inputChangeHandler}
          value={productData.img}
          invalid={!!formErrors.description}
        />
        <FormFeedback>{formErrors.img}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label>Ücret</Label>
        <Input
          type="number"
          name="price"
          onChange={inputChangeHandler}
          value={productData.price}
          invalid={!!formErrors.price}
        />
        <FormFeedback>{formErrors.price}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label>Stok</Label>
        <Input
          type="number"
          name="stock"
          onChange={inputChangeHandler}
          value={productData.stock}
          invalid={!!formErrors.stock}
        />
        <FormFeedback>{formErrors.stock}</FormFeedback>
      </FormGroup>

      <Button type="submit" color="primary" disabled={!isValid}>
        Submit
      </Button>
    </Form>
  );
};

export default ProductFormYup;
