import React from "react";

const styles = {
  select: {
    fontSize: 20
  }
};

const CategorySelector = ({ options, value, onChange }) => (
  <select
    style={styles.select}
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    {options.map(o => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);

export default CategorySelector;

// Пример для селектора lifecycle and api
// handleCategoryChange = evt => {
//   this.setState({
//     category: evt.target.value
//   });
// };

// Пример из этого случая   handleCategoryChange = category => {
//   this.props.history.push({
//     pathname: this.props.location.pathname,
//     search: `category=${category}`
//   });
// };
