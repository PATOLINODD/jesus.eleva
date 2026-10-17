import { AbstractComponent } from "../AbstractComponent.js";

export class PatoInstagramButtonComponent extends AbstractComponent {

    static name = 'pato-instagram-btn';
    static observedAttributes = [];

    constructor(){
        super();
        this.instagramURL = 'https://www.instagram.com/'
        try {
            CSS.registerProperty(
                {
                    name: '--angle',
                    syntax: "<angle>",
                    inherits: false,
                    initialValue: "45deg"
                }
            )
        } catch (error) {
            
        }
    }

    update() {
        const profileLink = "profileLink" in this.dataset ? this.dataset.profileLink : null;

        if(profileLink && profileLink != "") {
            this.addEventListener("click", () => {
                window.open(this.instagramURL.concat( profileLink), "_blank");
            });
        }
    }

    render(){
        return this.html`
            <slot>Abrir Instagram</slot>
        `;
    }

    getStyles(){
        return this.css`
            * {
                box-sizing: border-box;
            }

            :host {
                position: absolute;
                top: 16px;
                left: 16px;
                right: 16px;
                height: 30px;
                border-radius: 20px;
                background: linear-gradient(var(--angle, to turn), #ffbe00, #ff0055, #9900ff);
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--text, hsl(0 0% 98%));
                
                font-family: "Ancizar Serif", serif;
                font-weight: 400;
                font-style: normal;
                font-size: 1rem;

                letter-spacing: 0%;
                word-spacing: 5px;
                text-transform: uppercase;
                cursor: pointer;
                transition: all .3s ease-out;
                animation: rotateBack .3s linear forwards;
            }
            
            :host(:hover) {
                transform: translateY(-0.25em) scale(1.01);
                box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.5);
                animation: rotateBg .3s linear forwards;
            }

            @keyframes rotateBg {
                to {
                    --angle: 270deg;
                }
            }

            @keyframes rotateBack {
                from {
                    --angle: 270deg;
                }

                to {
                    --angle: 450deg;
                }
            }
        `;
    }
}