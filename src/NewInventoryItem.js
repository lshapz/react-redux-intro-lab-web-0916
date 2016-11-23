import React from 'react'
export default function NewInventoryItem(props){
  function submitItemForm(event){
    event.preventDefault()
    const quant = event.target.children[1].value
    const desc = event.target.children[3].value
    props.triggerCreateItem(quant, desc)

  }

return(
  <form onSubmit={submitItemForm}>
<p>    <label>QUANT</label><input type="text" id="quantity" /></p>
<p>    <label>DESCRIPTION</label><input type="text" id="description" /></p>
  <input type="text" id="why" />
<p>   <button type="submit">SUBMIT</button> </p>
  </form>
  )

}