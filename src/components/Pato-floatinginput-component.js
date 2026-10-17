import { AbstractFormAssociated } from './AbstractFormAssociated.js';

export class PatoFloatingInputComponent extends AbstractFormAssociated {
    
    static name = "pato-floating-input";
    static observedAttributes = ["label"];

    constructor(){
        super();
    }

    update(){}

    render(){
        const label = this.getAttribute("label") || "Default Label";
        return this.html`
            <div class="input-container">
                <input type="text" id="custom-input" class="floating-input" placeholder=" " />
                <label for="custom-input" class="floating-label">${label}</label>
            </div>
        `;
    }

    getStyles(){
        return this.css`
            * {
                box-sizing: border-box;
            }

            :host, div, input {
                width: 100%;
                color: var(--text);
            }
            /* Establishes the boundary for the absolute positioning */
            .input-container {
                position: relative;
                font-family: sans-serif;
            }

            /* Styles the input field */
            .floating-input {
                padding: 1rem 0.5rem 0.5rem 0.5rem; /* Extra top padding accommodates the floating label */
                font-size: 1rem;
                border: var(--border, 1px solid hsl(0 0% 40%));
                border-radius: var(--card-radius, .5rem);
                outline: none; /* Removes the default browser focus ring */
                background-color: transparent;
            }

            /* Positions the label over the input */
            .floating-label {
                position: absolute;
                top: 50%;
                left: 0.75rem;
                transform: translateY(-50%);
                color: var(--placeholder);
                font-size: 1rem;
                pointer-events: none; /* Ensures clicking the label clicks the input beneath it */
                transform-origin: left;
                transition: all 0.3s ease-out; /* Dictates the speed and style of the translation */
            }

            /* --- NEW INTERACTIVE ANIMATION LOGIC --- */

            /* Highlight the border on focus */
            .floating-input:focus {
                border-color: var(--primary-color, hsl(40 100% 50%));
            }

            /* Animate the label upwards when focused OR when text is present */
            .floating-input:focus + .floating-label,
            .floating-input:not(:placeholder-shown) + .floating-label {
                top: 0;
                transform: translateY(-50%) scale(0.85);
                /* The background color must match the page/container background to mask the border line */
                background-color: var(--bg, hsl(0 0% 10%)); 
                padding: 0 0.25rem;
                color: var(--primary-color, hsl(40 100% 50%));
            }

            /* Revert label color to neutral if the user clicks away but leaves text inside */
            .floating-input:not(:focus):not(:placeholder-shown) + .floating-label {
                color: var(--placeholder, hsl(0 0% 70%));
            }
        `;
    }
}