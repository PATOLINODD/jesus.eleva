import { AbstractComponent } from "../AbstractComponent.js";

export class PatoCarouselContainerComponent extends AbstractComponent {

    static name = 'pato-carousel';
    constructor(){
        super();
    }

    update(){}

    render(){
        return this.html`
            <slot></slot>
        `;
    }

    getStyles(){
        return this.css`
            * {
                box-sizing: border-box;
            }

            :host {
                width: 100%;
                margin: 0 auto;
                overflow: hidden;
            }
        `;
    }
}