import { AbstractComponent } from "./AbstractComponent.js";

export class AbstractFormAssociated extends AbstractComponent {

    static formAssociated = true;

    constructor() {
        super();
        this.internals = this.attachInternals();
    }
}