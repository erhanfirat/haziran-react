import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const loginDataInitial = {
  email: "",
  password: "",
  rememberMe: false,
  terms: false,
};

const roller = [
  { label: "Yönetici", value: "admin" },
  { label: "Yazar", value: "Writer" },
  { label: "Okur", value: "Reader" },
];

const LoginForm = () => {
  const [loginData, setLoginData] = useState(loginDataInitial);
  const title = useSelector((store) => store.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit Edildi! ", loginData);
    axios.post("https://wwww.haziran-react.com/api/login", loginData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    console.log("Login Data > ", loginData);
  }, [loginData]);

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h2>Login Form {title}</h2>
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
      <FormGroup check>
        <Label htmlFor="terms">Terms</Label>
        <Input
          id="terms"
          type="checkbox"
          name="terms"
          checked={loginData.terms}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="option"
              value={1}
              onChange={handleInputChange}
            />{" "}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="option"
              value={2}
              onChange={handleInputChange}
            />{" "}
            Option two can be something else and selecting it will deselect
            option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input
              type="radio"
              name="option"
              value={3}
              onChange={handleInputChange}
            />{" "}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label for="role-select">Rol</Label>
        <Input
          type="select"
          name="role"
          id="role-select"
          onChange={handleInputChange}
          defaultValue={""}
        >
          <option value="" disabled>
            Select your role
          </option>
          {/* { label: "Yönetici", value: "admin" } */}
          {roller.map((rolItem, i) => {
            return (
              <option key={i} value={rolItem.value}>
                {rolItem.label}
              </option>
            );
          })}
        </Input>
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
