// import React, { Component }from 'react';
// import * as API from '../services/api.js'
// import OrderList from './OrderList'

// const INITIAL_STATE = {
//         // orderlist: [],
//         price: '',
//         address: '',
//         raiting: '' 
//       }

// export default class OrderHistoryForm extends Component {

//      state = {...INITIAL_STATE}
   
// handleChange = e => {
//   this.setState({
//     [e.target.name]: e.target.value
//   });
// };

// handleAddItem = (item, e) => {
//   e.preventDefault();
//   API.addOrderItem(item).then(isOk => {
//     if (!isOk) return;
    // this.setState(prevState => ({prevState,
    //   ...{date: `${Date.now()}`, item}})

// this.setState({date: `${Date.now()}`,...this.state})
  //  return (<OrderList items={item}/>)
// })

// this.reset()
// }

// reset = () => {
//   this.setState({ ...INITIAL_STATE });
// };

  // render() {
  //   const { price, address, raiting } = this.state;
  //   return (
  //    <div>
  //    <form onSubmit={(e) => this.handleAddItem(this.state, e)}>
  //      <input
  //         type="number"
  //         name="price"
  //         value={price}
  //         onChange={this.handleChange}
  //         placeholder="Price"
  //       />
  //       <br />
  //       <input
  //         type="text"
  //         name="address"
  //         value={address}
  //         onChange={this.handleChange}
  //         placeholder="Address"
  //       />
  //       <br />
  //       <input
  //         type="number"
  //         name="raiting"
  //         value={raiting}
  //         onChange={this.handleChange}
  //         placeholder="Raiting"
  //       />
  //       <br />
  //       <button>Add history</button>
  //       <br />
  //     </form>
  //      <br />
  //     <br />
  //     </div>
  //   )}}
  