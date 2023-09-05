import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { axiosWithAuth } from "../api/api";
import { useHistory, useLocation } from "react-router-dom";

const loginDataInitial = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginForm = () => {
  const [loginData, setLoginData] = useState(loginDataInitial);
  const title = useSelector((store) => store.title);
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit Edildi! ", loginData);
    axiosWithAuth()
      .post("login", loginData)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        history.push(location.state.referrer);
      });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h2>Login Form ee {title}</h2>
      <hr />
      <FormGroup>
        <Label htmlFor="user-mail">Email</Label>
        <Input
          id="user-mail"
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          placeholder="Lütfen eposta bilgisini giriniz..."
          data-testid="email-input"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="user-pass">Password</Label>
        <Input
          id="user-pass"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup check>
        <Label htmlFor="remember-me">Remember Me</Label>
        <Input
          id="remember-me"
          type="checkbox"
          name="rememberMe"
          checked={loginData.rememberMe}
          onChange={handleInputChange}
        />
      </FormGroup>
      <br />
      <Button
        type="button"
        onClick={() => {
          setLoginData(loginDataInitial);
        }}
      >
        Reset Form
      </Button>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
