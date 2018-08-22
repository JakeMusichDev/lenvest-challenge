import React from 'react'

const ModalItemDetail = props => {
  return (
    <div>
      {props.currItem ? props.currItem.title : null }
    </div>
  )
}

export default ModalItemDetail