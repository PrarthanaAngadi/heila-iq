/**
 * Created by Tushar_Kale on 8/20/16.
 */

    var jobsApp = angular.module('jobsApp', []);

    jobsApp.controller("jobsController", ["$scope", "$rootScope", "$http", function ($scope, $rootScope, $http) {

    $scope.getJobs = function () {
    var url = 'http://localhost:3000/jobs.json';
    var config = {
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
    }
    }

    $http.get(url, config)
    .then(
    function (response) {
    $scope.jobDetails = JSON.parse(JSON.stringify(response.data)).jobs;
},
    function (response) {
    alert("Error");
}
    );
};
}]);

