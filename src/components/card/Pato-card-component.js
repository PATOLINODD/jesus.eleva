import { AbstractComponent } from "../AbstractComponent.js";

export class PatoCardComponent extends AbstractComponent {

    static name = 'pato-card';
    static observedAttributes = ['width', 'height', 'background'];

    constructor() {
        super();
    }

    getStyles() {
        const url = this.getAttribute('background') || '';
        const [width, height] = [this.getAttribute('width'), this.getAttribute('height')];
        return this.css`
            * {
                box-sizing: border-box;
            }

            :host {
                display: block;
                position: relative;
                width: ${width};
                height: ${height};
                border-radius: 20px;
                background-color: var(--bg, hsl(0 0% 5%));
                overflow: hidden;
                background-image: url(${url});
                background-size: cover;
                background-position: center;
            }

            iframe {
                position: absolute;
                top: 0;
                left: .5em;
                width: calc(100% + 20px); 
                height: calc(100% + 100px);
                transform: scale(1.45);
                overflow: hidden;
            }
        `;
    }

    render(){
        return this.html`
            <slot>Default Content</slot>
        `;
    }
}