import {addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import AddPostReduxForm from "./AddPostForm";
import React from "react";

const AddPostContainer = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.newPostText)
        console.log(formData.newPostText)
    }

    return (
        <div>
            <AddPostReduxForm onSubmit={onSubmit}/>
        </div>
    )

}

let mapStateToProps = (state) => {
    return {
        value: state.profile.newPostText
    }
}

export default connect(mapStateToProps, {addPost})(AddPostContainer);
