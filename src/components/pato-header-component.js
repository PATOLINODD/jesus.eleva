import { AbstractComponent } from "./AbstractComponent.js";

export class PatoHeaderComponent extends AbstractComponent {

    static name = 'pato-header';
    static observedAttributes = [];


    constructor() {
        super();
        this.isOpened = false;
    }

    update() {
        this.startAnimationBind = this.startAnimation.bind(this);
        this.menu = this.shadowRoot.querySelector('slot#menu');
        this.sections = this.shadowRoot.querySelector("slot#sections");
        const sectionNodes = this.sections.assignedElements({ flatten: true });
        const sectionClone = sectionNodes[0].cloneNode(true);

        this.right = this.shadowRoot.querySelector('.right');
        sectionClone.classList.add("sections");
        this.right.appendChild(sectionClone);
        this.menu.addEventListener('click', this.startAnimationBind);

        this.menuNodes = this.menu.assignedElements({ flatten: true });
        for (const el of this.menuNodes) {
            el.style.zIndex = 999;
        }

        if (sectionNodes[0]) {
            this.setupSmoothScroll(sectionNodes[0]);
        }
        this.setupSmoothScroll(sectionClone);

        for(const li of sectionClone.children) {
            li.addEventListener('click', this.startAnimationBind);
        }
    }

    setupSmoothScroll(container) {
        if (!container) return;
        container.addEventListener('click', (event) => {
            const anchor = event.target.closest('a');
            if (anchor) {
                const href = anchor.getAttribute('href');
                if (href && href.startsWith('#') && href.length > 1) {
                    const target = document.querySelector(href);
                    if (target) {
                        event.preventDefault();
                        const headerOffset = this.offsetHeight || 0;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = Math.max(0, elementPosition + window.pageYOffset - headerOffset);

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        history.pushState(null, '', href);
                    }
                }
            }
        });
    }

    getStyles() {
        this.mainColor = 'hsl(36, 100%, 50%)';
        return this.css`
                * {
                    box-sizing: border-box;
                }
                :host {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: var(--page-padding, 1rem 1rem);
                    border: none;
                    border-bottom: var(--border, 2px solid hsl(60, 70%, 50%));
                    border-color: var(--primary-color);
                    background-color:  var(--bg, hsl(0, 0%, 10%));
                }

                .sections,
                ::slotted(.sections),
                ::slotted(ul) {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    list-style: none;
                    gap: var(--gap, 3rem);
                    margin-top: var(--header-height, 5rem);
                }

                a {
                    text-decoration: none;
                }

                li,
                ::slotted(li) {
                    border-bottom: var(--border, 1px solid hsl(0, 0%, 40%));
                    cursor: pointer;
                    margin: 0;
                    padding: 0;
                    width: 80%;
                    font-size: 1.5rem;
                }
                
                #sections {
                    display: none;
                }

                .cta,
                ::slotted(.cta) {
                    position: fixed;
                    bottom: 1rem;
                    right: 1rem;
                    padding: var(--padding, 1rem 2rem);
                    background-color: var(--cta-color, ${this.mainColor});
                    border: none;
                    border-radius: var(--circle, 50%);
                    width: 7rem;
                    height: 7rem;
                    cursor: pointer;
                    text-align: center;
                    z-index: 999;
                    font-family: var(--cta-font, serif);
                    letter-spacing: .05rem;
                }

                #menu {
                    width: 3rem;
                    height: 3rem;
                    background-color: red;
                }
                
                .left,
                .right {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100vw;
                    will-change: transform;
                    transition: all 333ms ease-out;
                    z-index: 99;
                }

                .left {
                    transform: translateX(100%);
                    background-color: var(--cta-color, ${this.mainColor});
                    opacity: .72;
                }
                .right {
                    transform: translateX(-100%);
                    background-color: var(--bg, hsl(0, 0%, 10%));
                }

                @media (min-width: 500px) {
                    .cta,
                    ::slotted(.cta),
                    ::slotted(button) {
                        position: static;
                        border-radius: var(--button-radius, .5rem);
                        padding: .25rem .5rem;
                        min-width: 30%;
                        max-width: 70%;
                        height: auto;
                        z-index: 0;
                    }
                }

                @media (min-width: 700px){
                    :host {   
                        padding: var(--page-padding, 0 4rem);
                    }

                    .cta,
                    ::slotted(.cta),
                    ::slotted(button) {
                        position: static;
                        padding: .25em 2em;
                        border-radius: var(--button-radius, .5rem);
                        min-width: 14em;
                        font-size: 1em;
                        height: auto;
                        background: transparent;
                        border: var(--border, 1px solid hsl(40 100% 40%));
                        border-color: var(--primary-color);
                        color: var(--primary-color, hsl(40 100% 40%));
                        transition: all .3s ease-out;
                    }

                    .cta:hover,
                    ::slotted(.cta:hover),
                    ::slotted(button:hover) {
                        background-color: var(--primary-color, hsl(40 100% 40%));
                        color: var(--bg, hsl(0 0% 10%));
                    }
                }

                @media (min-width: 1024px){
                    :host {
                        padding: var(--page-padding, 0 4rem);
                        display: grid;
                        grid-template-columns: auto 1fr auto;
                        align-items: center;
                    }
                    #sections {
                        display: block;
                    }
                    li,
                    ::slotted(li) {
                        width: auto;
                    }

                    .sections,
                    ::slotted(.sections),
                    ::slotted(ul) {
                        gap: 0rem;
                        flex-direction: row;
                        justify-content: space-evenly;
                        align-items: center;
                        padding: 0;
                        margin: 0;
                        width: auto;
                    }
                    li,
                    ::slotted(li) {
                        border: none;
                    }

                    #menu {
                        display: none;
                    }
                    
                    .left, 
                    .right {
                        display: none;
                    }
                }

                @media (min-width: 1260px) {
                    :host {
                        padding: var(--page-padding, 0 9rem);
                    }
                    #sections {
                        display: block;
                    }

                    .sections,
                    ::slotted(.sections),
                    ::slotted(ul) {
                        flex-direction: row;
                        margin: 0;
                    }
                    li,
                    ::slotted(li) {
                        border: none;
                    }

                }

                @media (min-width: 1500px) {
                    :host {
                        font-size: 1.5em;
                        padding: var(--page-padding, 0 15rem);
                    }
                }
        `;
    }

    render() {
        return this.html`
            <slot name="logo">
                <h2 id="logo">O</h2>
            </slot>
            <slot name="sections" id="sections">
                <ul class="sections">
                    <li>
                        <h3>Home</h3>
                    </li>
                    <li>
                        <h3>About</h3>
                    </li>
                    <li>
                        <h3>Projects</h3>
                    </li>
                    <li>
                        <h3>Testmonials</h3>
                    </li>
                </ul>
            </slot>
            <slot name="cta" id="cta">
                <button class="cta">
                    <h3>Contact Me</h3>
                </button>
            </slot>
            <slot name="menu" id="menu">
                <div class="menu"></div>
            </slot>
            <div class="left"></div>
            <div class="right"></div>
        `;
    }

    disconnectedCallback() {
        this.menu.removeEventListener('click', this.startAnimationBind);
    }

    startAnimation() {
        this.isOpened = !this.isOpened;
        this.openMenu(this.isOpened);
        const left = this.shadowRoot.querySelector('div.left');
        const right = this.shadowRoot.querySelector('div.right');

        if (this.isOpened) {
            right.style.transform = "translateX(0)";
            left.style.transform = "translateX(0)";
        } else {
            right.style.transform = "translateX(-100%)";
            left.style.transform = "translateX(100%)";
        }
    }

    openMenu(isOpen) {
        const menu = this.menuNodes[0];
        menu.transform(isOpen);
    }
}
