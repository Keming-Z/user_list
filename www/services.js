var baseLogger = function($http) {
    // this.fName = '';
    //        this.lName = '';
    //        this.Title = '';
    //        this.Sex = '';
    //        this.Age = '';
    var editId = 0;
    this.keyword = '';
    this.order = 'lName';
    this.edit = true;
    this.error = false;
    this.incomplete = false;

    this.getUser = function($scope) {
        $http.get('http://localhost:8888/users').success(function(res) {
            $scope.users = res;
            console.log('user in service' + res);
        })
    }
    this.deleteUser = function(id) {
        return $http.delete('http://localhost:8888/users/' + id)
    }
    this.editUser = function(id) {
        editId = id;
    };
    this.getEdit = function($scope) {
        $http.get('http://localhost:8888/users/' + editId).success(function(res) {
            console.log("id" + editId);
            console.log("user" + res);
            $scope.fName = res.fName;
            $scope.lName = res.lName;
            $scope.Title = res.Title;
            $scope.Sex = res.Sex;
            $scope.Age = res.Age;
        })
    };
    this.creatSave = function(f, l, a, s, t) {
        var data = JSON.stringify({ first: f, last: l, age: a, sex: s, title: t });
        return $http.post('http://localhost:8888/users/', data);
    };



    this.editSave = function(f, l, a, s, t) {
        var data = JSON.stringify({ first: f, last: l, age: a, sex: s, title: t });
        console.log("data" + data);
        return $http.put('http://localhost:8888/users/' + editId, data);
        console.log('edit');
    };
};

var module = angular.module("customServices", [])
    .service("logService", baseLogger)
