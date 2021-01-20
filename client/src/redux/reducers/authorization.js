const LOGIN = 'chat/authorization/LOGIN';
const LOGOUT = 'chat/authorization/LOGOUT';

const initialState = {
  user: null,
  password: null,
  isAuthenticated: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...state, ...action.payload };
    }
    case LOGOUT: {
      return { ...state, user: null, password: null, isAuthenticated: false };
    }
    default:
      return state;
  }
}

export function login(objUser) {
  return { type: LOGIN, payload: objUser };
}

export function logout() {
  return { type: LOGOUT };
}
