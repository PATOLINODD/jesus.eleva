import { AbstractComponent } from '../AbstractComponent.js';

export class PatoTestimonialCardComponent extends AbstractComponent {

    static name = 'pato-testimonial-card';

    constructor(){
        super();
    }

    update(){}

    getStyles() {
        return this.css`
            * {
                box-sizing: border-box;
            }

            :host {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                gap: 1rem;
                margin: 0;
                padding: 10px;
                width: 36.625rem;
                height: 17.9375rem;
                background-color: var(--bg, hsl(0 0% 10% / 1));
                border-radius: var(--card-radius, .5rem);
            }

            .profile-picture, img {
                width: 5rem;
                height: 5rem;
                aspect-ratio: 1;
                object-fit: cover;
                object-position: center;
                border-radius: var(--circle, 50%);
                background-color: var(--text, white);
            }

            .profile-details {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: row;
                gap: 2rem;
            }

            .profile-info {
                width: 100%;
            }

            h2, p,
            ::slotted(h2),
            ::slotted(p) {
                margin: 0;
                padding: 0;
            }

            h2 {
                color: var(--text, hsl(0 0% 95%));
            }

            p:not(.description) {
                color: var(--text-muted, hsl(0 0% 70%));
            }

            p.description {
                color: var(--primary-color, hsl(40 100% 50%));
                font-size: 1.25rem;
                letter-spacing: .05em;
            }
        `;
    }

    render() {
        return this.html`
            <div class="profile-details" part="profile-details">
                <slot class="profile-picture" name="profile-picture"> 
                    <img>
                </slot>
                <div class="profile-info">
                    <slot name="name"><h2>Fulano de Tal</h2></slot>
                    <slot name="position"><p>Gerente na Casas Bahia</p></slot>
                </div>
            </div>
            <slot name="description"><p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore ducimus temporibus blanditiis! Aut, maxime? Repellat aperiam nesciunt, hic blanditiis deleniti explicabo ullam nobis! Assumenda perspiciatis quae consequatur officiis aperiam.</p></slot>
        `;
    }
}