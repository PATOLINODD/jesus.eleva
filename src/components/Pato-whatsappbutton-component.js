import { AbstractComponent } from './AbstractComponent.js';

export class PatoWhatsAppButton extends AbstractComponent {
    
    static name = 'pato-whatsappbutton';
    url = 'https://wa.me/';

    static get observedAttributes() {
        return ["phone", "message"];
    }

    
    
    constructor() {
        super();
        this._phone = this.getAttribute("phone") || "";
        this._msg = this.getAttribute("message") || "";
    }

    update(){
        this._msg = encodeURIComponent(this.msg);
        this._phone = this._phone.replace(/\D*/g, '');
    }
    
    render(){
        return this.html``;
    }
    
    getStyles(){
        return this.css``;
    }
}