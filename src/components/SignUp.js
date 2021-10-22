import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import * as yup from "yup";

// Styling
import "bootstrap/dist/css/bootstrap.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";
import styled from "styled-components";

// FormSchema for Validation
import formSchema from "../Validation/SignUp&Login/signup&login";

const StyledSignUp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    margin: 0 auto;
    padding: 4% 3%;
    height: max-content;
    max-width: 750px;
    width: 40%;
    border-radius: 0.5rem;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  }

  input {
    margin-bottom: 1rem;
  }

  h2 {
    text-align: center;
    font-weight: 500;
  }

  button {
    background-color: var(--accent-color);
    border: none;

    &:hover {
      background-color: var(--accent-color-dark);
    }
  }

  @media (max-width: 1000px) {
    form {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    form {
      width: 85%;
      margin: 2rem auto;
    }
  }

  @media (min-height: 550px) {
    height: calc(100vh - 210px);
  }
`;

const initialFormErrors = {
  username: "",
  password: "",
};

export default function SignUp() {
  const [form, setForm] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });

  //Disabled
  const [disabled, setDisabled] = useState(true);
  //Errors
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const { push } = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    validate(name, value);

    setForm({
      credentials: { ...form.credentials, [name]: value },
    });
  };

  const userSignUp = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://bw-potluck-102021.herokuapp.com/api/auth/register",
        form.credentials
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        push("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // Validation

  useEffect(() => {
    formSchema.isValid(form.credentials).then((valid) => setDisabled(!valid));
  }, [form.credentials]);

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  return (
    <StyledSignUp>
      <Form onSubmit={userSignUp}>
        <h2>Sign Up</h2>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            name="username"
            value={form.credentials.username}
            onChange={handleChange}
            invalid={!!formErrors.username}
            valid={
              formErrors.username !== ""
                ? false
                : form.credentials.username
                ? true
                : false
            }
          />
          <FormFeedback>{formErrors.username}</FormFeedback>

          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            value={form.credentials.password}
            onChange={handleChange}
            invalid={!!formErrors.password}
            valid={
              formErrors.password !== ""
                ? false
                : form.credentials.password
                ? true
                : false
            }
          />
          <FormFeedback>{formErrors.password}</FormFeedback>
        </FormGroup>
        <Button disabled={disabled}>Login</Button>
      </Form>
    </StyledSignUp>
  );
}

// <div>
// <h2>Please Create An Account</h2>
// <form onSubmit={userSignUp}>
// <label>
//   Username:
//   <input
//     type="text"
//     name="username"
//     value={form.username}
//     onChange={handleChange}
//   />
// </label>
// <label>
//   Password:
//   <input
//     type="text"
//     name="password"
//     value={form.password}
//     onChange={handleChange}
//   />
// </label>
// <button>Login</button>
// </form>
// </div>
