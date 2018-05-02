(function(){
    
    
    var OrdersController =  function($scope, $routeParams, customersService){
        
        var customerId = $routeParams.customerId;
        $scope.roders = null;
        $scope.customer = null;

        function init(){
            // Search the customers for the customer id
            $scope.customer = customersService.getCustomer(customerId);
        }
        init();
    };
    
    // Used if we want to use uglyfiers
    OrdersController.$inject = ['$scope', '$routeParams', 'customersService'];

    angular.module('customersApp').controller('OrdersController', OrdersController);
}());

