import React from 'react'
export default function InventoryList(props){

const list = props.inventoryItems.map(item=>{
  return <li>item: {item.description}, quantity: {item.quantity}</li>
})

return(
  <ul>
    {list}

  </ul>
  )

}