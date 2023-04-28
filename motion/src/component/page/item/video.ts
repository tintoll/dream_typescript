import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player"><iframe class="video_iframe"></iframe></div>
            <h2 class="video__title"></h2>
           </section>`);
    const iframe = this.element.querySelector(
      '.video_iframe'
    )! as HTMLIFrameElement;
    iframe.src = 'https://www.youtube.com/embed/YUAj_zw9kMQ';
    console.log(url);
    const titmeElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titmeElement.textContent = title;
  }
}
