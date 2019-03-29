import React, { Component } from "react";
import { css } from "emotion";
import { compose } from "recompose";
import TestComponent from "./TestComponent";
import withLog from "../enhancers/withLog";
import withToggle from "../enhancers/withToggle";
import withStorage from "../enhancers/withStorage";
import Togglable from "./Togglable";
import FetchData from "./FetchData";

const header = css`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <h1 className={header}>React Patterns</h1>
        {/* RenderProp пример 55:00 */}
        <Togglable>
          {({ on, toggle }) => (
            <div>
              <button onClick={toggle}>Toggle</button>
              {on && <TestComponent title="Title" text="Text" />}
            </div>
          )}
        </Togglable>

        <FetchData url="https://jsonplaceholder.typicode.com/users">
          {({ results, loading, error }) => (
            <div>
              {loading && <h1>LOADING!</h1>}
              {console.log(results)}
              {results.length > 0 && JSON.stringify(results, null, 200)}
            </div>
          )}
        </FetchData>
      </div>
    );
  }
}

export default compose(
  withLog,
  withStorage
)(App);
