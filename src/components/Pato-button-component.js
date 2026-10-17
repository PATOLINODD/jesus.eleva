import { AbstractComponent } from './AbstractComponent.js';

export class PatoButtonComponent extends AbstractComponent {

    static name = 'pato-button';
    static observedAttributes = ['p', 'm'];

    constructor() {
        super();
    }

    render() {
        return this.html`
            <slot></slot>
        `;
    }

    getStyles() {
        const padding = this.getAttribute('p') || '0';
        const margin = this.getAttribute('m') || '0';
        return this.css`
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }

            :host {
                cursor: pointer;
                padding: ${padding};
                margin: ${margin};
                border-radius: var(--button-radius, 5rem);
            }
        `;
    }
}