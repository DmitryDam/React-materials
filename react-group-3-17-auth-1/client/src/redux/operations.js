import axios from "axios";
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess
} from "./actions";
import * as selectors from "./selectors";
// 45:30 дефолтные настройки Axios
axios.defaults.baseURL = "http://localhost:4040";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());

  axios
    .post("/auth/signup", credentials)
    .then(response => {
      console.log(response);
      dispatch(signUpSuccess(response.data));
    })
    .catch(error => dispatch(signUpError(error)));
};
// data:
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lc3RhbXAiOjE1NDgzMzk0MTQwNzUsImlkIjoiUzBWZVZyblc3IiwiaWF0IjoxNTQ4MzM5NDE0fQ.EyIWcTMtW_v6qUG85TInUE46K35dspHaLAwFh5n10kY"
// user:
// email: "3@ukr.net"
// id: "S0VeVrnW7"
// name: "3"
// ================================
// Ниже вариант без консоли
// axios
// .post('/auth/signup', credentials)
// .then(({ data }) => dispatch(signUpSuccess(data)))
// .catch(error => dispatch(signUpError(error)));
// };

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());

  axios
    .post("/auth/signin", credentials)
    .then(({ data }) => dispatch(signInSuccess(data)))
    .catch(error => dispatch(signInError(error)));
};
// 48 минута
export const signOut = () => (dispatch, getState) => {
  dispatch(signOutRequest());
  // const getToken = state => state.session.token;
  const token = selectors.getToken(getState());
  // Передается третьим аргументом в axios
  // .post("/auth/signout", {}, config)
  const config = {
    headers: {
      Authorization: token
    }
  };

  axios
    .post("/auth/signout", {}, config)
    .then(() => dispatch(signOutSuccess()));
};
