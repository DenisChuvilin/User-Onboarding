import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';
const P = styled.p`
  color: green;
`;

const validationSchema = yup.object().shape({
    name:yup
    .string().required("Type in your name!!!")
    .min(5,"NAME NOT LONG ENOUGH!!!!"),
    password:yup
    .string().required("enter a passWOED PLEASE!!!")
    .min(6, "password in not long enough")
    .max(12, "pawwsord is too long")
})

const MyForm = () => {
  const handleSubmit = (values, tools) => {
      tools.resetForm();
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ name: '', password: '', email: '' , checkbox: false }}
        validationSchema ={validationSchema}
      onSubmit={handleSubmit}
      render={props => (
        <Form>
          <Field type="text" name="name" placeholder="name" />
          <P>{props.errors.name}</P>
          <Field type="password" name="password" placeholder="password" />
          <P>{props.errors.password}</P>
          <Field type="email" name="email" placeholder="email" />
          <P>{props.errors.email}</P>
          <Field type="checkbox" name="checkbox" required />
          <button type="submit">check box if thomas is awsome!</button>
        </Form>
      )}
    />
  );
};

export default MyForm;
