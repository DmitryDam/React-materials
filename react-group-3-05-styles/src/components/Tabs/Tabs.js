import React, { Component } from 'react';
import Tab from './Tab';
import s from './Tabs.module.css';

export default class Tabs extends Component {
  state = { activeTabIndex: 0 };

  // Оптимизировал... Что бы компонент перерендерывался не при каждом клике, а при изменении State
  shouldComponentUpdate(nextProps, nextState) {
    const { activeTabIndex } = this.state;
    return nextState.activeTabIndex !== activeTabIndex;
  }

  // Состояние меняется по номеру элемента в массиве
  changeActiveTabIndex = idx => {
    this.setState({ activeTabIndex: idx });
  };

  render() {
    const { activeTabIndex } = this.state;
    const { items } = this.props;
    console.log('render');

    const activeTabContent = items[activeTabIndex].content;
    // items - массив объектов, [activeTabIndex] - индекс массива 1:18:00
    console.log('activeTabContent', activeTabContent);
    // activeTabContent содержит в себе title и text. Ниже деструктуризировал,
    // что бы в компонент Tab передавать title и text, а не activeTabContent.text activeTabContent.title
    const { title, text } = items[activeTabIndex].content;

    return (
      <div className={s.container}>
        <div className={s.actions}>
          {items.map((item, index) => (
            <button
              className={index === activeTabIndex ? s.active : s.button}
              type="button"
              key={item.label}
              onClick={() => this.changeActiveTabIndex(index)}
              // Определяет текущий индекс элемента
              // () => this.changeActiveTabIndex(index) передается ссылка на функцию и в замыкании определяется index
              //       this.changeActiveTabIndex(index) Вызывается функция (если вызвать - undefined)
            >
              {item.label}
            </button>
          ))}
        </div>
        <Tab title={title} text={text} />
      </div>
    );
  }
}
