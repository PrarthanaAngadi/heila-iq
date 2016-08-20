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
    }).when ("/dashboard/jobs",{
        templateUrl: "partials/jobs.html",
        controller: "JobController"
    }).when ("/dashboard/blogs",{
        templateUrl: "partials/createblog.html",
        controller: "BlogController"
    }).otherwise({
        redirectTo: "/dashboard"
    })
}])
