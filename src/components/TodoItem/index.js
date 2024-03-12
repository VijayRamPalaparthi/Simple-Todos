// Write your code here
import './index.css'

const TodoItem = props => {
  const {obj, deleteTask} = props
  const {id, title} = obj
  const removeTask = () => {
    deleteTask(id)
  }
  return (
    <li className="list">
      <p className="title">{title}</p>
      <button type="button" className="delete" onClick={removeTask}>
        {' '}
        Delete
      </button>
    </li>
  )
}

export default TodoItem
