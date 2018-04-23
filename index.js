angular
  .module('a', [])
  .controller('c', ($scope,$window) => {
    lista = [ ]
    $scope.kb = () => {
        re = new RegExp(`^${$scope.ef}.*`,`i`)
        $scope.lista = lista.filter( v => re.test(v) )
    }
    $scope.hozzaad = () => {
      lista.push($scope.ef)
      lista.sort( (a,b) => a.localeCompare(b) )
      $scope.ef=""
      $scope.lista=lista
    }
    $scope.lista=lista
  } )
