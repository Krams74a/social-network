import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../../assets/images/user.jpg"

const DialogItem = (props) => {

    const onDialogClick = () => {
        props.setCurrentDialogId(props.id)
    }

    return (
        <NavLink to={"/messages/"+props.id} activeClassName={s.dialogItemActive} className={s.dialogItem} onClick={onDialogClick}>
            <div className={s.userImg}>
                {props.photo ? <img src={props.photo} alt="User"/> : <img src={userPhoto} alt={"User"}/>}
            </div>
            <div className={s.userName}>
                <p>{props.userName}</p>
            </div>
        </NavLink>
    );
}

export default DialogItem;
