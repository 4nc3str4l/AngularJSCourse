(function(){
    
    
    var OrdersController =  function($scope, $routeParams, customersFactory){
        
        var customerId = $routeParams.customerId;
        $scope.roders = null;
        $scope.customer = null;

        function init(){
            // Search the customers for the customer id
            $scope.customer = customersFactory.getCustomer(customerId);
        }
        init();
    };
    
    // Used if we want to use uglyfiers
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp').controller('OrdersController', OrdersController);
}());

