import React, { useEffect, useRef, useCallback, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withCallBack = useRef(0);
    const withOutCallBack = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // without CallBack
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);

    // with callBack
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render without callBack : {withOutCallBack.current}</p>
            <p>Render with callBack : {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChange}
                name="email"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
