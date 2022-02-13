import s from "./LoginBlock.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const LoginBlock = (props) => {
    return (
        <div className={s.loginBlock}>
            {props.isAuth
                ? <NavLink to={`/profile`}>{props.login}<button className={s.logoutButton} onClick={props.logoutUser}>Выйти</button></NavLink>
                : <NavLink to={`/login`}>Login</NavLink>}
            {/*<div className={s.userPhotoBlock}>
                <img alt="" src={props.userProfile.photos.small ? props.userProfile.photos.small : userPhoto}/>
            </div>*/}
        </div>
    )
}

export default LoginBlock;
