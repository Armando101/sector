import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: './app-header.css',
  shadow: true,
})
export class AppHeader {
  render() {
    return <header>
          <h1>Sector</h1>
          <ul>
            <li>Tablas</li>
            <li>Llantas</li>
            <li>Components</li>
          </ul>
        </header>
  }
}
