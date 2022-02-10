import { TOGGLE_IS_VISIBLE, UPDATE_PROFILE_DATA } from "./types";

export const toggle_is_visible = () => {
  return { type: TOGGLE_IS_VISIBLE };
};

export const update_profile_data = (profile) => {
  return { type: UPDATE_PROFILE_DATA, payload: profile };
};
