import React from "react";

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
    {/* {children} Для вставки детей в АПП */}
    {/* или {props.children} */}
  </section>
);

export default Panel;
