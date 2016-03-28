app.controller("productsController", function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese", "Yogurt", "Pears"];
  $scope.addItem = function () {
    $scope.errortext = "";
    if (!$scope.add) {return;}
    if ($scope.products.indexOf($scope.add) == -1) {
        $scope.products.push($scope.add);
    } else {
        $scope.errortext = "The item is already in your grocery list.";
    }
  }
  $scope.removeItem = function(item) {
    $scope.errortext = "";
    $scope.products.splice(item, 1);
  }
});