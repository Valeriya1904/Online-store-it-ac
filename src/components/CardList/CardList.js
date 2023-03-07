import { Component } from '../../core/Component';
import '../molecules/Card';

class CardList extends Component {
  render() {
    return `
        <div class="row">
        <div class="col-sm-3 mb-3"><it-card></it-card></div>
        </div>
        `;
  }
}

customElements.define('card-list', CardList);
