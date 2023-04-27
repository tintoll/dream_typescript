import { ImageComponent } from './component/page/item/image.js';
import { PageComponent } from './component/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/600');
        image.attachTo(appRoot, 'afterend');
    }
}
new App(document.querySelector('.document'));
