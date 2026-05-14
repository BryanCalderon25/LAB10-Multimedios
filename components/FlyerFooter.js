/**
 * FlyerFooter Component
 * Renders the institucional footer.
 */
class FlyerFooter extends HTMLElement {
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
                    --footer-bg: rgba(13, 44, 90, 0.85);
                    --footer-text: white;
                    --footer-brand-color: var(--flyer-secondary, #00aae4);
                }

                .flyer-footer {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    background: var(--footer-bg);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    color: var(--footer-text);
                    padding: 12px 10px;
                    z-index: 20;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    box-sizing: border-box;
                    border-bottom-left-radius: inherit;
                    border-bottom-right-radius: inherit;
                }

                .footer-content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: clamp(5px, 2vw, 15px);
                    font-size: clamp(0.55rem, 1.5vw, 0.7rem);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .footer-brand {
                    font-weight: 800;
                    color: var(--footer-brand-color);
                }

                .footer-sep {
                    width: 1px;
                    height: 12px;
                    background: rgba(255,255,255,0.3);
                }

                .footer-motto {
                    font-weight: 500;
                    opacity: 0.9;
                }
            </style>
            <footer class="flyer-footer" part="footer">
                <div class="footer-content" part="content">
                    <span class="footer-brand" part="brand"><slot name="brand">UCR</slot></span>
                    <div class="footer-sep" part="separator"></div>
                    <span class="footer-motto" part="motto"><slot name="motto">LIBRE DE ACOSO SEXUAL</slot></span>
                    <div class="footer-sep" part="separator"></div>
                    <span class="footer-motto" part="location"><slot name="location">Sede de Guanacaste</slot></span>
                </div>
            </footer>
        `;
    }
}

customElements.define("flyer-footer", FlyerFooter);
export default FlyerFooter;
