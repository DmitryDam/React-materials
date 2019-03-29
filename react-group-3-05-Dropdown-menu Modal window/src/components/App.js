import React, { Component, createRef } from 'react';
import AppHeader from './AppHeader';
import Modal from './Modal';

export default class App extends Component {
  // Ссылка на ДОМ узел. Аналог document.querySelector('div')
  buttonRef = createRef();

  state = {
    isModalOpen: false,
    clickedOpenModal: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleModalClick);
    document.addEventListener('keyup', this.handleEscapeModal);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen, clickedOpenModal } = this.state;
    // Компонент обновится, когда следующее состояние не равно текущему состоянию
    // без return не работает. Используется для оптимизации
    // При клике на меню не происходит ре рендер, без этого метода все работает
    return [
      nextState.isModalOpen !== isModalOpen,
      nextState.clickedOpenModal !== clickedOpenModal,
    ];
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleModalClick);
    document.removeEventListener('keyup', this.handleEscapeModal);
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

  handleModalClick = e => {
    // console.log('buttonRef', this.buttonRef);
    // isTargetInsideContainer Проверяет, содержится ли ивент (клика или другого) внутри этого ДОМ узла

    const isTargetInsideButton = this.buttonRef.current.contains(e.target);
    console.log('isTargetInsideButton', isTargetInsideButton);
    // При первом клике - активация модалного окна, при втором clickedOpenModal: true
    // Без этой проверки, окно закроется не успев открыться,
    // потому что любой клик не в модальном окне, запускает функцию   onClose();
    if (isTargetInsideButton) {
      this.setState({ clickedOpenModal: false });
    } else {
      this.setState({ clickedOpenModal: true });
    }
  };

  render() {
    const { isModalOpen, clickedOpenModal } = this.state;

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
      </div>
    );
  }
}
