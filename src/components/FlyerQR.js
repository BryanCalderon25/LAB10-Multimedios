/**
 * FlyerQR Component
 * Renders the QR code section with hover effects.
 */
class FlyerQR extends HTMLElement {
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
                    --qr-text-color: var(--flyer-primary, #6a2a8c);
                    --qr-frame-bg: white;
                    --qr-shadow: var(--flyer-shadow, 0 10px 30px -5px rgba(0, 0, 0, 0.3));
                }

                .qr-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    margin-top: 25px;
                    opacity: 0;
                    animation: fadeInUp 1s ease 0.4s forwards;
                    z-index: 10;
                    position: relative;
                }

                .qr-text {
                    font-size: clamp(0.7rem, 1.5vw, 0.85rem);
                    color: var(--qr-text-color);
                    font-weight: 600;
                    background: rgba(255, 255, 255, 0.3);
                    padding: 4px 12px;
                    border-radius: 20px;
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                }

                .qr-frame {
                    background: var(--qr-frame-bg);
                    padding: 8px;
                    border-radius: 16px;
                    box-shadow: var(--qr-shadow);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .qr-frame:hover {
                    transform: scale(1.1) rotate(2deg);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
                }

                .qr-img {
                    width: clamp(80px, 20vw, 120px);
                    height: auto;
                    display: block;
                    border-radius: 8px;
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
            <div class="qr-section" part="section">
                <p class="qr-text" part="text"><slot name="text">¿Necesitas ayuda? Escanea aquí</slot></p>
                <div class="qr-frame" part="frame">
                    <img src="./assets/qr.png" alt="Código QR UCR" class="qr-img" part="image">
                </div>
            </div>
        `;
    }
}

customElements.define("flyer-qr", FlyerQR);
export default FlyerQR;
