import React from "react";

class   Email extends React.Component{
    render(){
        const {firstName, lastName} = this.props;
        return <a href={`mailto:${lastName.toLowerCase()}.${firstName.toLowerCase()}@gmail.com`}>Contacter</a>;
    };
}
export default Email;