// Разделяет логику подключения компонента к редаксу(store)
// Не в самом компоненте NoteList а тут
import { connect } from 'react-redux';
import NoteList from './NoteList';
// import { getItems } from '../../modules/notes/notesSelectors';
// import { deleteNote } from '../../modules/notes/notesActions';
// 1:10 экспотры. Одной строкой вместо верхних двух
import { notesActions, notesSelectors } from '../../modules/notes';

const mapStateToProps = state => ({
  notes: notesSelectors.getVisibleNotes(state),
});
// 1:03 deleteNote
// 1:22 toggleNote
const mapDispatchToProps = {
  deleteNote: notesActions.deleteNote,
  toggleNote: notesActions.toggleNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);

// mapStateToProps(state, [ownProps]) - функция соединяющая часть состояния (state) с пропами
// компонента. Таким образом, связанный компонент будет иметь доступ к необходимой ему части
// состояния (state).

// mapDispatchToProps(dispatch, [ownProps]) - функция соединяющая отправку действий (actions) с
// пропами компонента. Таким образом, связанный компонент сможет отправлять действия посредством
// вызова методов указанных в возвращаемом объекте.
