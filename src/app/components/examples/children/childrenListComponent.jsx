import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "../../common/Card";
const ChildrenListComponent = ({ children }) => {
    return (
        <ol>
            {React.Children.map(children, (child) => {
                return <li>{child}</li>;
            })}
        </ol>
    );
};
ChildrenListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = () => {
    return <>Element of list</>;
};
const Children = () => {
    return (
        <CardWrapper>
            <ChildrenListComponent>
                <Component />
                <Component />
                <Component />
            </ChildrenListComponent>
        </CardWrapper>
    );
};

export default Children;
