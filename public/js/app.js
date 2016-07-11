var app = angular.module('blondiebits', ['ngRoute'])

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/:id', {
    	controller: 'SingleItemController',
    	templateUrl: 'views/singleItem.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});