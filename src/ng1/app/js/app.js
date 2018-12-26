
const app = angular.module("myJsApp", ['ui.bootstrap', 'ui.router']);




app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
// Angular Routing
  $stateProvider.state('ng1', {
    url: '/ng1',
    templateUrl: 'ng1/app/js/ng1.html',
  }).state('ng1.tab1', {
    url: 'posts',
    templateUrl: 'ng1/app/js/tab1.html'
  }).state('ng1.tab2', {
    url: 'addPost',
    templateUrl: 'ng1/app/js/tab2.html'
  });


}]);
