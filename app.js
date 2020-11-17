(function(){
    'use strict';
    angular.module('LunchChecker',[])
    .controller('LunchCheckerController', LunchCheckerController);
    LunchCheckerController.$inject = ['$scope'];
    function LunchCheckerController($scope){
        $scope.dishes = '';
        $scope.message = '';
        $scope.checked = false;
        $scope.checkL = function(){
            if($scope.dishes.length === 0){
                $scope.empty = true;
            
            }else {
                $scope.checked = true;
                $scope.empty = false;
                var dish = $scope.dishes.split(",");
                var len = dish.filter(function(tr){
                    return tr.trim !== '';
                });
                if (len.length <= 3){
                    $scope.message = "Enjoy!";
                    
                }else {
                    $scope.message = "Too much!"
                }
                
            }
        };
    }
    
})();