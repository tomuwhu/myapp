angular
  .module('a', [])
  .controller('c', ($scope,$window) => {
        $scope.x=1
        $scope.y=1
        lnko = (a,b) => {
            if (a == b) return a
            if (a > b) return lnko(a-b,b)
            else return lnko(a,b-a)
        }
        $scope.f = () =>
            $scope.er=lnko(parseInt($scope.x), parseInt($scope.y))
        $scope.f()    
        $window.document.getElementById('i').focus()
  } )
