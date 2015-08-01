angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: null
  };

  $scope.redirect = function(code){ 
    Links.redirect(code)
      .success(function(data){ 
        console.log("redirected!")
      })
  }

  $scope.getLinks = function(){
    Links.getLinks()
      .success(function(data){
      //figure out if data is sending back an object with a data property or just raw data
        $scope.data.links = data;
      })
      .error(function(error){ 
        console.error("there was an error in getLinks")
      })
  };

  $scope.getLinks();

});
