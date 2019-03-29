import React, { Component, createRef } from "react";
import v4 from "uuid/v4";
import AppHeader from "./AppHeader";
import Modal from "./Modal";
import OrderList from "./OrderList";
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
  // Ссылка на ДОМ узел. Аналог document.querySelector('div')
  buttonRef = createRef();

  state = {
    menu: menu,
    filter: "",
    notes: [],
    isModalOpen: false,
    clickedOpenModal: false
  };

  componentDidMount() {
    window.addEventListener("click", this.handleModalClick);
    document.addEventListener("keyup", this.handleEscapeModal);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen, clickedOpenModal } = this.state;
    // Компонент обновится, когда следующее состояние не равно текущему состоянию
    // без return не работает. Используется для оптимизации
    // При клике на меню не происходит ре рендер, без этого метода все работает
    return [
      nextState.isModalOpen !== isModalOpen,
      nextState.clickedOpenModal !== clickedOpenModal
    ];
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleModalClick);
    document.removeEventListener("keyup", this.handleEscapeModal);
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleEscapeModal = e => {
    if (e.keyCode === 27) this.closeModal();
  };
  // еще вариант
  // handleEscapeModal = e => {
  //   if (e.codeode !== "Escape") return;
  //   this.closeModal();
  // };

  handleModalClick = e => {
    // console.log('buttonRef', this.buttonRef);
    // isTargetInsideContainer Проверяет, содержится ли ивент (клика или другого) внутри этого ДОМ узла

    const isTargetInsideButton = this.buttonRef.current.contains(e.target);
    console.log("isTargetInsideButton", isTargetInsideButton);
    // При первом клике - активация модалного окна, при втором clickedOpenModal: true
    // Без этой проверки, окно закроется не успев открыться,
    // потому что любой клик не в модальном окне, запускает функцию   onClose();
    if (isTargetInsideButton) {
      this.setState({ clickedOpenModal: false });
    } else {
      this.setState({ clickedOpenModal: true });
    }
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
    const { menu, filter, notes, isModalOpen, clickedOpenModal } = this.state;

    const filteredmenu = filterMenu(filter, menu);
    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal} ref={this.buttonRef}>
          Open Modal
        </button>

        {isModalOpen && (
          <Modal
            onClose={this.closeModal}
            onOpen={this.openModal}
            isModalOpen={isModalOpen}
            clickedOpenModal={clickedOpenModal}
          />
        )}
        <OrderList />
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
