var mainController = angular.module("mainController", []);

mainController.controller("LoginController", ["$scope", "$rootScope", "$http",
    function ($scope, $rootScope, $http) {

    $rootScope.userData = {
        user: "",
        lastAccessed: "",
        userList: []
    }

    $scope.login = function () {
        var data = $('#loginForm').serializeObject();
        data = JSON.stringify(data);
        var url = 'http://localhost:3000/users/login.json';
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post(url, data, config)
            .then(
                function (response) {
                    var userDataStr = JSON.stringify(response.data);
                    var json = JSON.parse(userDataStr);
                    if (json.message !== "failure") {
                        $(location).attr("href", "#/dashboard/users");
                        $rootScope.userData = json;
                    }
                    else {
                        alert('Invalid credentials');
                    }
                },
                function (response) {
                    alert("Error");
                }
            );
    }

}]);


mainController.controller("UserController", ["$scope", "$rootScope", "$http",
    function ($scope, $rootScope, $http) {

    $scope.getUsers = function () {
        var url = 'http://localhost:3000/users.json';
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.get(url, config)
            .then(
                function (response) {
                    $scope.users = JSON.parse(JSON.stringify(response.data)).userList;
                },
                function (response) {
                    alert("Error");
                }
            );
    };

        $scope.addUser = function () {
            var data = $('#userForm').serializeObject();
            data = JSON.stringify(data);
            var url = 'http://localhost:3000/users.json';
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post(url, data, config)
                .then(
                    function (response) {
                        var userDataStr = JSON.stringify(response.data);
                        var json = JSON.parse(userDataStr);
                        var message = json;
                        if (json.message === "success") {
                            $('#userForm')[0].reset();
                            getUsers();
                        }
                        else if (json.message === "failure") {

                        }
                        else if (json.message === "User already exits") {

                        }
                    },
                    function (response) {
                        alert("Error");
                    }
                );
        }
        $scope.updateUser = function (id) {
            var data = $('#userForm').serializeObject();
            data = JSON.stringify(data);
            var url = 'http://localhost:3000/users/id';
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post(url, data, config)
                .then(
                    function (response) {
                        var userDataStr = JSON.stringify(response.data);
                        var json = JSON.parse(userDataStr);
                        var message = json;
                        if (json.message === "success") {
                            $('#userForm')[0].reset();
                            getUsers();
                        }
                        else if (json.message === "failure") {

                        }
                        else if (json.message === "User already exits") {

                        }
                    },
                    function (response) {
                        alert("Error");
                    }
                );
        }
        
        $scope.viewuser =function (id) {

            var url = 'http://localhost:3000/users/'+id+'.json';
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.get(url, config)
                .then(
                    function (response) {
                        var userData = JSON.parse(JSON.stringify(response.data));
                       $scope.singleuser= userData.user;
                        $('#edituserModal').modal();
                    },
                    function (response) {
                        alert("Error");
                    }
                );
        }
    if ($rootScope.userData !== undefined) {
        $scope.lastAccess = $rootScope.userData.lastAccessed.created_at;
        $scope.users = $rootScope.userData.userList;
        $scope.sessionUser = $rootScope.userData.user[0];
        Session.user = $scope.sessionUser;
        Session.lastAccessed = $scope.lastAccess
        localStorage.setItem("session", JSON.stringify(Session));
    } else {
        Session = JSON.parse(localStorage.getItem("session"));
        console.log(Session);
        $scope.getUsers();
        $scope.sessionUser = Session.user;
        $scope.lastAccess = Session.lastAccessed;
    }

    /*  getUsers();*/

}]);

/*
mainController.factory("UserSession", function() {
    return {

        user: {
                firstName: "",
                lastName: "",
                email: "",
                dob: "",
                active: ""
        },

        invalidate: function () {
            this.user = {
                firstName: "",
                lastName: "",
                email: "",
                dob: "",
                active: ""
            }
        },

        set: function (userData) {
            this.user = userData;
        }
    };
});*/
