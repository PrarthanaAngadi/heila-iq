var contactApp = angular.module('contactApp', []);

contactApp.controller('contactController', function ($scope, $http) {

    $scope.user = {
        name: "",
        company: "",
        email: "",
        userInfo: "N/A",
        message: ""
    }

    $scope.sendEmail = function(){
        var data = $('#contactForm').serializeObject();
        data = JSON.stringify(data);
        var url = 'http://localhost:3000/contact/email.json';
        var config = {
            headers : {
                'Content-Type': 'application/json;'
            }
        }

        $http.post(url, data, config)
            .then(
                function(response){
                    alert("Success");
                },
                function(response){
                    alert("Error");
                }
            );


        /*$http({
            method: 'POST',
            url: 'http://localhost:3000/contact/email.json',
            data: JSON.stringify(data)
        }).then(function successCallback(response) {
            alert('Success: '+response);
        }, function errorCallback(response) {
            alert('error: '+response);
        });*/
    }



});