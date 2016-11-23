import React from 'react'
export default function InventoryList(props){

let list = ""
if (props.inventoryItems) {
  list = props.inventoryItems.map(item=>{
  return <li>item: {item.description}, quantity: {item.quantity}</li>
})}

return(
  <ul>
    {list}

  </ul>
  )

}