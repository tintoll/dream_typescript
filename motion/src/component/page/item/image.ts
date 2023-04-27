export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement('template');
    template.innerHTML = `<section class="image">
    <div class="image__holder"><img class="image__thumbnail" /></div>
    <p class="image__title"></p>
  </section>`;
    // 전달받은 title, url을 바로 innerHTML로 전달하는 것은 위험하다.
    // 필요한 요소안에 접근하여 값을 설정해줘야 한다.

    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(
      '.image__thumbnail'
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      '.image__title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
