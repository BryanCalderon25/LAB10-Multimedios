/**
 * SignBoard Component
 * Renders the directional sign board.
 */
class SignBoard extends HTMLElement {
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
                    --sign-bg: linear-gradient(145deg, #0d2c5a, #071935);
                    --sign-radius: 16px;
                    --sign-shadow: var(--shadow-premium, 0 10px 30px rgba(0,0,0,0.3));
                    --sign-footer-bg: #f1f5f9;
                    --sign-footer-color: #0d2c5a;
                    --sign-footer-hover-bg: var(--sign-accent, #00aae4);
                    --sign-footer-hover-color: white;
                }

                .sign-board-container {
                    width: clamp(280px, 80vw, 360px);
                    background: var(--sign-bg);
                    border-radius: var(--sign-radius);
                    overflow: hidden;
                    box-shadow: var(--sign-shadow);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    animation: fadeInUp 1s ease forwards;
                    display: flex;
                    flex-direction: column;
                }

                .items-container {
                    display: flex;
                    flex-direction: column;
                }

                .sign-footer {
                    text-align: center;
                    padding: 15px;
                    background: var(--sign-footer-bg);
                    color: var(--sign-footer-color);
                    font-weight: 900;
                    letter-spacing: 4px;
                    font-size: 1.1rem;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    border-top: 4px solid var(--sign-footer-hover-bg);
                }

                .sign-board-container:hover .sign-footer {
                    background: var(--sign-footer-hover-bg);
                    color: var(--sign-footer-hover-color);
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
            <section class="sign-board-container" part="container">
                <div class="items-container" part="items">
                    <slot name="items"></slot>
                </div>
                <div class="sign-footer" part="footer"><slot name="footer">UCR</slot></div>
            </section>
        `;
    }
}

customElements.define("sign-board", SignBoard);
export default SignBoard;
