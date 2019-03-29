import React, { Component } from "react";

const GENDERS = {
  male: "male",
  female: "female"
};

// const INITIAL_STATE - Такой паттерн можно использовать только с примитивами, а не с массивами
const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  // agreedToTerms - для чекбокса
  // Чекбокс может быть всего в 2-х состояниях: true или false.
  agreedToTerms: false,
  gender: null,
  age: ""
};

export default class SignupForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    console.log("e", e);
    console.log("e.target", e.target);
    console.log("e.target.name: ", e.target.name);
    console.log("e.target.value: ", e.target.value);
    // Вычисляемое свойствоs объекта в квадратных скобках  [e.target.name]: e.target.value
    // Сделал 1  метод дляs всех инпутов, в каждом инпуте добавлен атрибут name имя которого совпадает со state
    // name
    // Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // Для чекбокса отдельный метод, потому что там поле не .value a .checked
  // { target } деструктуризироввал е
  // agreedToTerms: target.checked  без const { checked } = target;
  handleAgreeChange = ({ target }) => {
    // console.log("e", e);
    console.log("e.target", target);

    const { checked } = target;

    this.setState({
      agreedToTerms: checked
    });
    //     При обработке события onChange, для получения значения, в объекте события обращаемся к
    // свойству event.target.checked
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.reset();
    // evt.target.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreedToTerms, gender, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="login"
          value={login}
          onChange={this.handleChange}
          placeholder="Login"
        />
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <br />
        <label>
          Agree to terms
          <input
            type="checkbox"
            // Вместо value, атрибут checked, true или false
            checked={agreedToTerms}
            onChange={this.handleAgreeChange}
          />
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === GENDERS.male}
              name="gender"
              value={GENDERS.male}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === GENDERS.female}
              name="gender"
              value={GENDERS.female}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <hr />
        {/* disabled={!agreedToTerms} передается состояние true/false */}
        {/* соответственно кнопка активна или не активна */}
        <button disabled={!agreedToTerms}>Signup as {login}</button>
      </form>
    );
  }
}
