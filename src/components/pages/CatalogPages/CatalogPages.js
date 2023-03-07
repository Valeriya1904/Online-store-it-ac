import { Component } from '../../../core/Component';
import '../../molecules/Sidebar';
import '../../CardList';

class CatalogPage extends Component {
  render() {
    return `
    <div class="container mt-5 pt-5 border-top">
    <div class="row">
    <div class="col-sm-3 border-end"><it-sidebar></it-sidebar></div>
    <div class="col-sm-9"><card-list></card-list></div>
    <div></div>
    </div>
    </div>
      `;
  }
}

customElements.define('catalog-page', CatalogPage);
