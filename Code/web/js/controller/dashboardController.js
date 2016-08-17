angular.module('userapp',[]).controller("UserController",['$scope',function ($scope) {
    $scope.data = {
        "entries": [{
            "id": 2081,
            "name": "BM",
            "niceName": "bodmas"
        }, {
            "id": 8029,
            "name": "Mas",
            "niceName": "Masm"
        }],
        "count": 2
    };
}])