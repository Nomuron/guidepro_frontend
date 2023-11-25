import React from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import CryptoES from "crypto-es";
import {backendUrl, cryptoKey} from "../utils/constants";
import axios from "axios";


export const MainPage = () => {

    const formik = useFormik({
        initialValues: {
            login: "",
            email: "",
            name: "",
            surname: "",
            password: "",
            repeatedPassword: ""
        },
        validationSchema: Yup.object({
            login: Yup.string().trim()
                .min(3, "Login musi mieć co najmniej 3 znaki")
                .max(50, "Login musi miec conajmniej 50 znaków")
                .required("Login jest wymagany"),
            email: Yup.string().trim()
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Niepoprawna struktura adresu email")
                .required("Email jest wymagany"),
            name: Yup.string().trim()
                .min(3, "Twoje imię nie może być krótsze niż 3 litery")
                .max(13, "Twoje imię nie może być dłuższe niż 13 liter")
                .required("Imię jest wymagane"),
            surname: Yup.string().trim()
                .min(2, "Twoje imię nie może być krótsze niż 2 litery")
                .max(51, "Twoje nazwisko nie może być dłuższe niż 51 liter")
                .required("Imię jest wymagane"),
            password: Yup.string().trim()
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                    "Hasło za słabe. Silne hasło powinno zawierać conajmniej 1 dużą literą, 1 małą literę, " +
                    "1 cyfrę i 1 znak specjalny.")
                .required("Hasło jest wymagane"),
            repeatedPassword: Yup.string().trim()
                .oneOf([Yup.ref("password"), null], "Hasła piowinny być identyczne")
                .required("Powtórzone hasło jest wymagane")
        }),
        onSubmit: (values, {resetForm}) => {
            // console.log(CryptoES.AES.encrypt(values.password, cryptoKey).toString());
            // console.log(CryptoES.AES.decrypt("U2FsdGVkX1+VcHb/0ZDL7Y9XS3U/SgTK70wqfwUHiDg=", cryptoKey).toString(CryptoES.enc.Utf8))
            axios.post(backendUrl + "/register", {
                login: values.login,
                password: CryptoES.AES.encrypt(values.password, cryptoKey).toString(),
                name: values.name,
                surname: values.surname,
                email: values.email,
                user_type: "user"
            }).then((response) => console.log(response))
            // resetForm();
        }
    })

    return (
        <div className="App">
            Hello World
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="login">Login: </label>
                <input id="login" type="text" className="form-control" {...formik.getFieldProps("login")}/>
                {formik.touched.login && formik.errors.login ? (<div>{formik.errors.login}</div>) : null}
                <br />
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" className="form-control" {...formik.getFieldProps("email")}/>
                {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
                <br />
                <label htmlFor="name">Imię: </label>
                <input id="name" type="text" className="form-control" {...formik.getFieldProps("name")}/>
                {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}
                <br />
                <label htmlFor="surname">Nazwisko: </label>
                <input id="surname" type="text" className="form-control" {...formik.getFieldProps("surname")}/>
                {formik.touched.surname && formik.errors.surname ? (<div>{formik.errors.surname}</div>) : null}
                <br />
                <label htmlFor="password">Hasło: </label>
                <input id="password" type="password" className="form-control" {...formik.getFieldProps("password")}/>
                {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
                <br />
                <label htmlFor="repeatedPassword">Powtórz hasło: </label>
                <input id="repeatedPassword" type="password" className="form-control" {...formik.getFieldProps("repeatedPassword")}/>
                {formik.touched.repeatedPassword && formik.errors.repeatedPassword ? (<div>{formik.errors.repeatedPassword}</div>) : null}
                <br />
                <button type="submit" className="btn btn-primary">Zarejestruj</button>
            </form>
        </div>
    )
}