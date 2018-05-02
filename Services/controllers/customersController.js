(function(){
    
    
    var CustomersController =  function($scope, customersService){
        
        $scope.sortBy = 'name';
        $scope.reverse = 'false';
        
        $scope.customers = []
        
        function init(){
            $scope.customers = customersService.getCustomers();
        }

        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        } 

        init();
    };
    
    // Used if we want to use uglyfiers
    CustomersController.$inject = ['$scope', 'customersService'];

    angular.module('customersApp').controller('CustomersController', CustomersController);
}());

