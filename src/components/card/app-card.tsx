import { Component, h } from "@stencil/core";

@Component({
  tag: 'app-card',
  styleUrl: 'app-card.css',
  shadow: true
})
export class AppCard {
  render() {
    return <div class="card">
      <div class="card-content">
        <h3>Cruiser</h3>
        <p>Si bien la mayoría de las tablas de nuestra línea son capaces de navegar, una tabla designada como crucero suele ser un poco más corta que una tabla corta estándar con una punta más corta, una forma más direccional y ruedas suaves. La mayoría de estas tablas se construyen a partir de moldes regulares de tablas cortas y son capaces de patinar en una variedad de terrenos, incluidos parques, pero también pueden cruzar un paseo marítimo.</p>
        <a href="#">Leer más </a>
      </div>
      <div class="card-image">
        <img src="/assets/images/01.jpg" alt="Imagen promocional" />
      </div>
    </div>
  }
}