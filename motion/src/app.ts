import { NoteComponent } from './component/page/item/note.js';
import { ImageComponent } from './component/page/item/image.js';
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './component/page/page.js';
import { VideoComponent } from './component/page/item/video.js';
import { Component } from './component/component';
import { InputDialog } from './component/dialog/dialog.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/600'
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      'Video Title',
      'https://youtu.be/O-D7g3ajzRM'
    );
    this.page.addChild(video);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new NoteComponent('Todo Title', 'Todo');
    this.page.addChild(todo);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      dialog.setOnCloseListenr(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListenr(() => {
        // 섹션을 만들어서 페이지에 추가 해준다
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement);
