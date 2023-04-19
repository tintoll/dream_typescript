{
  type ToDo = {
    title: string;
    description: string;
  };

  // ReadOnly라는 MappedType을 사용하면 수정을 할수없게 할수 있다.
  // 이렇게 자주 사용하는 type들은 구현이 되어있다.
  function displayTodo(todo: Readonly<ToDo>) {
    // todo.title = 'jaja'; // 그냥 하면 변경이 된다.
  }
}
