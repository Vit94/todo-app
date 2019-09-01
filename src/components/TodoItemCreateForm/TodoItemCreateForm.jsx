import React from 'react'
import styles from './TodoItemCreateForm.module.css'

class TodoItemCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(e) {
        this.setState({
            value: e.currentTarget.value
        })
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.props.setValue(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        return(
            <div className={styles.createForm}>
                <form>
                    <input type="text" placeholder="Напишите задачу" value={this.state.value} onChange={this.onInputChange}/>
                    <button onSubmit={this.onFormSubmit}>Создать</button>
                </form>
            </div>
        )
    }
}

export default TodoItemCreateForm