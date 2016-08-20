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
                        $(".alert-danger").show();
                    }
                },
                function (response) {
                    $(".alert-danger").show();
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
                    $(".alert-danger").show();
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
                            $(".alert-success").show();

                        }
                        else if (json.message === "failure") {
                            $(".alert-danger").show();

                        }
                        else if (json.message === "User already exits") {
                            $(".alert-danger").show();


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

}]);

mainController.controller("JobController", ["$scope", "$rootScope", "$http",
    function ($scope, $rootScope, $http) {

        $scope.id = Session.user.id;
        $scope.number = 0;
        $scope.getNumber = function(num) {
            return new Array(num);
        }

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
                        $scope.jobs = JSON.parse(JSON.stringify(response.data)).jobs;
                    },
                    function (response) {
                        $(".alert-danger").show();
                    }
                );
        };

        $scope.addJob = function () {

            var data = $('#jobForm').serializeObject();
            data = JSON.stringify(data);
            var url = 'http://localhost:3000/jobs.json';
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
                            $('#jobForm')[0].reset();
                            $(".alert-success").show();

                            /*this.getJobs();*/
                        }
                        else if (json.message === "failure") {
                            $(".alert-danger").show();

                        }
                        else if (json.message === "User already exits") {
                            $(".alert-danger").show();


                        }
                    },
                    function (response) {
                        alert("Error");
                    }
                );
        }


    }]);

