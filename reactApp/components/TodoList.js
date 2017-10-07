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
                    {this.props.dummyData.map((item,index) => <Todo key={item.taskText} todo={item} xClick={()=>this.props.todoXClick(index)} toggle={()=>this.props.toggleToDo(index)}/>)}
                </ul>
        );
    }
}

export default TodoList;