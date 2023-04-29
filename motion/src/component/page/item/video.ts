import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player"><iframe class="video_iframe"></iframe></div>
            <h2 class="page-item__title video__title"></h2>
           </section>`);
    const iframe = this.element.querySelector(
      '.video_iframe'
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);
    const titmeElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titmeElement.textContent = title;
  }
  // 정규표현식 Regex
  // https://regexr.com/5l6nr
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
