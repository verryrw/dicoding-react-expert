import { register } from "../../utils/network-api";
import { asyncSetAuthUser } from "../auth_user/action";

const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users: users,
    },
  };
}

function asyncRegister({ name, email, password }) {
  return async (dispatch) => {
    try {
      await register({ name, email, password });
      dispatch(asyncSetAuthUser(email, password));
    } catch (e) {
      alert(e.message);
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegister };