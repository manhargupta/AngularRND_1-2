
angular.module("myJsApp").component("jsApp", {
  templateUrl : 'ng1/app/js/ng1.html',
  controller: function($scope, $state) {
    console.log("jsApp component started");
    $scope.tabs = [
      { title:'tab1', route: 'ng1.tab1' },
      { title:'tab2', route: 'ng1.tab2' }
    ];
    $scope.parentName = 'homeCtrl';

    $scope.go = function(route) {
      $state.go(route);
    };
  }
});
