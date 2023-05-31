import { createContext, useReducer } from "react";
import properties from "../../mock/properties";

const INITIAL_STATE = {
  properties: properties,
};

export const propertyReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PROPERTY_ACTION_TYPES.ADD_PROPERTY:
      return {
        ...state,
        properties: [...state.properties, payload],
      };
    case PROPERTY_ACTION_TYPES.REMOVE_PROPERTY:
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.id !== payload
        ),
      };
    case PROPERTY_ACTION_TYPES.UPDATE_PROPERTY:
      return {
        ...state,
        properties: state.properties.map((property) => {
          if (property.id === payload.id) {
            return { ...property, ...payload.changes };
          } else {
            return property;
          }
        }),
      };
    case PROPERTY_ACTION_TYPES.ADD_RATING:
      return {
        ...state,
        properties: state.properties.map((property) => {
          if (property.id === payload.propertyId) {
            return {
              ...property,
              ratings: [...property.ratings, payload.rating],
            };
          } else {
            return property;
          }
        }),
      };
    default:
      return state;
  }
};

export const PROPERTY_ACTION_TYPES = {
  ADD_PROPERTY: "ADD_PROPERTY",
  REMOVE_PROPERTY: "REMOVE_PROPERTY",
  UPDATE_PROPERTY: "UPDATE_PROPERTY",
  ADD_RATING: "ADD_RATING",
};

export const addProperty = (property) => ({
  type: PROPERTY_ACTION_TYPES.ADD_PROPERTY,
  payload: property,
});

export const removeProperty = (propertyId) => ({
  type: PROPERTY_ACTION_TYPES.REMOVE_PROPERTY,
  payload: propertyId,
});

export const updateProperty = (propertyId, changes) => ({
  type: PROPERTY_ACTION_TYPES.UPDATE_PROPERTY,
  payload: { id: propertyId, changes },
});

export const addRating = (propertyId, rating) => ({
  type: PROPERTY_ACTION_TYPES.ADD_RATING,
  payload: { propertyId, rating },
});

export const selectAllProperties = (store) => store.property.properties;

export const selectPropertiesByPage = (store, pageNumber, pageSize) => {
  const allProperties = selectAllProperties(store);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return allProperties.slice(startIndex, endIndex);
};
