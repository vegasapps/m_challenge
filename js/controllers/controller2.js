
(function () {
    'use strict';

    var app = angular.module('myApp');

		app.controller('Controller2', ['$scope','dataShare', function ($scope, dataShare) { 
			
			var doorB = {
			dNumber     : "2",
			dTitle      : "Orcs of the Tolkien Gateway",
			panel       : "/assets/panels/pnl1.jpg"
			};

			$scope.doorB = doorB;
			
			
			
			// Dispatch
			$scope.send = function(){
				//dataShare.sendData($scope.text); 
         	};
			
			

		// BEGIN MID ONE HOVER EVENTS
		$scope.hoverMdTwo = function () {	
											 
				var doorTween = new TweenLite(blackDoor2, 0.5,{y:-230, alpha:0.7, ease:Power2.easeOut});
				var myTween = new TweenLite(clipedPanel2, 0.7, { delay:0.2, y:0, alpha:1, ease:Power2.easeInOut});
				
				var tween = TweenLite.fromTo("#clipedPanel2", 1, 
					{"background-position-y": "0px", "backgroundPosition-y": "0px"},
					{"background-position-y": "-180px", "backgroundPosition-y": "0px", alpha:1}
				);
				var numTween = new TweenLite(d2, 0.5,{alpha:0.1, ease:Power2.easeOut});
				var titleTween = new TweenLite(titleB, 0.5, {alpha:1, ease:Power2.easeOut});
			};
		
			
		$scope.offMdTwo = function () {	
			
			var doorTween = new TweenLite(blackDoor2, 0.7,{delay:0.2, y:0, alpha:1, ease:Power2.easeOut});
			var myTween = new TweenLite(clipedPanel2, 0.5, {y:0, ease:Power2.easeIn});
			
			var tween = TweenLite.fromTo("#clipedPanel2", 1,
				{"background-position-y": "-180px",   "backgroundPosition-y": "-230px"}, 
				{"background-position-y": "180px", "backgroundPosition-y": "130px", alpha:0, y:0}
				); 
				var numTween = new TweenLite(d2, 0.5,{alpha:0.3, delay:0.3, ease:Power2.easeOut});
				var titleTween = new TweenLite(titleB, 0.5, {alpha:0.2, ease:Power2.easeOut});
			};
			
			
			
			
	
		
	}]);
	

}());




