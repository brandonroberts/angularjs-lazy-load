import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { AngularJSComponent } from './angular-js/angular-js.component';
import { HomeComponent } from './home/home.component';
import { App404Component } from './app404/app404.component';

// Match any URL that starts with `phones`
export function isAngularJSUrl(url: UrlSegment[]) {
  return url.length > 0 && url[0].path.startsWith('phones') ? ({consumed: url}) : null;
}

export const ROUTES: Routes = [
  // Routes rendered by Angular go here
  { path: '', component: HomeComponent },

  // AngularJS routes match in this Route. AngularJS is lazy
  // loaded by the `AngularJSComponent` component, so any Route
  // that renders this component will cause AngularJS to be
  // lazy loaded.
  { 
    matcher: isAngularJSUrl, 
    component: AngularJSComponent
  },
  
  // Angular 404 page will still work
  { path: '**', component: App404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
