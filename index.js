angular
  .module('a', [])
  .controller('c', ($scope,$window) => {
    $scope.lista = [ ]
    $scope.hozzaad = () => {
      $scope.lista.push($scope.ef)
      $scope.lista.sort( (a,b) => a.localeCompare(b) )
    }
  } )
