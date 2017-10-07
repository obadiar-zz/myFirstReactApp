import React from 'react'
import ReactDOM from 'react-dom'
class InputLine extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            text: ""
        }
    }

    clickHandler(i) {
        this.props.submit(i);
        this.setState({
            text: ""
        })
    }

    textHandler(e) {
        this.setState({
            text: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="task" id="input-text" onChange={(event)=>this.textHandler(event)} value={this.state.text}></input>
                <input onClick={() => this.clickHandler(this.state.text)} type="submit" value="Add todo"></input>
            </div>
        );
    }
}

export default InputLine;