// Write your code here
import './index.css'

const TodoItem = props => {
  const {
    obj,
    deleteTask,
    onchangeCheckList,
    onChangeEdit,
    changeEditInput,
    editlist,
    editValue,
  } = props

  const {id, title, checked, edit} = obj
  const checkStatus = checked ? 'striked title' : 'title'
  const removeTask = () => {
    deleteTask(id)
  }
  const triggerChecklist = () => {
    onchangeCheckList(id)
  }
  const changeEditMode = () => {
    onChangeEdit(id)
  }

  const sendList = () => {
    editlist(id)
  }
  return (
    <li className="list">
      <div className="title-box">
        <input
          type="checkbox"
          className="checkbox"
          onChange={triggerChecklist}
        />
        {edit ? (
          <input
            className="edit-input"
            onChange={changeEditInput}
            type="text"
            value={editValue}
          />
        ) : (
          <p className={checkStatus}>{title}</p>
        )}
      </div>
      <div className="todo-button-container">
        {edit ? (
          <button className="edit" type="button" onClick={sendList}>
            {' '}
            Save{' '}
          </button>
        ) : (
          <button className="edit" type="button" onClick={changeEditMode}>
            {' '}
            Edit{' '}
          </button>
        )}

        <button type="button" className="delete" onClick={removeTask}>
          {' '}
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
