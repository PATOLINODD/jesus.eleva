import { AbstractComponent } from "../AbstractComponent.js";

export class PatoSidebarComponent extends AbstractComponent {

    static name = 'pato-sidebar';
    static observedAttributes = ['color'];


    constructor(){
        super();
    }

    update(){
        const slot = this.shadowRoot.querySelector('slot#slot');
        const nodes = slot.assignedElements({ flatten: true });
    }

    render(){
        return this.html`
            <slot id="slot"></slot>
        `;
    }

    getStyles(){
        return this.css`
            * {
                box-sizing: border-box;
            }

            :host {
                position: absolute;
                bottom: 6em;
                right: 1em;
                display: flex;
                flex-direction: column;
                gap: 1.5em;
                align-items: center;
                color: white;
            }
        `;
    }
}