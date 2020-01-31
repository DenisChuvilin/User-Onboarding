import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';
const P = styled.p`
    color: green;
`
const Div = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
`

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
    const [users,setUsers] = useState([]);
const handleSubmit = (values, tools) => {
    tools.resetForm();
    axios
        .post("https://reqres.in/api/users",values)
        .then(response => {setUsers([...users, response.data])})
        .catch(error => console.log(error))
  };
return (
    <div>
        <Formik
        initialValues={{ name: '', password: '', email: '' , checkbox: false, role:""}}
        validationSchema ={validationSchema}
        onSubmit={handleSubmit}
        render={props => (
        <Div>
            <Form>
                <Field type="text" name="name" placeholder="name" />
                    <P>{props.errors.name}</P>
                <Field type="password" name="password" placeholder="password" />
                    <P>{props.errors.password}</P>
                <Field type="email" name="email" placeholder="email" />
                    <P>{props.errors.email}</P>
                <Field type="checkbox" name="checkbox" required />
                <Field as="select" name="role"> 
                    <option value=""></option>
                    <option value="red">red</option>
                    <option value="hare">hare</option>
                    <option value="tree">tree</option>
                    <option value="lake">lake</option>
                </Field>
                <button type="submit">check box if thomas is awsome!</button>
            </Form>
        </Div>
        )}
        />
        <div>users:
            {users.map(user => 
                <div>
                    <p><strong>{user.name}</strong></p>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                </div>)}
        </div>
    </div>
  );
};

export default MyForm;
