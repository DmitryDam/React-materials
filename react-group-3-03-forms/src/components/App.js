import React, { Component } from "react";
import v4 from "uuid/v4";
import SignupForm from "./SignupForm";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import NoteFilter from "./NoteFilter";

// Не метод класса, а вспомогательная функция
const filterNotes = (filter, notes) => {
  return notes.filter(note =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    notes: [],
    filter: ""
  };
  // (this.state.text) - пойдет в аргументы в компоненте NoteEditor
  handleAddNote = text => {
    this.setState(prevState => ({
      notes: [{ id: v4(), text: text }, ...prevState.notes]
    }));
  };

  handleDeleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  handleFilterChange = e => {
    console.log("e", e);
    console.log("e.target", e.target);
    console.log("e.target.value", e.target.value);
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    const { notes, filter } = this.state;

    const filteredNotes = filterNotes(filter, notes);

    return (
      <div>
        <h1>Forms in React</h1>
        {/* Передает пропом onSubmit1 метод по добавлению заметок */}
        <NoteEditor onSubmit1={this.handleAddNote} />
        <NoteFilter
          filter={filter}
          onFilterChange={this.handleFilterChange}
          placeholder={"Find notes"}
        />
        <NoteList notes={filteredNotes} onDeleteNote={this.handleDeleteNote} />
        <SignupForm />
      </div>
    );
  }
}
