(function(){
	var app = angular.module('hotel', []);


app.controller('hotelCtrl', function($scope, usersService){
	$scope.users = null;
	usersService.get().then((res) => {
		console.log(res);
		$scope.users = res;
	});

});

app.factory('usersService', function($http, $q){
	return {
	  users: null,
      error: null,
      get() {
        let deferred = $q.defer();
        if(!this.users) {
          $http.get('http://localhost:3003/api/users/').then((res) => {
            this.users = res.data;
            deferred.resolve(this.users)
          });
        }
        else {
          deferred.resolve(this.users);
        }
        return deferred.promise;
      }

	}
});
})();