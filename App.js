(function() {
  "use strict";

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.lunchItem = "";
    $scope.resultString;
    $scope.result = null;

    $scope.checkItems = function() {
      if($scope.lunchItem.length > 0) {
        var itemArray = $scope.lunchItem.split(",");
        $scope.resultString = itemCount(itemArray);
        $scope.result = true;
      }
      else
      {
        $scope.resultString = "Please enter data first";
        $scope.result = false;
      }
    };
  }

  function itemCount(items) {
    var itemCount = items.length;
     console.log("Items entered" + itemCount);

    if(itemCount < 4)

      return "Enjoy!";
    else
      return "Too much!";
  }
})();