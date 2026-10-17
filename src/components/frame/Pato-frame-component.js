import { AbstractComponent } from "../AbstractComponent.js";


export class PatoFrameComponent extends AbstractComponent {
    
    static name = 'pato-frame';
    static observedAttributes = ['width', 'height', 'src'];

    constructor(){
        super();
    }


    update(){
        //some logic here!
    }

    render(){
        const url = this.getAttribute('src') || '';
        return this.html`
            <iframe src="${url}" frameborder="0"></iframe>
            <slot></slot>
        `;
    }

    getStyles() {
        const [width, height] = [this.getAttribute('width') || "100%", this.getAttribute('height') || "100%"];
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
                overflow: hidden;
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
}