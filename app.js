(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.counter = 0;
  $scope.texte = "cons";
  $scope.sayMessage ="";

  $scope.upCounter = function(){

  	$scope.result = $scope.texte.split(',');
  	//$scope.sayMessage = $scope.result;
  	if ($scope.result.length <4){
  		$scope.sayMessage = "Enjoy !";
  	} else{
  		$scope.sayMessage = "Too much !";
  	}
  };


}

})();
