import s from "./Messages.module.css";
import Message from "../Message/Message";

const Messages = (props) => {
    return (
        <div className={s.messagesContainer}>
            { props.messages.map(message => <Message deleteMessage={props.deleteMessage}
                                                     senderName={message.senderName}
                                                     key={message.id}
                                                     messageText={message.body}
                                                     id={message.id}
                                                     isViewed={message.viewed}/> )}
        </div>
    );
}

export default Messages;
