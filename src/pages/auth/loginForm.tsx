import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import FormTextField from "../../components/common/FormTextField";

interface LoginFormValues {
  username: string;
  password: string;
}

const initialValues: LoginFormValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const handleSubmit = (values: LoginFormValues) => {
    console.log("Form Data:", values);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #e2e9f5, #e7eaef)",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: 400,
          p: 5,
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Header */}
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "darkblue" }}
        >
          Log In
        </Typography>

        {/* Formik Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form style={{ width: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Field
                  name="username"
                  component={FormTextField}
                  label="Enter Username"
                />

                <Field
                  name="password"
                  type="password"
                  component={FormTextField}
                  label="Enter Password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 1,
                    borderRadius: 2,
                    backgroundColor: "darkblue",
                    textTransform: "none",
                  }}
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default LoginForm;
