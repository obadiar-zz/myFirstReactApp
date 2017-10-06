import React from 'react'
import ReactDOM from 'react-dom'
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <button>X</button>
                {this.props.todo.completed ? <strike className="strike-text">{this.props.todo.taskText}</strike> : this.props.todo.taskText}
            </li>
        );
    }
}

export default Todo;