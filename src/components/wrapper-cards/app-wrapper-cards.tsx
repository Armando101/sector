import { Component, h } from "@stencil/core";

@Component({
  tag: 'app-wrapper-cards',
  styleUrl: 'app-wrapper-cards.css',
  shadow: true
})
export class AppWrapperCards  {
  render() {
    return (
      <div class="wrapper">
        <app-card></app-card>
      </div>
    )
  }
}