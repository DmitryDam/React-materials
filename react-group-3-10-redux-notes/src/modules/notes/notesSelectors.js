// Доп файл. Возвращает куски состояния 59:00
const getItems = state => state.notes.items;
// getItems массив заметок
const getFilter = state => state.notes.filter;
// getFilter строка введенная в поиск

const getVisibleNotes = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();
  // 1:39 Из общего числа постов фильтруются по фильтру
  return items.filter(item => item.text.toLowerCase().includes(filter));
};

export default { getItems, getFilter, getVisibleNotes };
