import React, { Component } from "react";

export default class NoteEditor extends Component {
  state = {
    text: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
    // e.target.name: e.target.value была бы такая запись,
    // если не деструктуризировать e, то есть handleChange = е => {
  };

  handleSubmit = e => {
    e.preventDefault();
    // Передает в проп onSubmit - это метод из АПП аргумент - значение text this.state.text
    // И при сабмите формы вызывается функция handleAddNote из АПП с этим аргументом - this.state.text
    this.props.onSubmit1(this.state.text);

    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {/* textarea аналогично, меняется название тега */}
        <input
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          autoсomplete="off"
        />
        <button>Добавить заметку</button>
      </form>
    );
  }
}
