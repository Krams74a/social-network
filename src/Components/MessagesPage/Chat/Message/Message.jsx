import s from './Message.module.css';
import userPhoto from "../../../../assets/images/user.jpg";

const Message = (props) => {
    const onDeleteButtonClick = () => {
        props.deleteMessage(props.id)
    }

    return (
        <div className={`${s.messageContainer} ${props.isViewed ? s.isViewed : null}`}>
            <div className={s.userImageContainer}>
                {props.photo ? <img src={props.photo} alt="Not load"/> : <img src={userPhoto} alt="Not load"/>}
            </div>
            <div className={s.messageContent}>
                <div className={s.userName}>
                    <a href="#s">{props.senderName}</a>
                </div>
                <div className={s.messageText}>
                    <p>{props.messageText}</p>
                </div>
            </div>
            <div>
                <button onClick={onDeleteButtonClick}>Delete</button>
            </div>
        </div>
    );
}

export default Message;
