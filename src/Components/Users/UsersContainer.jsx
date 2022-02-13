import Users from "./Users";
import {connect} from "react-redux";
import {
    getUsers,
    follow,
    unfollow, getTotalUsersCountFromAPI, setCurrentPage,
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../../assets/images/preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersInfo
} from "../../redux/selectors/user-selector";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        this.props.getTotalUsersCountFromAPI()
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                <Users {...this.props} onPageChanged={this.onPageChanged}/>
                {this.props.isFetching ? <Preloader /> : null}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersInfo: getUsersInfo(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const UsersContainer = connect(mapStateToProps, {follow, unfollow, getUsers, getTotalUsersCountFromAPI, setCurrentPage})(UsersAPI);

export default UsersContainer;
