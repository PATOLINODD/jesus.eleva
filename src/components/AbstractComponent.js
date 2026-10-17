export class AbstractComponent extends HTMLElement {

    // <abstract-component></abstract-component>
    static name = 'abstract-component';

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.html = String.raw;
        this.css = String.raw;
    }

    static define(ComponentClass) {
        const tagName = ComponentClass.name;
        if (!customElements.get(tagName)) customElements.define(tagName, ComponentClass);
    }

    /*
    * ==================== ATTRIBUTES ====================
    */

    static get observedAttributes() {
        return [];
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = this.html`
            <style>${this.getStyles()}</style>
            ${this.render()}
        `;
        this.update();
    }

    update(){}

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    disconnectedCallback() {
    }

    /*
    * ==================== STYLES ====================
    */
    getStyles() {
        return this.css``;
    }

    /*
    * ==================== RENDER ====================
    */
    render() {
        throw new Error("O método 'render()' deve ser implementado!");
    }

    /*
    * ==================== HELPERS ====================
    */
    $$(selector) {
        return this.shadowRoot.querySelector(selector);
    }

    $$$(selector) {
        return this.shadowRoot.querySelectorAll(selector);
    }

    createElement(tagName, options = {}) {
        const element = document.createElement(tagName);
        Object.assign(element, options);
        return element;
    }
}