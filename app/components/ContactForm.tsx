"use client";
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  email: "",
  phonenumber: "",
  text: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phonenumber: Yup.string().required("Phone number is required"),
  text: Yup.string().required("Message is required"),
});

const onSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
  try {
    const response = await fetch(
      "https://onlineshopbackend.pythonanywhere.com/contact/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (response.ok) {
      console.log("Contact form submitted successfully");
      resetForm();
      // Perform any additional actions after successful form submission
    } else {
      console.error("Contact form submission failed");
      // Handle form submission error
    }
  } catch (error) {
    console.error("Contact form submission error:", error);
    // Handle error
  } finally {
    setSubmitting(false);
  }
};

const ContactForm = () => {
  return (
    <div className="flex justify-center flex-col my-9 px-[312px]">
      <h1 className="text-[52px] leading-[67.6px] tracking-[0.6px] text-[#121212]">
        Contact
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex justify-center items-center flex-col my-9 pt-9">
            <div className="flex justify-between w-full items-center">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-[351px] h-11 border-solid border-[1px] border-[gray] pl-3"
                />
                <ErrorMessage name="name" />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="w-[351px] h-11 border-solid border-[1px] border-[gray]  pl-3"
                />
                <ErrorMessage name="email" />
              </div>
            </div>

            <div>
              <Field
                type="number"
                name="phonenumber"
                placeholder="Phone number"
                className="w-[724px] h-11 border-solid border-[1px] border-[gray] mt-5 pl-3"
              />
              <ErrorMessage name="phonenumber" />
            </div>

            <div>
              <Field
                type="text"
                name="text"
                placeholder="Comment"
                className="w-[724px] h-[100px] border-solid border-[1px] border-[gray] mt-5 pl-3"
              />
              <ErrorMessage name="text" />
            </div>

            <button
              type="submit"
              className="h-11 w-[120px] border-solid border-[1px] bg-[#121212] text-[#fff] text-[14px] border-[#121212]"
            >
              {isSubmitting ? "Sending" : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
