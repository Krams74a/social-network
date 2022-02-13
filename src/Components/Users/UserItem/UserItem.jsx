import s from "./UserItem.module.css";
import React from "react";
import userPhoto from "../../../assets/images/user.jpg"
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    const followToUser = (userId) => {
        props.follow(userId)
    }

    const unfollowToUser = (userId) => {
        props.unfollow(userId)
    }

    return (
        <div className={s.userItem}>
            <div className={s.userImageDiv}>
                <img alt="No file" src={props.photos.small !== null ? props.photos.small : userPhoto}/>
            </div>
            <div className={s.userInfoDiv}>
                <div className={s.userNameDiv}>
                    <NavLink to={"/profile/" + props.id} href="#s">{props.name}</NavLink>
                </div>
                <div className={s.userDescriptionDiv}>
                    <p>{props.status || "Нет статуса"}</p>
                </div>
            </div>
            <div className={s.subscribeButtonDiv}>
                {props.followed
                    ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => unfollowToUser(props.id)}>Удалить из друзей</button>
                    : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => followToUser(props.id)}>Добавить в друзья</button>
                }
            </div>
        </div>
    );
}

export default UserItem;
