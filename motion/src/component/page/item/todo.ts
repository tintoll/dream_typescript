import { BaseComponent } from '../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
            <p2 class="todo__title"></p2>
            <input type="checkbox" class="todo-checkbox">
           </section>`);

    const titmeElement = this.element.querySelector(
      '.todo__title'
    )! as HTMLHeadElement;
    titmeElement.textContent = title;

    const todoElement = this.element.querySelector(
      '.todo-checkbox'
    )! as HTMLInputElement;
    todoElement.insertAdjacentText('afterend', todo);
  }
}
