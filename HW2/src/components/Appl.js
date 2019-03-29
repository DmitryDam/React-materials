import React, { Component } from "react";
import v4 from "uuid/v4";
import AppHeader from "./AppHeader";
import Modal from "./Modal";
import OrderPage from "./OrderPage";
import SignupForm from "./SignupForm";
import NoteFilter from "./NoteFilter";
import MenuList from "./MenuList";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import menu from "./menu.json";

const filterMenu = (filter, menu) => {
  return menu.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class Appl extends Component {
  state = {
    menu: menu,
    filter: "",
    notes: [],
    isModalOpen: false
  };

  componentDidMount() {
    window.addEventListener("keyup", this.handleEscapeModal);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen } = this.state;
    // Компонент обновится, когда следующее состояние не равно текущему состоянию
    // без return не работает. Используется для оптимизации
    return nextState.isModalOpen !== isModalOpen;
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleEscapeModal);
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleEscapeModal = e => {
    // console.log(e);
    if (e.keyCode === 27) this.closeModal();
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  handleAddNote = (text, age) => {
    this.setState(prevState => ({
      notes: [{ id: v4(), text: text, age: age }, ...prevState.notes]
    }));
  };

  handleDeleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  render() {
    const { menu, filter, notes, isModalOpen } = this.state;

    const filteredmenu = filterMenu(filter, menu);
    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>

        {isModalOpen && (
          <Modal onClose={this.closeModal} onOpen={this.openModal} />
        )}
        <OrderPage />
        <SignupForm />
        <NoteFilter
          filter={filter}
          onFilterChange={this.handleFilterChange}
          placeholder={"Find menu"}
        />
        <MenuList menu={filteredmenu} />
        <NoteEditor onSubmit1={this.handleAddNote} />
        <NoteList notes={notes} onDeleteNote={this.handleDeleteNote} />
      </div>
    );
  }
}
