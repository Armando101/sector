import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <app-hero></app-hero>
        <main>
          <app-card></app-card>
        </main>
      </div>
    );
  }
}
