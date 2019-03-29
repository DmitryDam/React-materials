import React, { Component, createRef } from 'react';
// import React, { PureComponent, createRef } from 'react';
// PureComponent альтернатива shouldComponentUpdate(nextProps, nextState)
// Делает поверхностное сравнение пропов, если они не примитивы
import Dropdown from './Dropdown';
import Avatar from './Avatar';

export default class UserMenu extends Component {
  // Ссылка на ДОМ узел. Аналог document.querySelector('div')
  containerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;
    // Компонент обновится, когда следующее состояние не равно текущему состоянию
    // без return не работает. Используется для оптимизации
    // При клике на меню не происходит ре рендер, без этого метода все работает
    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    console.log('containerRef', this.containerRef);
    // Покажет: containerRef {current: div.UserMenu} - ссылка на ДОМ узел
    // isTargetInsideContainer Проверяет, содержится ли ивент (клика или другого) внутри этого ДОМ узла
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isDropdownOpen } = this.state;
    // Если состояние isDropdownOpen - true и ивент за пределами контейнера, выполняем  this.closeDropdown();
    if (isDropdownOpen && !isTargetInsideContainer) {
      console.log('sdf');
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { name, avatar } = this.props;

    console.log('RENDER');

    return (
      <div
        onClick={this.openDropdown}
        className="UserMenu"
        // Ссылка на выпадающее меню ref={this.containerRef}
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <span className="UserName">{name}</span>
        {isDropdownOpen && <Dropdown />}
      </div>
    );
  }
}
