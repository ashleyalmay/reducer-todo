import React from 'react';

const Item = props => {
  
  return (
    <div onClick={() => props.toggleItem(props.item.id)}
     
     style={{textDecoration: props.item.purchased ? 'line-through' : ""}}>

      <p>{props.item.name}</p>
    </div>
    
  );
};

export default Item;