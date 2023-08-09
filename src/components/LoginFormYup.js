import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import * as Yup from "yup";

const loginDataInitial = {
  email: "",
  password: "",
  rememberMe: false,
  terms: false,
  role: null,
};

const roller = [
  { label: "Yönetici", value: "admin" },
  { label: "Yazar", value: "Writer" },
  { label: "Okur", value: "Reader" },
];

const LoginFormYup = () => {
  const [loginData, setLoginData] = useState(loginDataInitial);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    terms: "",
    rememberMe: "",
    option: "",
    role: "",
  });
  const [isFormValid, setFormValid] = useState(false);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Bu email olmamış!")
      .required("E-posta adresini girmezsen sana nasıl ulaşıcam? ")
      .test("is-jimmy", "Ama bu Jimmy değil!", (value, context) => {
        // custom validation
        // return true | false
        return value.toLowerCase().includes("jimmy");
      }),
    password: Yup.string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    terms: Yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
    rememberMe: Yup.boolean(),
    role: Yup.string().required("Bir role seçmek zorundasınız!"),
    option: Yup.string().oneOf(
      ["1", "2", "3"],
      "You must select one of options."
    ),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit Edildi! ", loginData);
    // axios.post("https://wwww.haziran-react.com/api/login", loginData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setLoginData({
      ...loginData,
      [name]: inputValue,
    });

    validateFormField(e);
  };

  const validateFormField = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    Yup.reach(formSchema, name)
      .validate(inputValue)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  useEffect(() => {
    console.log("Login Data > ", loginData);
    formSchema.isValid(loginData).then((valid) => setFormValid(valid));
  }, [loginData]);

  useEffect(() => {
    console.error("[Form Validation Error State Updated] ", formErrors);
  }, [formErrors]);

  useEffect(() => {
    //component did mount
    const name = "option";
    Yup.reach(formSchema, name)
      .validate("")
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  }, []);

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h2>Login Form</h2>
      <hr />
      <FormGroup>
        <Label htmlFor="user-mail">Email</Label>
        <Input
          id="user-mail"
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          // onBlur={validateFormField}
          placeholder="Lütfen eposta bilgisini giriniz..."
          invalid={!!formErrors.email}
        />
        <FormFeedback>{formErrors.email}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="user-pass">Password</Label>
        <Input
          id="user-pass"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          invalid={!!formErrors.password}
        />
        <FormFeedback>{formErrors.password}</FormFeedback>
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
          invalid={!!formErrors.terms}
        />
        <FormFeedback>{formErrors.terms}</FormFeedback>
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
              invalid={!!formErrors.option}
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
              invalid={!!formErrors.option}
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
              invalid={!!formErrors.option}
            />{" "}
            Option three is disabled
          </Label>
        </FormGroup>
        {formErrors.option && (
          <div class="invalid-feedback" style={{ display: "block" }}>
            {formErrors.option}
          </div>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="role-select">Rol</Label>
        <Input
          type="select"
          name="role"
          id="role-select"
          onChange={handleInputChange}
          invalid={!!formErrors.role}
        >
          <option value="">Select your role</option>
          {roller.map((rolItem, i) => {
            return (
              <option key={i} value={rolItem.value}>
                {rolItem.label}
              </option>
            );
          })}
        </Input>
        <FormFeedback>{formErrors.role}</FormFeedback>
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
      <Button type="submit" disabled={!isFormValid}>
        Login
      </Button>
    </Form>
  );
};

export default LoginFormYup;
