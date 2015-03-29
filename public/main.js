function Hello($scope, $http) {
    $http.get('http://localhost:3000/api/v1/projects').
        success(function(data) {
            $scope.projects = data;
        });
}