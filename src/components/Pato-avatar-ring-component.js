import { AbstractComponent } from "./AbstractComponent.js";

export class PatoAvatarRingComponent extends AbstractComponent {

    static name = 'pato-avatar-ring';
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
                width: 2.75em;
                height: 2.75em;
                border-radius: 50%;
                background-image: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .125em;
                overflow: hidden;
            }
        `;
    }

}