angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  //do something with $location?

  $scope.signOut = function(){ 
    Auth.signout()
  };

  $scope.addLink = function(link){ 
    Links.addLink(link)
      .success(function(data){ 
        //what is data?
        $scope.link = data;
        $location.path('/links')
      })
      .error(function(data,error){ 

        console.error('there was an error posting to the server')
      })
  }
});
