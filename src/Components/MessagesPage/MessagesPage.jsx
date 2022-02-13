import s from './MessagesPage.module.css';
import Chat from "./Chat/Chat";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {deleteMessage, getDialogs, getMessages, setCurrentDialogId} from "../../redux/messagesReducer";
import DialogsList from "./DialogsList/DialogsList";
import React, {Component} from "react";
import {Route} from "react-router-dom";

class MessagesPage extends Component {
    componentDidMount() {
        this.props.getDialogs()
    }

    render() {
        return (
            <div className={s.messages}>
                <DialogsList dialogs={this.props.dialogs} getMessages={this.props.getMessages}
                             setCurrentDialogId={this.props.setCurrentDialogId}/>
                <Route path='/messages/:userId?' render={ () => <Chat messages={this.props.messages}
                                                                      currentDialogId={this.props.currentDialogId}
                                                                      getMessages={this.props.getMessages}
                                                                      deleteMessage={this.props.deleteMessage}/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        dialogs: state.messages.dialogs,
        messages: state.messages.messages,
        currentDialogId: state.messages.currentDialogId
    }
}

export default compose(
    connect(mapStateToProps, {getDialogs, getMessages, setCurrentDialogId, deleteMessage}),
    withAuthRedirect
)(MessagesPage)
