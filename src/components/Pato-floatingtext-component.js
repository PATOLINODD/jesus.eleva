import { AbstractFormAssociated } from "./AbstractFormAssociated.js";


export class PatoFloatingTextComponent extends AbstractFormAssociated {
    static name = "pato-floating-text";
    static observedAttributes = ["label"];

    constructor() {
        super();
    }

    update() {}

    render() {
        const label = this.getAttribute("label") || "Default Label";
        return this.html`
            <div class="textarea-container">
                <textarea id="custom-textarea" class="floating-textarea" placeholder=" " resize="none"></textarea>
                <label for="custom-textarea" class="floating-label">${label}</label>
            </div>
        `;
    }

    getStyles() {
        return this.css`
            * {
                box-sizing: border-box;
            }

            :host, div, textarea {
                width: 100%;
                color: var(--text, hsl(0 0% 95%));
            }
            /* Establishes the boundary for the absolute positioning */
            .textarea-container {
                position: relative;
                font-family: sans-serif;
            }

            /* Styles the textarea field */
            .floating-textarea {
                padding: 1rem 0.5rem 0.5rem 0.5rem; /* Extra top padding accommodates the floating label */
                font-size: 1rem;
                border: var(--border, 1px solid hsl(0 0% 40%));
                border-radius: var(--card-radius, .5rem);
                outline: none; /* Removes the default browser focus ring */
                background-color: transparent;
                resize: none;
            }

            /* Positions the label over the textarea */
            .floating-label {
                position: absolute;
                top: 5%;
                left: 0.75rem;
                color: var(--placeholder, hsl(0 0% 50%));
                font-size: 1rem;
                pointer-events: none; /* Ensures clicking the label clicks the textarea beneath it */
                transform-origin: left;
                transition: all 0.3s ease-out; /* Dictates the speed and style of the translation */
            }

            /* --- NEW INTERACTIVE ANIMATION LOGIC --- */

            /* Highlight the border on focus */
            .floating-textarea:focus {
                border-color: var(--primary-color, hsl(40 100% 50%));
            }

            /* Animate the label upwards when focused OR when text is present */
            .floating-textarea:focus + .floating-label,
            .floating-textarea:not(:placeholder-shown) + .floating-label {
                top: 0;
                transform: translateY(-50%) scale(0.85);
                /* The background color must match the page/container background to mask the border line */
                background-color: var(--bg, hsl(0 0% 10%)); 
                padding: 0 0.25rem;
                color: var(--primary-color, hsl(40 100% 50%));
            }

            /* Revert label color to neutral if the user clicks away but leaves text inside */
            .floating-textarea:not(:focus):not(:placeholder-shown) + .floating-label {
                color: var(--placeholder, hsl(0 0% 50%));
            }
        `;
    }
}