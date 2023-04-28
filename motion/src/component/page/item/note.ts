import { BaseComponent } from '../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note">
            <p2 class="note__title"></p2>
            <p class="note__body"></p>
           </section>`);

    const titmeElement = this.element.querySelector(
      '.note__title'
    )! as HTMLHeadElement;
    titmeElement.textContent = title;

    const bodyElement = this.element.querySelector(
      '.note__body'
    )! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
