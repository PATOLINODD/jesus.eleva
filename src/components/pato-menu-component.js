import { AbstractComponent } from './AbstractComponent.js';

export class PatoMenuComponent extends AbstractComponent {

    static name = 'pato-menu';
    static observedAttributes = [];

    constructor() {
        super();
    }

    update(){
        this.top = this.shadowRoot.querySelector('div.top');
        this.mid = this.shadowRoot.querySelectorAll('div.mid');
        this.bottom = this.shadowRoot.querySelector('div.bottom');
    }

    getStyles(){
        return this.css`
                :host, 
                .menu {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    padding: .25rem 0;
                    cursor: pointer;
                    gap: .25rem;
                }

                .top,
                .mid,
                .bottom {
                    width: 3rem;
                    height: .25rem;
                    background-color: var(--secondary-color, hsl(0, 0%, 70%));
                    will-change: transform, opacity;
                    transform-origin: center;
                    transition: all 333ms ease-out;
                }

                .mid {
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                .x-animation {
                    position: relative;
                    width: 100%;
                    height: .25rem;
                }
        `;
    }

    render () {
        return this.html`
            <div class="menu">
                <div class="top"></div>
                <div class="x-animation">
                    <div class="mid"></div>
                    <div class="mid"></div>
                </div>
                <div class="bottom"></div>
            </div>
        `;
    }

    transform(isOpen) {
        const menu = this.shadowRoot.querySelector(".menu");

        const menuAnimation = menu.animate(
            {
                transform: ['rotate(90deg)']
            },
            {
                duration: 333, fill: 'forwards', easing: 'ease-out', composite: 'accumulate'
            }
        );

        menuAnimation.onfinish = () => {
            menuAnimation.commitStyles();
            menuAnimation.cancel();
        }

        if (isOpen) {
            this.top.style.opacity = 0;
            this.bottom.style.opacity = 0;
            this.mid[0].style.transform = 'rotate(45deg)';
            this.mid[1].style.transform = 'rotate(-45deg)';
        } else {
            this.top.style.opacity = 1;
            this.bottom.style.opacity = 1;
            this.mid[0].style.transform = 'rotate(0)';
            this.mid[1].style.transform = 'rotate(0)';
        }
    }
}
