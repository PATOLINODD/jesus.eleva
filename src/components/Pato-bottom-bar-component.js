import { AbstractComponent } from "./AbstractComponent.js";

export class PatoBottomBarComponent extends AbstractComponent {

    static name = 'pato-bottom-bar';
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
                position: absolute;
                bottom: 1.5em;
                left: 0;
                padding: 0 1em;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }
        `;
    }
}