import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `wedding-home`
 * home page of the wedding web site
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WeddingHome extends PolymerElement {
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
        value: 'wedding-home',
      },
    };
  }
}

window.customElements.define('wedding-home', WeddingHome);
