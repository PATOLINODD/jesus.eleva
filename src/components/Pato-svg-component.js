import { AbstractComponent } from "./AbstractComponent.js";
import { svgCollection } from "../utils/svg-collection.js";

export class PatoSVGComponent extends AbstractComponent {

    static name = 'pato-svg';
    static observedAttributes = ['fill', 'stroke', 'name', 'animate-on-click', 'color'];

    constructor() {
        super();
    }

    update(){
        // an idea for future project
        // console.log(this.hasAttribute('animate-on-click'));
    }

    render() {
        const svgName = this.getAttribute('name') || 'heart';
        const svgElement = svgCollection[svgName];
        return svgElement;
    }

    getStyles() {
        const color = this.getAttribute('color') || false;
        const fill = this.getAttribute('fill') || 'none';
        const stroke = this.getAttribute('stroke') || 'white';

        return this.css`
            :host {
                width: 1.625em;
                height: 1.625em;
                fill: ${color ? color : fill };
                stroke: ${ color ? color : stroke };
                stroke-width: 2;
            }
        `;
    }
}