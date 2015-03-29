function Hello($scope, $http) {
    $http.get('http://localhost:3000/api/v1/projects').
        success(function(response, status, headers, config) {
            $scope.projects = response.data;
            console.log(response.data);
        }).
 		error(function(response, status, headers, config) {
 			console.log(data.message);
      	});;
}