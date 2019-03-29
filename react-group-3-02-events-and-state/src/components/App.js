import React, { Component } from 'react';
import Counter from './Counter';
import StepChanger from './StepChanger';
import Toggle from './Toggle';

export default class App extends Component {
  state = {
    counterStep: 0
  };
// setState(obj, callback)
  handleChangeStep = () => {
    this.setState(prevState => ({
      counterStep: prevState.counterStep + 1
    }));
  };

  render() {
    const { counterStep } = this.state;

    return (
      <div>  
        <StepChanger
          currentStep={counterStep}
          onUpdateStep={this.handleChangeStep}
          // Метод передается пропом onUpdateStep и вызывается кнопкой в компоненте
          // <button onClick={onUpdateStep}>Update step!</button>
        />
        <Counter step={counterStep} initialValue={10} />
        <Toggle>
        <h1>Children of component Toggle</h1>
        </Toggle>
      </div>
    );
  }
}
