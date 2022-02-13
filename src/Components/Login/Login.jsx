import React from 'react';
import {reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../utils/validators/validators"
import {createField, Input} from "../common/FormsControls/FormsControls";
import styles from "../common/FormsControls/FormsControls.module.css"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const maxLength50 = maxLengthCreator(50)

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [requiredField, maxLength50], Input)}
            {createField("Пароль", "password", [requiredField, maxLength50], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Запомнить меня")}
            {error &&
            <div className={styles.formSummaryError}>
                { error}
            </div>}
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;
