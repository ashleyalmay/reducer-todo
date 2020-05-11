import React, {useReducer} from 'react';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';
import {reducer, villagers} from './reducers/reducer';
import './App.css';


function App(){

  const [villagerState, dispatch] = useReducer(reducer, villagers);

  const addVillager = addVillager => {
    dispatch({ type: "ADD_VILLAGER", payload: addVillager });
  };
  const toggleItem = id => {
    dispatch({ type: "TOGGLE_ITEM", payload: id });
  };
  const deleteVillagers = () => {
    
    dispatch({ type: "DELETE_VILLAGER" });

  };  

    return (
      <div className="App">
        <div className="App-header">
          <h1>Animal Crossing Villager List!</h1>
          <TodoList villagers={villagerState} toggleItem={toggleItem}
          deleteVillagers={deleteVillagers} />
        </div>
        <TodoForm addVillager={addVillager}/> 
      </div>
      
    );
  }

export default App;
