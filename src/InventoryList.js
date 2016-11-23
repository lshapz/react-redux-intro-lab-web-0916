import React from 'react'
const InventoryList = (props) => {

// let list = ""
// if (props.inventoryItems) {
//   list = 
// debugger 
return(
  <ul>
    {props.inventoryItems.map((item, idx)=>{
  return <li key={idx}>item: {item.description}, quantity: {item.quantity}</li>
})}

  </ul>
  )

}
InventoryList.defaultProps = {
  inventoryItems: [{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}]
};

export default InventoryList;
