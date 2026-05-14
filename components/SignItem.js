/**
 * SignItem Component
 * Renders an individual row in the sign board.
 */
class SignItem extends HTMLElement {
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
                    --sign-item-hover-bg: rgba(255, 255, 255, 0.08);
                    --sign-item-hover-color: var(--sign-accent, #00aae4);
                    --sign-item-color: var(--sign-text, white);
                    --sign-item-border: rgba(255, 255, 255, 0.1);
                }

                .sign-row {
                    padding: clamp(12px, 3vh, 18px) 20px;
                    border-bottom: 1px solid var(--sign-item-border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    color: var(--sign-item-color);
                    text-decoration: none;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .sign-row:hover {
                    background: var(--sign-item-hover-bg);
                    padding-left: 25px;
                    color: var(--sign-item-hover-color);
                }

                .sign-row::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                    transition: 0.5s;
                }

                .sign-row:hover::before {
                    left: 100%;
                }

                .arrow {
                    font-size: 1.2rem;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    display: inline-block;
                }

                .sign-row:hover .arrow {
                    transform: translateX(8px);
                    animation: moverFlecha 0.6s infinite alternate;
                }

                @keyframes moverFlecha {
                    from { transform: translateX(5px); }
                    to { transform: translateX(12px); }
                }
            </style>
            <div class="sign-row" part="row">
                <span class="label" part="label"><slot>Ubicación</slot></span>
                <span class="arrow" part="arrow">➜</span>
            </div>
        `;
    }
}

customElements.define("sign-item", SignItem);
export default SignItem;
