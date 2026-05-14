/**
 * PeopleSection Component
 * Renders the students image at the bottom.
 */
class PeopleSection extends HTMLElement {
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
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 1;
                    overflow: hidden;
                    border-radius: inherit;
                }

                .people-container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                }

                .person-img {
                    width: 95%;
                    max-height: 65%;
                    object-fit: contain;
                    transform: translateY(100%);
                    animation: slideUpPerson 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
                }

                @keyframes slideUpPerson {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
            </style>
            <div class="people-container" part="container">
                <img src="./assets/personas.png" alt="Personas UCR" class="person-img" part="image">
            </div>
        `;
    }
}

customElements.define("people-section", PeopleSection);
export default PeopleSection;
