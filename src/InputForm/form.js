import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import RCNoIcon from "@material-ui/icons/SimCard";
import EmailIcon from "@material-ui/icons/Email";

export const Form = props => {
  const {
    values: { name, rcNumber, contactEmail, contactNumber },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return <form />;
};
