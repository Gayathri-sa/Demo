import React from "react";
import { TextField } from "@mui/material";
import type { FieldProps } from "formik";

interface FormTextFieldProps extends FieldProps {
  label: string;
  type?: string;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  field,
  form,
  label,
  type = "text",
}) => {
  // ✅ Force the name to be string (Formik sometimes gives symbol | number)
  const name = String(field.name);

  const { touched, errors } = form;

  // ✅ Access safely with string key
  const showError =
    (touched as Record<string, boolean>)[name] &&
    (errors as Record<string, string>)[name];

  return (
    <TextField
      {...field}
      fullWidth
      label={label}
      type={type}
      margin="normal"
      variant="standard"
      error={Boolean(showError)}
      helperText={showError ? (errors as Record<string, string>)[name] : ""}
    />
  );
};

export default FormTextField;
