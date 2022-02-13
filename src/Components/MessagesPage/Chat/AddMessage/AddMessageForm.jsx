import s from "./AddMessageForm.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form className={s.addMessage} onSubmit={props.handleSubmit}>
            <div className={s.textareaContainer}>
                <Field placeholder="Напишите сообщение..." component={'textarea'} name={'newMessageText'}/>
            </div>
            <div className={s.buttonContainer}>
                <button className="fa fa-paper-plane"> Отправить</button>
            </div>
        </form>
    );
}

const AddMessageReduxForm = reduxForm({form: "addMessage"})(AddMessageForm)

export default AddMessageReduxForm;
