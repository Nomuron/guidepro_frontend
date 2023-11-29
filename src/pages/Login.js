import React from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import CryptoES from "crypto-es";
import {backendUrl} from "../utils/constants";
import axios from "axios";


export const Login = () => {

    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: Yup.object({
            login: Yup.string().trim()
                .required("Login jest wymagany"),
            password: Yup.string().trim()
                .required("Hasło jest wymagane"),
        }),
        onSubmit: (values, {resetForm}) => {
            axios.post(backendUrl + "/login", {
                login: values.login,
                password: CryptoES.MD5(values.password).toString(),
            }).then((response) => console.log(response))
            resetForm();
        }
    })
    return (
        <div className="App">
            Hello World
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="login">Login: </label>
                <input id="login" type="text" className="form-control" {...formik.getFieldProps("login")}/>
                {formik.touched.login && formik.errors.login ? (<div>{formik.errors.login}</div>) : null}
                <br/>
                <label htmlFor="password">Hasło: </label>
                <input id="password" type="password" className="form-control" {...formik.getFieldProps("password")}/>
                {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
                <br/>
                <button type="submit" className="btn btn-primary">Zarejestruj</button>
            </form>
        </div>
    )
}