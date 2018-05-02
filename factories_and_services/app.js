
(function(){

    var app = angular.module('customersApp', ['ngRoute']);
    app.config(function($routeProvider, $locationProvider){
        // Avoids problems with urls
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: '../views/customers.html'
            })
            .when('/orders/:customerId', {
                    controller: 'OrdersController',
                    templateUrl: '../views/orders.html'
                })
            .otherwise({redirectTo:'/'});
    });
}());