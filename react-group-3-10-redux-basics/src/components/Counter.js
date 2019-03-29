import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../redux/counterActions";
// для 1-го способа
// import * as counterActions from "../redux/counterActions";

const Counter = ({ value, step, increment, decrement, reset }) => (
  <div style={{ textAlign: "center", padding: 16 }}>
    <h1>{value}</h1>
    <br />
    <button onClick={() => increment(step)}>Increment</button>
    <button onClick={() => decrement(step)}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
);
// mapStateToProps(state, [ownProps]) - функция соединяющая часть состояния (state) с пропами
// компонента. Таким образом, связанный компонент будет иметь доступ к необходимой ему части
// состояния (state).
const mapStateToProps = state => ({
  value: state.counterValue,
  step: state.step
});
// mapDispatchToProps(dispatch, [ownProps]) - функция соединяющая отправку действий (actions) с
// пропами компонента. Таким образом, связанный компонент сможет отправлять действия посредством
// вызова методов указанных в возвращаемом объекте.
// 1-й способ
// const mapDispatchToProps = dispatch => ({
//   increment: value => dispatch(counterActions.increment(value)),
//   decrement: value => dispatch(counterActions.decrement(value)),
//   reset: () => dispatch(counterActions.reset())
// });
// 2-й способ  Если названия экшенов совпадают с пропами
const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
// Если mapStateToProps не нужен, передаем null
