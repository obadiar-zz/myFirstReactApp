import React from 'react'
import ReactDOM from 'react-dom'
import Todo from "./Todo"

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <ul>
                    {this.props.dummyData.map(x => <Todo key={x.taskText} todo={x} />)}
                </ul>
        );
    }
}

export default TodoList;