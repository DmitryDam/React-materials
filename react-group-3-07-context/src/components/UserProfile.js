// То что под хедером
import React from "react";
import AuthContext1 from "../contexts/AuthContext";
// Паттерн RenderProp. Возвращает вызов функции. Компонент получает данные из функции
const UserProfile = () => (
  <AuthContext1.Consumer>
    {({ user: { image, name, email, phone } }) => (
      <section>
        <img src={image} alt="user avatar" width="240" />
        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </section>
    )}
  </AuthContext1.Consumer>
);

export default UserProfile;

// Если не делать деструктуризацию, то будет так:
// const UserProfile = () => (
//   <AuthContext.Consumer>
//     {AuthContext => (
//       <section>
//         <img src={AuthContext.user.image} alt="user avatar" width="240" />
//         <ul>
//           <li>Name: {AuthContext.user.name}</li>
//           <li>Email: {AuthContext.user.email}</li>
//           <li>Phone: {AuthContext.user.phone}</li>
//         </ul>
//       </section>
//     )}
//   </AuthContext.Consumer>
// );
