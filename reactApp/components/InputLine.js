import React from 'react'
import ReactDOM from 'react-dom'
class InputLine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="task"></input>
                <input type="submit" value="Add todo"></input>
            </div>
        );
    }
}

export default InputLine;