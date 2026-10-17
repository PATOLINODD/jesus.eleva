import { AbstractComponent } from "./AbstractComponent.js";

export class PatoWordComponent extends AbstractComponent {

    static name = 'pato-word';
    static observedAttributes = [];

    constructor() {
        super();
    }


    getStyles() {
        return this.css`
                :host {
                    position: relative;
                    cursor: pointer;
                    color: var(--text-muted, hsl(0 0% 70%));
                }

                :host, div {
                    transition: all .3s ease-out;
                }

                div {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: .1rem;
                    background-color: var(--primary-color, hsl(40 100% 40%));
                    transform: scaleX(0);
                    transform-origin: left;
                }

                :host(:hover) div {
                    transform: scale(1);
                }

                :host(:hover) {
                    color: var(--primary-color, hsl(40 100% 40%));
                }
        `;
    }

    render() {
        return this.html`
            <slot>Default Word</slot>
            <div part="under"></div>
        `;
    }
}
