import s from './MyPosts.module.css';
import * as React from "react";

const MyPosts = React.memo((props) => {
    return (
        <div>
            <div className={s.posts}>
                {props.postsElements}
            </div>
        </div>
    );
})

export default MyPosts;
