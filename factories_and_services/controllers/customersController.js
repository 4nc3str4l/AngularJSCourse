(function(){
    
    
    var CustomersController =  function($scope, customersFactory){
        
        $scope.sortBy = 'name';
        $scope.reverse = 'false';
        
        $scope.customers = []
        
        function init(){
            $scope.customers = customersFactory.getCustomers();
        }

        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        } 

        init();
    };
    
    // Used if we want to use uglyfiers
    CustomersController.$inject = ['$scope', 'customersFactory'];

    angular.module('customersApp').controller('CustomersController', CustomersController);
}());

