import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './MyComponent.module.css';

// import React, { Component } from 'react';

// classNames={{
//   enter: styles.boxEnter,
//   enterActive: styles.boxEnterActive,
//   exit: styles.boxExit,
//   exitActive: styles.boxExitActive,
// }}
// Начальные настройки
// const defaultStyles = {
//     width: 400,
//     height: 400,
//     backgroundColor: '#009688',
//     opacity: 0,
//     transition: `opacity 500ms ease-in-out`,
// };
// Настройки во время перехода
// const transitionStyles = {
//     entering: { opacity: 0 },
//     entered: { opacity: 1 },
// };

export default class MyComponent extends Component {
    state = { visible: false };

    toggle = () => {
        this.setState(prevState => ({ visible: !prevState.visible }));
    };

    render() {
        const { visible } = this.state;

        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>

                <CSSTransition
                    in={visible}
                    timeout={500}
                    classNames={{
                        // 4 фазы классов
                        enter: styles.boxEnter,
                        enterActive: styles.boxEnterActive,
                        exit: styles.boxExit,
                        exitActive: styles.boxExitActive,
                    }}
                    unmountOnExit
                >
                    {state => (
                        <div className={styles.box}>
                            <h1>Current State: 555 {state}</h1>
                        </div>
                    )}
                </CSSTransition>
            </div>
        );
    }
}

// Пример с transition

// import React, { Component } from 'react';
// import { Transition } from 'react-transition-group';
// const defaultStyles = {
//     transition: `opacity 500ms ease-in-out`,
//     width: 200,
//     height: 200,
//     backgroundColor: '#009688',
//     opacity: 0,
// };
// const transitionStyles = {
//     entering: { opacity: 0 },
//     entered: { opacity: 1 },
// };
// export default class MyComponent extends Component {
//     state = { visible: false };
//     toggle = () =>
//         this.setState(prevState => ({ visible: !prevState.visible }));
//     render() {
//         const { visible } = this.state;
//         return (
//             <div>
//                 <button onClick={this.toggle}>Toggle</button>
//                 <Transition
//                     in={visible}
//                     timeout={1000}
//                     mountOnEnter
//                     unmountOnExit
//                     // unmountOnExit - проп, отвечает за то, всегда ли текст показывать или тоже исчезать
//                 >
//                     {state => (
//                         <div>
//                             <h1>Current State: {state}</h1>
//                             <div
//                                 style={{
//                                     // Распыляет состояния
//                                     ...defaultStyles,
//                                     ...transitionStyles[state],
//                                 }}
//                             />
//                         </div>
//                     )}
//                 </Transition>
//             </div>
//         );
//     }
// }
