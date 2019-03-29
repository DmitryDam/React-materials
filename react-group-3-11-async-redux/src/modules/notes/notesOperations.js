//   const thunk = ({ dispatch, getState }) => next => action =>
// typeof action === 'function' ? action(dispatch, getState) :
// next(action); если не функция - игнорирует

// { dispatch, getState } -деструктуризированный state
import axios from 'axios';
import actions from './notesActions';

const fetchNotes = () => async (dispatch, getState) => {
  dispatch(actions.fetchRequest());
  // fetchRequest() как вызов функции
  // ACTION получение данных идет без этого(для loading,error)
  //   const fetchRequest = () => ({
  //     type: types.FETCH_REQUEST,
  //   });
  try {
    const response = await axios.get('http://localhost:4040/notes');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addNote = text => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .post('http://localhost:4040/notes', { text, completed: false })
    .then(({ data }) => dispatch(actions.addNoteSuccess(data)))
    // .then(response => {
    //   dispatch(actions.addNoteSuccess(response.data));
    // })
    .catch(error => dispatch(actions.fetchError(error)));
};

const deleteNote = id => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .delete(`http://localhost:4040/notes/${id}`)
    .then(() => {
      dispatch(actions.deleteNoteSuccess(id));
    })
    .catch(error => {
      dispatch(actions.fetchError(error));
    });
};

export default { fetchNotes, addNote, deleteNote };

// Axios
// https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

let action = {
  type: false,
  meta: {
    throttle: 2000,
    shouldConfirm: true,
  },
};
console.log(action.type);
const throttled = {};
// throttled = {} - ключ переключатель
throttled[action.type] = true;
let qqq = console.log(!!throttled[action.type]);
