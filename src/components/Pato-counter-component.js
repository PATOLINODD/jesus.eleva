import { AbstractComponent } from "./AbstractComponent.js";

export class PatoCounterComponent extends AbstractComponent {

    static name = 'pato-counter';
    static observedAttributes = ['from', 'to', 'duration']

    constructor() {
        super();
        try {
            CSS.registerProperty({
                name: '--num',
                syntax: '<integer> | <number>',
                inherits: false,
                initialValue: '0'
            });
        } catch (error) {

        }
    }

    getStyles() {
        const from = this.getAttribute('from') || 0;
        const to = this.getAttribute('to') || 100;
        const duration = this.getAttribute('duration') || '.3s';
        return this.css`
            * {
                box-sizing: border-box;
            }

                :host {
                    counter-reset: n var(--num);
                    animation: count ${duration} ease-out forwards;
                    &::after {
                        content: counter(n);
                    }
                }

                @keyframes count {
                    from {
                        --num: ${from};
                    }
                    to {
                        --num: ${to};
                    }
                }
        `;
    }

    render() {
        return this.html``;
    }
}
