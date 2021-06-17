import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [BrowserModule],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const helloWorldElement = createCustomElement(HelloWorldComponent, {
      injector: this.injector,
    });
    customElements.define('hello-world', helloWorldElement);
  }
}
