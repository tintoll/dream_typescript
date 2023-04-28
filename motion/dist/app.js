import { NoteComponent } from './component/page/item/note.js';
import { ImageComponent } from './component/page/item/image.js';
import { PageComponent } from './component/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/600');
        image.attachTo(appRoot, 'beforeend');
        const note = new NoteComponent('Note Title', 'Note Body');
        note.attachTo(appRoot, 'beforeend');
        const todo = new NoteComponent('Todo Title', 'Todo');
        todo.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));