var app = angular.module('app', ['ngRoute']);

// Routes
app.config(function($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'home.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'aboutController'
    })
    .when('/projects', {
        templateUrl: 'projects.html',
        controller: 'projectsController'
    })
})

app.controller('homeController', ['$scope', function($scope) {
    
}]);

app.controller('aboutController', ['$scope', function($scope) {
    
}]);

app.controller('projectsController', ['$scope', function($scope) {
    
}]);