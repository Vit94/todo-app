import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import TodoItemCreateForm from '../TodoItemCreateForm/TodoItemCreateForm' 

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: []
        }
    }
    setValue = (val) => {
        this.setState({
            values: [...this.state.values, val]
        })
    }   

    render() {
        return(
            <div>
                <TodoItemCreateForm setValue={this.setValue}/>
                {this.state.values && this.state.values.map(value => <TodoListItem todoTitle={value}/>)}
            </div>
        )
    }
}

export default TodoList