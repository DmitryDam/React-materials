import React, { Component, createRef } from 'react';

export default class Modal extends Component {
  // Ссылка на ДОМ узел. Аналог document.querySelector('div')
  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const { isModalOpen, onClose, clickedOpenModal } = this.props;
    console.log('containerRef', this.containerRef);
    // containerRef  - ссылка на ДОМ узел
    // isTargetInsideContainer Проверяет, содержится ли ивент (клика или другого) внутри этого ДОМ узла
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    //   // Если состояние isDropdownOpen - true и ивент за пределами контейнера, выполняем  this.closeDropdown();
    if (isModalOpen && clickedOpenModal && !isTargetInsideContainer) {
      onClose();
    }
  };
// Альтернативный вариант, повесить событие onClick на backdrop, если клик 
// handleWindowClick = e => {
//   if (e.target!==this.backdropRef.current) return;
//   this.props.onClose();
// }
  render() {
    const { onClose } = this.props;

    return (
      <div className="Backdrop">
        <div className="ModalWindow" ref={this.containerRef}>
          {/* Ссылка на модальное окно ref={this.containerRef} */}

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur totam quas quidem, aliquid
            voluptatem nisi, nobis expedita quis?
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
