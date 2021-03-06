import React from 'react';

function TodoItem({ content, onClick }) {
  return (
    <li>
      {content}
      <button type="button" onClick={onClick}>완료</button>
    </li>
  );
}

export default TodoItem;
