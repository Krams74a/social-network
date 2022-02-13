import s from './AddPostForm.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form className={s.addPostContainer} onSubmit={props.handleSubmit}>
            <Field className={s.item} placeholder='Что у вас нового?' component={'textarea'} name={'newPostText'}/>
            <button className={s.item}>Опубликовать</button>
        </form>
    );
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)

export default AddPostReduxForm;
