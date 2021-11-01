import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {!isAuth ? (
                <button className="btn btn-primary" onClick={onLogin}>
                    Login
                </button>
            ) : (
                <button className="btn btn-secondary" onClick={onLogOut}>
                    Login Out
                </button>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogOut: PropTypes.func,
    onLogin: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
