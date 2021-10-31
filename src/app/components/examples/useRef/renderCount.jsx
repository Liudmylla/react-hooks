import React, { useEffect, useState, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Count renders</SmallTitle>
            <p>Render count: {renderCount.current}</p>
            <button className=" btn btn-secondary" onClick={toggleOtherState}>
                Count
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
