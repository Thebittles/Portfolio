import React from 'react'

export default function Input(props) {
    const { newItem, handleChange } = props;
  return (
    <input
    type="text"
    name="newItem"
    placeholder="Enter a new bucket list item..."
    value={newItem}
    onChange={handleChange}
  />
  )
}
