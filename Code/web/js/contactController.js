var contactApp = angular.module('contactApp', []);

contactApp.controller('contactController', function ($scope, $http) {

    $scope.userInfo = ["Micro-Grid Developer", "Micro-Grid Installer", "End User", "Other"];
    $scope.user = {};
    $scope.submitForm = function () {

        $http({
            method: 'POST',
            url: 'abc.rb',
            data: $scope.user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {

            })
    }

});