(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.texte = " ";
  $scope.sayMessage ="";

  $scope.wordsCounter = function(){

  	$scope.result = $scope.texte.split(',');
  	if ($scope.result.length < 4){
  		$scope.sayMessage = "Enjoy !";
  	} else{
  		$scope.sayMessage = "Too much !";
  	}
  };


}

})();
