import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string("Enter a name")
    .typeError("Enter a name")
    .required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h2>Nero</h2>
      </React.Fragment>
    );
  }
}

export default InputForm;
