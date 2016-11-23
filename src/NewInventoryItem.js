import React, { Component } from 'react'
export default function NewInventoryItem(props){
  function submitItemForm(event){
    event.preventDefault()
    const quant = event.target.children[1].value
    const desc = event.target.children[3].value
    props.triggerCreateItem(quant, desc)

  }

return(
  <form onSubmit={submitItemForm}>
    <label>QUANT</label><input type="text" id="quantity" />
    <label>DESCRIPTION</label><input type="text" id="description" />
   <input type="button" /> 
  </form>
  )

}