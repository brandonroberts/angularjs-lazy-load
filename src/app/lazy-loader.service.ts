import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {
  bootstrapped = false;
  constructor() {}
  
  load(el?: HTMLElement): void {
    import('./angularjs-app').then(app => {
      try {
        app.bootstrap(el);
        this.bootstrapped = true;
      } catch (e) {
        console.error(e);
      }
    });
  }
}
