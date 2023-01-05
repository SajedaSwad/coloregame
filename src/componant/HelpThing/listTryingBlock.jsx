import React from 'react'
import ColorCardTrying from './colorCardTrying';
import './listTryingBlock.css'

const ListTryingBlock = (props) => {
  return (
    <div className='list_block'>
      {props.list?.map((card, i) => {
        return <ColorCardTrying
        key={i + card}
        stats={card.states}
        colors={card.colors} 
        />
        })}

      
       
    </div>
  )
}

export default ListTryingBlock;
