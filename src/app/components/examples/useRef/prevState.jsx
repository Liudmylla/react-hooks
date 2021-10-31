import React, { useEffect, useState, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Prev state</SmallTitle>
            <p>Prev state: {prevState.current}</p>
            <p>Current state: {otherState}</p>
            <button className="btn btn-secondary" onClick={toggleOtherState}>
                Toggle
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
