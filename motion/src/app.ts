import { NoteComponent } from './component/page/item/note.js';
import { ImageComponent } from './component/page/item/image.js';
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './component/page/page.js';
import { VideoComponent } from './component/page/item/video.js';
import { Component } from './component/component';

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
  }
}

new App(document.querySelector('.document')! as HTMLElement);
