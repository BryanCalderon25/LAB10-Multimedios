/**
 * FlyerHeader Component
 * Renders the top logo section of the flyer.
 */
class FlyerHeader extends HTMLElement {
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
                    --header-primary: var(--flyer-primary, #6a2a8c);
                    --header-secondary: var(--flyer-secondary, #00aae4);
                }

                .flyer-header {
                    padding: clamp(20px, 5vh, 40px) 20px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                }

                .logo-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .title {
                    background-color: var(--header-secondary);
                    color: var(--flyer-text-inverse, white);
                    padding: 8px 24px;
                    font-weight: 800;
                    font-size: clamp(1.2rem, 3vw, 1.8rem);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    box-shadow: var(--flyer-shadow, 0 10px 30px -5px rgba(0, 0, 0, 0.3));
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    cursor: default;
                }

                .title:hover {
                    transform: scale(1.05) rotate(-1deg);
                    background-color: var(--header-primary);
                }

                .subtitle {
                    background-color: var(--header-primary);
                    color: var(--flyer-text-inverse, white);
                    padding: 6px 20px;
                    font-weight: 700;
                    font-size: clamp(1rem, 2vw, 1.4rem);
                    transform: rotate(-3deg);
                    margin-top: -5px;
                    box-shadow: var(--flyer-shadow, 0 10px 30px -5px rgba(0, 0, 0, 0.3));
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    cursor: default;
                }

                .subtitle:hover {
                    transform: rotate(0deg) scale(1.1);
                    background-color: var(--header-secondary);
                }

                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            </style>
            <header class="flyer-header" part="header">
                <div class="logo-box" part="logo-box">
                    <div class="title" part="title"><slot name="title">LA SEDE</slot></div>
                    <div class="subtitle" part="subtitle"><slot name="subtitle">TE ACOMPAÑA</slot></div>
                </div>
            </header>
        `;
    }
}

customElements.define("flyer-header", FlyerHeader);
export default FlyerHeader;
