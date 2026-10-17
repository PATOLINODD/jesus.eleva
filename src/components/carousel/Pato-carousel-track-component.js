import { AbstractComponent } from "../AbstractComponent.js";

export class PatoCarouselTrackComponent extends AbstractComponent {

    static name = 'pato-tracker';

    constructor() {
        super();
    }

    update() {
        //some logic here
    }

    render() {
        return this.html`
            <slot></slot>
        `;
    }

    getStyles() {
        return this.css`
            * {
                box-sizing: border-box;
            }

            :host {
                display: flex;
                scroll-snap-type: x mandatory;
                gap: 1em;
                width: 100%;
                overflow-x: auto;
                scroll-behavior: smooth;
                scrollbar-width: none;
                -ms-overflow-style: none;
                gap: 4em;
            }

            :host(::-webkit-scrollbar) {
                display: none;
            }
        `;
    }
}