// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const VillagerList = props => {
  console.log(props)
  return (
    <div className="Favorite-list">
      {props.villagers.map(todo => (
        <Todo key={todo.id} item={todo} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.deleteVillagers}>
      Delete Villager
      </button>
    </div>
  );
};
export default VillagerList;
