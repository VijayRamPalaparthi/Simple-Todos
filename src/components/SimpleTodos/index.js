import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    checked: false,
    edit: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    checked: false,
    edit: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    checked: false,
    edit: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    checked: false,
    edit: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    checked: false,
    edit: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    checked: false,
    edit: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    checked: false,
    edit: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    checked: false,
    edit: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {taskList: initialTodosList, newInputTitle: '', editInput: ''}

  deleteTask = id => {
    const {taskList} = this.state
    const updated = taskList.filter(each => each.id !== id)
    this.setState({taskList: updated})
  }

  onChangeInput = event => {
    this.setState({newInputTitle: event.target.value})
  }

  onchangeCheckList = Id => {
    const {taskList} = this.state
    const updated = taskList.map(each => {
      if (each.id === Id) {
        return {...each, checked: !each.checked}
      }
      return each
    })
    this.setState({taskList: updated})
  }

  changeEditInput = event => {
    this.setState({editInput: event.target.value})
  }

  editlist = Id => {
    const {taskList, editInput} = this.state
    const updated = taskList.map(each => {
      if (each.id === Id) {
        return {...each, title: editInput, edit: !each.edit}
      }
      return each
    })
    this.setState({taskList: updated})
  }

  addToList = () => {
    const {taskList, newInputTitle} = this.state
    const id = taskList.length + 1
    const titleAsList = newInputTitle.split(' ')
    console.log(titleAsList)
    const newObj = {id, title: newInputTitle, checked: false, edit: false}
    this.setState(prev => ({
      taskList: [...prev.taskList, newObj],
      newInputTitle: '',
    }))
  }

  onChangeEdit = Id => {
    const {taskList} = this.state
    let value = ''
    const updated = taskList.map(each => {
      if (each.id === Id) {
        value = each.title
        return {...each, edit: !each.edit}
      }
      return each
    })
    this.setState({taskList: updated, editInput: value})
  }

  render() {
    const {taskList, newInputTitle, editInput} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              className="input-value"
              onChange={this.onChangeInput}
              value={newInputTitle}
            />
            <button type="button" className="add" onClick={this.addToList}>
              Add
            </button>
          </div>

          <ul className="list-container">
            {taskList.map(each => (
              <TodoItem
                key={each.id}
                obj={each}
                deleteTask={this.deleteTask}
                onchangeCheckList={this.onchangeCheckList}
                onChangeEdit={this.onChangeEdit}
                changeEditInput={this.changeEditInput}
                editlist={this.editlist}
                editValue={editInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
