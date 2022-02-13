import s from './Chat.module.css';
import React from "react";
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import Messages from "./Messages/Messages";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class Chat extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentDialogId !== prevProps.currentDialogId) {
            this.props.getMessages(this.props.currentDialogId)
        }
    }

    render() {
        return (
            <div className={s.chat}>
                <Messages messages={this.props.messages} deleteMessage={this.props.deleteMessage}/>
                <div className={s.textareaContainer}>
                    <AddMessageContainer/>
                </div>
            </div>
        );
    }
}

export default compose(
    withRouter
)(Chat);
