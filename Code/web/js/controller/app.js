var myApp = angular.module("myApp", [
    "ngRoute",
    "mainController"
]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.when("/dashboard", {
        templateUrl: "partials/login.html",
        controller: "LoginController"
    }).when("/dashboard/users", {
        templateUrl: "partials/users.html",
        controller: "UserController"
    }).otherwise({
        redirectTo: "/dashboard"
    })
}])
