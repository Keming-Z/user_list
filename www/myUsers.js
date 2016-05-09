var module = angular.module('myApp', ['ngRoute', 'customServices']);
module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/create', {
                    templateUrl: 'create.html',
                    controller: 'createCtrl'
                }).
                when('/edit', {
                    templateUrl: 'edit.html',
                    controller: 'editCtrl'
                }).
                otherwise({
                    //redirectTo: '/list',
                    templateUrl: 'list.html',
                    controller: 'userCtrl'
                });
        }]);
module.controller('userCtrl', function($scope, logService) {
    $scope.getUser = function() {
        logService.getUser($scope);
    };
    $scope.getUser();
    $scope.deleteUser = function(ind) {
        logService.deleteUser(ind).then(function(res) {
            $scope.getUser();
        });
        console.log("delete from controller");
    };

    $scope.editUser = function(id) {
        logService.editUser(id);
    };
})


module.controller('createCtrl',function($scope, logService, $location) {
    $scope.getEdit = function() {
        logService.getEdit($scope);
    };
    $scope.getEdit();
    
    $scope.saveChange = function() {
        logService.creatSave($scope.fName, $scope.lName, $scope.Age, $scope.Sex, $scope.Title).then(function(res) {
            $location.path("/");
        })
        console.log('create user!!!!!!');
    };
        
        $scope.$watch('passw1',function() {$scope.test();});
        $scope.$watch('passw2',function() {$scope.test();});
        $scope.$watch('fName',function() {$scope.test();});
        $scope.$watch('lName',function() {$scope.test();});
        $scope.$watch('Title',function() {$scope.test();});
        $scope.$watch('Sex',function() {$scope.test();});
        $scope.$watch('Age',function() {$scope.test();});
        
        $scope.test = function() {
            if ($scope.passw1 !== $scope.passw2) {
                $scope.error = true;
            } else {
                $scope.error = false;
            }
            $scope.incomplete = false;
            if ($scope.edit && (!$scope.fName.length ||!$scope.lName.length ||!$scope.passw1.length || !$scope.passw2.length || !$scope.Title.length || !$scope.Sex.length || !$scope.Age.length)) {
                $scope.incomplete = true;
            }
        };
})

module.controller('editCtrl',function($scope, logService, $location) {
    $scope.getEdit = function() {
        logService.getEdit($scope);
    };
    $scope.getEdit();
    
    $scope.saveChange = function() {
        logService.editSave($scope.fName, $scope.lName, $scope.Age, $scope.Sex, $scope.Title).then(function(res) {
            $location.path("/");
        })
    };
        
        $scope.$watch('passw1',function() {$scope.test();});
        $scope.$watch('passw2',function() {$scope.test();});
        $scope.$watch('fName',function() {$scope.test();});
        $scope.$watch('lName',function() {$scope.test();});
        $scope.$watch('Title',function() {$scope.test();});
        $scope.$watch('Sex',function() {$scope.test();});
        $scope.$watch('Age',function() {$scope.test();});
        
        $scope.test = function() {
            if ($scope.passw1 !== $scope.passw2) {
                $scope.error = true;
            } else {
                $scope.error = false;
            }
            $scope.incomplete = false;
            if ($scope.edit && (!$scope.fName.length ||!$scope.lName.length ||!$scope.passw1.length || !$scope.passw2.length || !$scope.Title.length || !$scope.Sex.length || !$scope.Age.length)) {
                $scope.incomplete = true;
            }
        };
})