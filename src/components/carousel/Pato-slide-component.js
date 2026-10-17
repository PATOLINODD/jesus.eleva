import { AbstractComponent } from "../AbstractComponent.js";

export class PatoSlideComponent extends AbstractComponent {

    static name = 'pato-slide';
    static observedAttributes = [];

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
                //to fit the carousel
                flex: 0 0 40%;
                scroll-snap-align: center;
            }
        `;
    }
}