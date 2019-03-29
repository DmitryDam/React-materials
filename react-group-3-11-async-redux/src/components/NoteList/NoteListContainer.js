import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteList from './NoteList';
// import { getItems } from '../../modules/notes/notesSelectors';
// import { deleteNote } from '../../modules/notes/notesActions';

import {
  notesActions,
  notesSelectors,
  notesOperations,
} from '../../modules/notes';
// так приходят  notesOperations
// export default { fetchNotes, addNote, deleteNote };
// export { default as notesOperations } from './notesOperations';
class NoteListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes1();
    // из mapDispatchToProps
  }

  render() {
    const { fetchNotes1, ...restProps1 } = this.props;
    console.log('this.props', this.props);
    // прокидываем пропы все
    // deleteNote: ƒ ()
    // fetchNotes: ƒ ()
    // notes: []
    // toggleNote: ƒ ()
    return <NoteList {...restProps1} />;
  }
}

const mapStateToProps = state => ({
  notes: notesSelectors.getVisibleNotes(state),
});

const mapDispatchToProps = {
  fetchNotes1: notesOperations.fetchNotes,
  deleteNote: notesOperations.deleteNote,
  toggleNote: notesActions.toggleNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListContainer);
