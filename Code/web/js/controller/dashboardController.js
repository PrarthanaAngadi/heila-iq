angular.module('userapp',[]).controller("UserController",['$scope',function ($scope,$http) {
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

    }])