import s from './DescriptionBlock.module.css';
import React from "react";
import Preloader from "../../../../assets/images/preloader/Preloader";
import userPhoto from "../../../../assets/images/user.jpg"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const DescriptionBlock = (props) => {

    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div className={s.descriptionBlock}>
            <div className={s.userInfo}>
                <div className={s.userImgContainer}>
                    <img src={props.userProfile.photos.small !== null ? props.userProfile.photos.small : userPhoto} alt=""/>
                </div>
                <div className={s.userName}>
                    <h3>{props.userProfile.fullName}</h3>
                    <ProfileStatus status={props.status} {...props}/>
                </div>
            </div>
            <div className={s.socialBlock}>
                <button>Подписаться</button>
                <button>Подписаться</button>
                <button>Подписаться</button>
            </div>
        </div>
    );
}

export default DescriptionBlock;
