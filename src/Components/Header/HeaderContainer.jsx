import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {logoutUser} from "../../redux/authReducer";
import {getProfile} from "../../redux/profileReducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    userProfile: state.profile.userProfile
})

export default connect(mapStateToProps, {getProfile, logoutUser})(HeaderContainer);

