import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password1: "",
  password2: "",
};

const onSubmit = async (values) => {
  try {
    const response = await fetch(
      "https://onlineshopbackend.pythonanywhere.com/account/dj-rest-auth/registration/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (response.ok) {
      console.log("Registration successful");
      // Perform any additional actions after successful registration
    } else {
      console.error("Registration failed");
      // Handle registration error
    }
  } catch (error) {
    console.error("Registration error:", error);
    // Handle error
  }
};

// const validationSchema = Yup.object({
//   username: Yup.string()
//     .required("Required")
//     .test("username", "The username is already taken", async (value) => {
//       try {
//         const response = await fetch();
//         `https://onlineshopbackend.pythonanywhere.com/account/dj-rest-auth/check-username?username=${value}`;
//         const data = await response.json();

//         // Check if the username is already taken
//         if (data.isTaken) {
//           return false; // Username is taken
//         }

//         return true; // Username is available
//       } catch (error) {
//         console.error("Error checking username:", error);
//         return false; // Assume username is taken in case of an error
//       }
//     }),
//   email: Yup.string()
//     .required("Required")
//     .email("Invalid email format")
//     .test("email", "The email is already taken", async (value) => {
//       try {
//         const response = await fetch();
//         `https://onlineshopbackend.pythonanywhere.com/account/dj-rest-auth/check-email?email==${value}`;
//         const data = await response.json();

//         // Check if the email is already taken
//         if (data.isTaken) {
//           return false; // Email is taken
//         }

//         return true; // Email is available
//       } catch (error) {
//         console.error("Error checking email:", error);
//         return false; // Assume email is taken in case of an error
//       }
//     }),
//   password1: Yup.string()
//     .required("Required")
//     .min(
//       8,
//       "This password is too short. It must contain at least 8 characters."
//     )
//     .test("password1", "This password is too common.", async (value) => {
//       // Perform the check for password commonality
//       // You can implement your own logic to check if the password is common or weak
//       // Return false if the password is common or weak, true otherwise
//       return await isPasswordStrong(value);
//     }),
//   password2: Yup.string()
//     .required("Required")
//     .oneOf([Yup.ref("password1"), null], "Passwords must match"),
// });

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password1: Yup.string().required("Required"),
  password2: Yup.string().required("Required"),
});

const RegisterUser = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="mt-10 flex justify-center items-center flex-col">
          <div className="flex flex-col">
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3"
            />
            <ErrorMessage name="username" />
          </div>
          <div className="flex flex-col">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3 mt-5"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="flex flex-col">
            <Field
              type="password"
              name="password1"
              placeholder="Password"
              className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3 mt-5"
            />
            <ErrorMessage name="password1" />
          </div>
          <div className="flex flex-col">
            <Field
              type="password"
              name="password2"
              placeholder="Confirm"
              className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3 mt-5"
            />
            <ErrorMessage name="password2" />
          </div>
          <button
            type="submit"
            className="w-[122px] h-12 px-7 text-[15px] leading-[18px] tracking-[1px] bg-[#121212] text-[#ffffff] mt-10"
          >
            {isSubmitting ? "Submitting" : "Create"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterUser;
