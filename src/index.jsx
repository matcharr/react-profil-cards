import React from "react";
import ReactDOM from "react-dom";
import Clients from "./components/Clients";

class App extends React.Component {
    render() {
        return (
            <div className='d-flex flex-wrap justify-content-around'>
                <Clients />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));