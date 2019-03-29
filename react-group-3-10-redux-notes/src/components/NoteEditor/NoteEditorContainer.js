import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';

import { notesActions } from '../../modules/notes';
// 50:00 Нюансы с импортом экшенов сюда
const mapDispatchToProps = { addNote: notesActions.addNote };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
