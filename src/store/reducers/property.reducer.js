import { createContext, useReducer } from "react";
import properties from "../../mock/properties";

const INITIAL_STATE = {
  properties: properties,
};

export const propertyReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNTER_ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case COUNTER_ACTION_TYPES.RESET:
      return { ...state, count: 1 };
    default:
      return state;
  }
};

export const COUNTER_ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

export const increment = () => ({ type: COUNTER_ACTION_TYPES.INCREMENT });
export const decrement = () => ({ type: COUNTER_ACTION_TYPES.DECREMENT });
export const reset = () => ({ type: COUNTER_ACTION_TYPES.RESET });

export const selectProperties = (store) => store.property.properties;
