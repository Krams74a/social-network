import {
    addMessage, sendMessage,
} from "../../../../redux/messagesReducer";
import {connect} from "react-redux";
import React from "react";
import AddMessageReduxForm from "./AddMessageForm";
import {reset} from "redux-form";

const AddMessageContainer = (props) => {
    const onSubmit = (formData, dispatch) => {
        props.sendMessage(props.currentDialogId, formData.newMessageText)
        dispatch(reset("addMessage"))
    }

    return (
        <div>
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        value: state.messages.newMessageText,
        currentDialogId: state.messages.currentDialogId
    }
}

export default connect(mapStateToProps, {addMessage, sendMessage})(AddMessageContainer);
