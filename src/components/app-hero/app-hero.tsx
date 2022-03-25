import { Component, h } from "@stencil/core";

@Component({
  tag: 'app-hero',
  styleUrl: './app-hero.css',
  shadow: true
})
export class AppHero {
  render() {
    return <div class="hero">
      <app-header></app-header>
      <div class="wrapper">
        <div class="social">
          <span>Insta</span>
          <span>facebook</span>
        </div>
        <h2>Si estás buscando escribir tu nombre en la calle, entonces quieres una tabla de Sector Nine.</h2>
        <div class="menu">
          <ol>
            <li>Inicio</li>
            <li>01</li>
            <li>02</li>
            <li>03</li>
          </ol>
        </div>
      </div>
    </div>
  }
}