var mainController = angular.module("mainController", []);

mainController.controller("LoginController", ["$scope", "$rootScope","$http", function($scope,$rootScope, $http){

    $rootScope.userData = {
        user: {},
        lastAccessed:"",
        userList:[]
    }

    $scope.login = function(){
        var data = $('#loginForm').serializeObject();
        data = JSON.stringify(data);
        var url = 'http://localhost:3000/users/login.json';
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post(url, data, config)
            .then(
                function(response){
                    var userDataStr = JSON.stringify(response.data);
                    var json = JSON.parse(userDataStr);
                    alert(json.message);
                    if(json.message!=="failure") {
                        $(location).attr("href", "#/dashboard/users");
                        $rootScope.userData = json;
                    }
                    else
                    {
                        alert('Invalid credentials');
                    }
                },
                function(response){
                    alert("Error");
                }
            );
    }

}]);


mainController.controller("UserController", ["$scope","$rootScope", "$http", function($scope,$rootScope, $http){

    $scope.lastAccess = $(".last-accessed span").text;

    $scope.getUsers = function() {
        var url = 'http://localhost:3000/users.json';
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.get(url, config)
            .then(
                function (response) {
                    $scope.users= response.data;
                    alert($scope.users);
                },
                function (response) {
                    alert("Error");
                }
            );
    }

    $scope.addUser = function()
    {
        var data = $('#userForm').serializeObject();
        data = JSON.stringify(data);
        alert(data);
        var url = 'http://localhost:3000/users.json';
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post(url,data, config)
            .then(
                function (response) {
                    alert("Success")
                },
                function (response) {
                    alert("Error");
                }
            );
    }

  /*  getUsers();*/

}]);

mainController.controller('JobController', ["$scope", "$http", function($scope, $http){



}]);