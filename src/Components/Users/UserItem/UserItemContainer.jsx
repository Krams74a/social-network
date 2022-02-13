import {connect} from "react-redux";
import UserItem from "./UserItem";
import {followSuccess, unfollowSuccess, toggleFollowingProgress} from "../../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersInfo: state.usersInfo,
        currentPage: state.currentPage
    }
}

const UserItemContainer = connect(mapStateToProps, {
    addFriend: followSuccess,
    removeFriend: unfollowSuccess
})(UserItem);

export default UserItemContainer;
