var contactApp = angular.module('contactApp', []);

contactApp.controller('contactController', function ($scope, $http) {

    /*$scope.submitForm = function () {

     $http({
     method: 'POST',
     url: 'abc.rb',
     data: $scope.user,
     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
     })
     .success(function (data) {

     })
     }*/

    $scope.user = {
        name: "",
        company: "",
        email: "",
        userInfo: "N/A",
        message: ""
    }

    $scope.sendEmail = function(){

    }

});