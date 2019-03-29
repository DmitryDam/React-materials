import { connect } from 'react-redux';
import NoteFilter from './NoteFilter';

import { notesActions, notesSelectors } from '../../modules/notes';

const mapStateToProps = state => ({
  value: notesSelectors.getFilter(state),
});
// const getFilter = state => state.notes.filter;

const mapDispatchToProps = { onChange: notesActions.changeFilter };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFilter);

// from '../../modules/notes';
// export { default as notesActions } from './notesActions';
// Куски стейта
// export { default as notesSelectors } from './notesSelectors';
// 1:10
// ============
// Action
// ============
// const changeFilter = filter => ({
//   type: types.CHANGE_FILTER,
//   payload: filter,
// });
