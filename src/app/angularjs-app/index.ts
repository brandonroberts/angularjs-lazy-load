import * as angular from 'angular';
import 'angular-route';

import 'jquery';

const appName = 'myApp';

angular.module(appName, [
  'ngRoute'
])
.config(['$routeProvider', '$locationProvider',
  function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/phones', {
        template: '<phone-list></phone-list>'
      }).
      when('/other', {
        template: 'placeholder text'
      }).      
      otherwise('/other');
  }]
)
.component('phoneList', {
  template: `
    <p>
      AngularJS Phones
    </p>
  `
});

export function bootstrap(el: HTMLElement) {
  return angular.bootstrap(el,  [appName]);
}