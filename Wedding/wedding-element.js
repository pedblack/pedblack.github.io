import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `wedding-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WeddingElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'wedding-element',
      },
    };
  }
}

window.customElements.define('wedding-element', WeddingElement);
