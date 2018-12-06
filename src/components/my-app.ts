class MyApp extends HTMLElement {
  static readonly template = (document.createElement('template').innerHTML = `
    <h1>Hello world!</h1>

    <p>
      <slot></slot>
    </p>
  `);

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = MyApp.template;
  }
}

customElements.define('my-app', MyApp);
