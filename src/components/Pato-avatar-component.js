import { AbstractComponent } from "./AbstractComponent.js";

export class PatoAvatarComponent extends AbstractComponent {

    static name = 'pato-avatar';
    static observedAttributes = ['image-url'];

    constructor(){
        super();
    }

    update(){}

    render(){
        return this.html``;
    }

    getStyles(){
        const url = this.getAttribute('image-url') || '';
        return this.css`
            * {
                box-sizing: border-box;
            }
            :host {
                width: 100%;
                height: 100%;
                background-image: url(${url});
                background-size: cover;
                background-position: center;
                border-radius: var(--circle, 50%);
            }
        `;
    }
}