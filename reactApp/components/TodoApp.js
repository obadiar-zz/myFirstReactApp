import React from 'react'
import ReactDOM from 'react-dom'
import InputLine from './InputLine'
import Todo from "./Todo"
import TodoList from "./TodoList"
import axios from 'axios'

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            dummyData: []
        };
    }
    
    componentDidMount() {

        this.setState({
            dummyData: ["Todo 1", "Todo 2", "Todo 3"].map(x => ({ taskText: x, completed: false}))
        });
    }

    addTodo(itemName){
        axios.post(dbUrl+'/add', {task: itemName})
            .then(function (response) {
                // Do whatever you want with the request's response in here
                this.setState({ todos: this.state.todos.concat(response.data) });
            })
            .catch(function (error) {
                // Do whatever you want in the event of an error in here
                console.log(error)
            });  
    }

    removeTodo(index){
        this.setState({
            dummyData: this.state.dummyData.filter( (x,i) => index!==i)
        });
    }

    toggleToDo(index){
        var copy = this.state.dummyData.slice();
        copy[index].completed = !copy[index].completed;
        this.setState({
            dummy: copy
        })
    }

    render() {
        return (
            <div>
                <InputLine submit={(i) => this.addTodo(i)} />
                <TodoList toggleToDo={(i) => this.toggleToDo(i)} todoXClick={(i) => this.removeTodo(i)} dummyData={this.state.dummyData}/>
            </div>
        );
    }
}

export default TodoApp;