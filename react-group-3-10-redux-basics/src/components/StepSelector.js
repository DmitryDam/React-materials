import React from "react";
import { connect } from "react-redux";
import { changeStep } from "../redux/counterActions";

const StepSelector = ({ value1, changeStep }) => (
  <div>
    <h2>Current step: {value1}</h2>
    <select value={value1} onChange={e => changeStep(Number(e.target.value))}>
      {/* onChange={e => changeStep(Number(e.target.value))} */}
      {/* 1:30  Анонимная функция, в себя получает ивент и вызывает changeStep. 
      Number потому что ожидает число а приходит строка  */}
      {/* Action:
      const changeStep = step => ({
      type: types.CHANGE_STEP,
      payload: step
       }); */}
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  value1: state.step
  // По умолчанию 5 больше ничего не делает
});

const mapDispatchToProps = { changeStep };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepSelector);
