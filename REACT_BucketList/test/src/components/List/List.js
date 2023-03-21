import React from 'react'
import ListItem from '../ListItem/ListItem';

export default function List(props) {
  const { itemList, ToggleComplete, deleteItem } = props


  let list = itemList.map((item) => {
    return  (
      <ListItem 
      description={item.description}
      id={item._id}
      key={item._id}
      isComplete={item.isComplete}
      ToggleComplete={ToggleComplete}
      deleteItem={deleteItem}
      />
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )
}
