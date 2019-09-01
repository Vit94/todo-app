import React from 'react'
import styles from './TodoListItem.module.css'

class TodoListItem extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            isChecked: false
        }
        this.onChecked = this.onChecked.bind(this)
    }
    onChecked() {
        this.setState = prevState => {
            return {isChecked: !prevState.isChecked}
        }
    }

    render() {
        return (
            <div className={styles.todoItem}>
                <p>{this.props.todoTitle}</p>
                <input type="checkbox" onChange={this.onChecked} checked={this.state.isChecked}/>
            </div>
        )
    }
}

export default TodoListItem