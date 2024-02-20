import {html, LitElement} from 'lit';
import {localized, msg} from '@lit/localize';

@localized()
@customElement('element-input')
export class ElementInput extends LitElement {

  override render() {
    return html`<coco .prop="${msg('World')}" attr="${msg('World')}"></coco>`;
  }
}
}
