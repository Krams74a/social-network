import s from './Users.module.css';
import React from "react";
import UserItem from "./UserItem/UserItem";
import Paginator from "./Paginator";

const Users = (props) => {
    return (
        <div className={s.users}>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            <div>
                {
                    props.usersInfo.map(u => <UserItem key={u.id}
                                                       status={u.status}
                                                       id={u.id}
                                                       name={u.name}
                                                       photos={u.photos}
                                                       followed={u.followed} {...props}/>)
                }
            </div>
        </div>
    )
}

export default Users;
