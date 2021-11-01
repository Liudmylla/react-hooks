import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
const withCardAndParams = (Component) => (props) => {
    const value = null;
    const [isAuth, setIsAuth] = useState();
    useEffect(() => {
        setIsAuth(localStorage.getItem("user") === value);
    }, []);
    const onLogin = () => {
        localStorage.setItem("user", value);
        setIsAuth(true);
    };
    const onLogOut = () => {
        localStorage.setItem("user", "");
        setIsAuth(false);
    };
    return (
        <CardWrapper>
            <Component
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isAuth}
                {...props}
            />
        </CardWrapper>
    );
};

export default withCardAndParams;
