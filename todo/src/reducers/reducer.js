import React, { useState, useReducer } from "react";


export const villagers = [
  {
    name: "Raymond",
    id: 123,
    purchased: false
  },
  {
    name: "Lucky",
    id: 124,
    purchased: false
  },
  {
    name: "Bob",
    id: 1235,
    purchased: false
  },
  {
    name: "Diana",
    id: 1246,
    purchased: false
  },
  {
    name: "Ankha",
    id: 1237,
    purchased: false
  },
  {
    name: "Ketchup",
    id: 1248,
    purchased: false
  },
  {
    name: "Dobie",
    id: 1259,
    purchased: false
    },
];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_VILLAGER':
          const newVillager = {
            name: action.payload,
            id: Date.now(),
            purchased: false
          };
          
      return [
        ...state,newVillager
        
      ];
     case 'TOGGLE_ITEM':
      return state.map(item =>{
        if (item.id === action.payload){
          return {
            ...item,
            purchased: !item.purchased
          }
        } else {
            return item;
          }
        });
        case "DELETE_VILLAGER":
          return state.filter(name => !name.purchased);
    
        default:
          return state;
      }
    };     