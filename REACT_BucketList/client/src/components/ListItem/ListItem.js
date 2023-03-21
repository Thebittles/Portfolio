import React from 'react'
import { FiDelete, FiCheck } from 'react-icons/fi';


export default function ListItem(props) {
  const { description, id, isComplete, ToggleComplete, deleteItem } = props;

  return (
    <li
      className={isComplete ? "completed" : ""}
      key={id}
      id={id}
      onClick={ToggleComplete}
    >
      {isComplete ? <span className="check"><FiCheck /></span> : ""}
      {description}
      <span className="delete" onClick={e => { deleteItem(id) }}>
        <FiDelete />
      </span>
    </li>
  )
}
