import React from 'react'
import ReactDOM from 'react-dom'
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <button onClick={()=>this.props.xClick()}>X</button>
                <span onClick={()=>this.props.toggle()} className={this.props.todo.completed ? 'strike-text' : ''}>{this.props.todo.taskText}</span>
            </li>
        );
    }
}

export default Todo;