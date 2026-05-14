/**
 * AnimatedTitle Component
 * Renders reactive and animated titles.
 */
class AnimatedTitle extends HTMLElement {
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
                    --title-main-color: var(--flyer-primary, #6a2a8c);
                    --title-sub-color: var(--flyer-primary, #6a2a8c);
                    --title-accent: var(--flyer-secondary, #00aae4);
                }

                .title-container {
                    text-align: center;
                    padding: 0 20px;
                    margin: 10px 0;
                    z-index: 5;
                    position: relative;
                }

                .title-main {
                    color: var(--title-main-color);
                    font-size: clamp(1rem, 2.5vw, 1.3rem);
                    font-weight: 600;
                    margin-bottom: 8px;
                    opacity: 0;
                    animation: fadeInUp 0.8s ease forwards;
                    display: inline-block;
                    position: relative;
                }

                .title-main::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: var(--title-accent);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    transform: translateX(-50%);
                }

                .title-container:hover .title-main::after {
                    width: 80%;
                }

                .title-sub {
                    color: var(--title-sub-color);
                    font-size: clamp(1.5rem, 5vw, 2.2rem);
                    font-weight: 900;
                    text-transform: uppercase;
                    line-height: 1.1;
                    opacity: 0;
                    animation: fadeInUp 1s ease 0.2s forwards;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    display: block;
                }

                .title-sub:hover {
                    color: var(--flyer-text-inverse, white);
                    text-shadow: 0 4px 15px rgba(106, 42, 140, 0.4);
                    transform: scale(1.05) translateY(-2px);
                    -webkit-text-stroke: 1px var(--title-main-color);
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
            <div class="title-container" part="container">
                <h2 class="title-main" part="main-text"><slot name="main-text">El respeto no se negocia</slot></h2>
                <h1 class="title-sub" part="sub-text"><slot name="sub-text">¡Pará ya de acosar!</slot></h1>
            </div>
        `;
    }
}

customElements.define("animated-title", AnimatedTitle);
export default AnimatedTitle;
