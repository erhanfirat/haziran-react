import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import { useForm } from "react-hook-form";

const LoginFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
      terms: false,
    },
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log("formValue: ", data);
    // axios.post("myendpoint", data)
  };

  useEffect(() => {
    console.log("errors: ", errors);
  }, [errors]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h2>Login Form</h2>
      <hr />
      <FormGroup>
        <Label htmlFor="user-mail">Email</Label>
        <input
          id="user-mail"
          type="email"
          className={`form-control ${
            errors.email?.message ? "is-invalid" : ""
          }`}
          placeholder="Lütfen eposta bilgisini giriniz..."
          {...register("email", { required: "Email alanı zorunludur!" })}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="user-pass">Password</Label>
        <input
          id="user-pass"
          className={`form-control ${
            errors.password?.message ? "is-invalid" : ""
          }`}
          type="password"
          {...register("password", {
            required: "Şifre alanı zorunludur!",
            minLength: {
              value: 6,
              message: "Şifre en az 6 karakter olmalıdır!",
            },
            validate: {
              upperCase: (val) => {
                let isUpperCase = false;
                for (let char of val) {
                  if (char >= "A" && char <= "Z") {
                    isUpperCase = true;
                    break;
                  }
                }
                return isUpperCase ? isUpperCase : "Büyük harf içermeli!";
              },
              lowerCase: (val) => {
                let isUpperCase = false;
                for (let char of val) {
                  if (char >= "a" && char <= "z") {
                    isUpperCase = true;
                    break;
                  }
                }
                return isUpperCase ? isUpperCase : "Küçük harf içermeli!";
              },
              dontRepeat: (val) => {
                console.log(val);
                let same;
                for (let i = 0; i < val.length - 4; i++) {
                  same = true;
                  for (let k = i + 1; k < i + 5; k++) {
                    if (val[i] !== val[k]) {
                      same = false;
                      break;
                    }
                  }

                  if (same) {
                    break;
                  }
                }

                return same ? "Aynı karakter ardarda 5 kere yazılamaz!" : false;
              },
            },
          })}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </FormGroup>
      <FormGroup check>
        <Label htmlFor="remember-me">Remember Me</Label>
        <input
          className="form-check-input"
          id="remember-me"
          type="checkbox"
          {...register("rememberMe")}
        />
      </FormGroup>
      <FormGroup check>
        <Label htmlFor="terms">Terms</Label>
        <input
          className="form-check-input"
          id="terms"
          type="checkbox"
          {...register("terms")}
        />
      </FormGroup>

      <br />
      <Button type="button" className="t-btn w-[45%]">
        Reset Form
      </Button>
      <Button
        type="submit"
        className="t-btn ml-2 w-[calc(50%)]"
        disabled={!isValid}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginFormHook;
