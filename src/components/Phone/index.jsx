import React from "react";

class   Phone extends React.Component{
    render() {
        const {number} = this.props;
        return <a href={`callto:${number}`}>Appeller</a>;
    };
}
export default Phone;