import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
// 52:00
// Импортит из папки компонента, где в файл index.js заимпортирован
// контейнер (connect редакса с файлом view компонента)
const App = () => (
  <>
    <AppHeader />
    <NoteEditor />
    <NoteList />
  </>
);

export default App;
