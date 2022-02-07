import { TOGGLE_IS_VISIBLE, UPDATE_PROFILE_DATA } from "./types";

const initialState = {
  firstName: "firstName",
  lastName: "lastName",
  numberTel: "89009008777",
  isVisible: true,
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_VISIBLE:
      return { ...state, isVisible: !state.isVisible };
    case UPDATE_PROFILE_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
