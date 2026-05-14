/**
 * UCRFlyer Component
 * Main container that assembles all flyer parts.
 */
class UCRFlyer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    --flyer-bg: var(--ucr-yellow, #eebc5d);
                    --flyer-border: 8px solid white;
                    --flyer-radius: 24px;
                    --flyer-shadow-color: rgba(0, 0, 0, 0.5);
                    --flyer-hover-shadow-color: rgba(0, 0, 0, 0.6);
                    --flyer-glow-color: var(--flyer-secondary, #00aae4);
                }

                .flyer-wrapper {
                    width: clamp(320px, 90vw, 420px);
                    aspect-ratio: 400 / 700;
                    background-color: var(--flyer-bg);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    border-radius: var(--flyer-radius);
                    box-shadow: 0 25px 50px -12px var(--flyer-shadow-color);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    border: var(--flyer-border);
                }

                .flyer-wrapper:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 35px 60px -15px var(--flyer-hover-shadow-color);
                }

                .flyer-main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 5;
                }

                /* Decorative element */
                .flyer-wrapper::before {
                    content: '';
                    position: absolute;
                    top: -50px;
                    right: -50px;
                    width: 150px;
                    height: 150px;
                    background: var(--flyer-glow-color);
                    border-radius: 50%;
                    opacity: 0.2;
                    filter: blur(40px);
                }
            </style>
            <article class="flyer-wrapper" part="wrapper">
                <slot name="header">
                    <flyer-header></flyer-header>
                </slot>
                
                <main class="flyer-main" part="main">
                    <slot name="main-content">
                        <animated-title></animated-title>
                        <flyer-qr></flyer-qr>
                    </slot>
                </main>

                <slot name="footer-content">
                    <people-section></people-section>
                    <flyer-footer></flyer-footer>
                </slot>
            </article>
        `;
    }
}

customElements.define("ucr-flyer", UCRFlyer);
export default UCRFlyer;
