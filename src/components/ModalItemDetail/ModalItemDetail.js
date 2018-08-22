import React from 'react'

const ModalItemDetail = props => {
  return (
    <div>
      {props.currItem ? props.currItem.id : null }
    </div>
  )
}

export default ModalItemDetail