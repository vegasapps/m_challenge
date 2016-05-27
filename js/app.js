/**
 // INITIATES ALL CONTROLLERS AT RUNTIME
**/

(function () {
    'use strict';
     angular.module('myApp', []);
	
})();


		



var app = angular.module('myApp');


app.factory('dataShare',function($rootScope){
  var service = {};
	
  service.data = false;
	
  service.sendData = function(data){
      this.data = data;
      $rootScope.$broadcast('data_shared');
  };
	
  service.getData = function(){
    return this.data;
  };
  return service;
});