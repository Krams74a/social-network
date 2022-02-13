import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {loginUser} from "../../redux/authReducer";

class LoginContainer extends React.Component {
    render() {
        if (this.props.isAuth) return <Redirect to={'/profile'} />
        return (
            <div>
                <Login {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginUser})(LoginContainer);
