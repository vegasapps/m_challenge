
(function () {
    'use strict';

    var app = angular.module('myApp');

		app.controller('Controller1', ['$scope','dataShare', function ($scope, dataShare) {
		
		
		var doorA = {
		dNumber     : "1",
		dTitle      : "Ring in the fires of Mount Doom",
		panel       : "/assets/panels/pnl1.jpg"
	    };
		
		$scope.doorA = doorA;
		


		

		
		$scope.$on('data_shared',function(){
			
			var gameState =  dataShare.getData();    
				//$scope.gameState;
					
		});
			
		
			
		
		
			/* DOOR_A EVENTS */
			$scope.hoverMdTwo = function () {	
											 
				var doorTween = new TweenLite(blackDoor1, 0.5,{y:-230, ease:Power2.easeOut});
				var myTween = new TweenLite(clipedPanel1, 0.7, { delay:0.2, y:0, alpha:1, ease:Power2.easeInOut});
				
				var tween = TweenLite.fromTo("#clipedPanel1", 1, 
					{"background-position-y": "0px", "backgroundPosition-y": "0px"},
					{"background-position-y": "-230px", "backgroundPosition-y": "0px", alpha:1}
				);
				var numTween = new TweenLite(d1, 0.5,{alpha:0.1, ease:Power2.easeOut});
				var titleTween = new TweenLite(titleA, 0.5, {alpha:1, ease:Power2.easeOut});
			};
		
			
		$scope.offMdTwo = function () {	
			
			var doorTween = new TweenLite(blackDoor1, 0.7,{delay:0.2, y:0, ease:Power2.easeOut});
			var myTween = new TweenLite(clipedPanel1, 0.5, {y:0, ease:Power2.easeIn});
			
			var tween = TweenLite.fromTo("#clipedPanel1", 1,
				{"background-position-y": "-230px",   "backgroundPosition-y": "-230px"}, 
				{"background-position-y": "130px", "backgroundPosition-y": "130px", alpha:0, y:0}
				); 
				var numTween = new TweenLite(d1, 0.2, {alpha:0.3, delay:0.3, ease:Power2.easeOut});
				var titleTween = new TweenLite(titleA, 0.5, {alpha:0.2, ease:Power2.easeOut});
			};
						
			
	
	}]);

	
}());


