angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  //do something with $location?

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
