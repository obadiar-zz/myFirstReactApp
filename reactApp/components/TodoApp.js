import React from 'react'
import ReactDOM from 'react-dom'
import InputLine from './InputLine'
import Todo from "./Todo"
import TodoList from "./TodoList"


class TodoApp extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            dummyData: []
        };
    }
    
    componentDidMount() {

        this.setState({
            dummyData: ["Todo 1", "Todo 2", "Todo 3"].map(x => ({ taskText: x, completed: Math.random() < 0.5 }))
        });
    }

    render() {
        return (
            <div>
                <InputLine />
                <TodoList dummyData={this.state.dummyData}/>
            </div>
        );
    }
}

export default TodoApp;