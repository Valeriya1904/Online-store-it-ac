import { Component } from '../../../core/Component';

class Card extends Component {
  static get observedAttributes() {
    return ['class', 'imges', 'description', 'price'];
  }
  render() {
    const className = this.props.class;
    const images = this.props.img;
    const description = this.props.description;
    const price = this.props.price;
    return `
    <div class="card">
                  <img class="image-fit" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    class="card-img-top" alt="image">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                      card's content.</p>
                    <small class="card-title pricing-card-title">220$</small>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
    `;
  }
}

customElements.define('it-card', Card);
