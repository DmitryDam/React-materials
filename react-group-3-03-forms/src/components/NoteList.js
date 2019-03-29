import React from 'react';

const NoteList = ({ notes, onDeleteNote }) => (
  <ul>
    {/* { id, text } деструктуризировал, вместо (note)ы например... */}
    {notes.map(({ id, text }) => (
      <li key={id}>
      {/* onClick={() => onDeleteNote(id)} передается пропом функция
      В случаях где нет map onClick={onDeleteNote(id)} */}
        <button onClick={() => onDeleteNote(id)}>Удалить</button>
        <span>{text}</span>
      </li>
    ))}
  </ul>
);
// () => onDeleteNote(id) передача метода из апп как пропа

export default NoteList;
