import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  // react-virtualized 라이브러리 List 컴포넌트 사용
  return (
    <List
      className="TodoList"
      width={512}
      height={513} // 57 높이 * 9개 항목 = 전체 높이
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 사용하는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // 기본적용 되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
