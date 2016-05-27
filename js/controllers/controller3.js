
(function () {
    'use strict';

    var app = angular.module('myApp');

		app.controller('Controller3', ['$scope','dataShare', function ($scope, dataShare) { 
			
			
							

			var doorC = {
			dNumber     : "3",
			dTitle      : "Slaying the Nazgûl",
			panel       : "/assets/panels/pnl1.jpg"
			};

			$scope.doorC = doorC;
			

  	$scope.items = [
        {
            "id": "1",
            "firstName": "Glenda",
            "lastName": "Fitzpatrick",
            "age": "21",
            "gender": "f"
        },
        {
            "id": "2",
            "firstName": "Frank",
            "lastName": "Jones",
            "age": "32",
            "gender": "m"
        },
        {
            "id": "3",
            "firstName": "Sarah",
            "lastName": "Graham",
            "age": "24",
            "gender": "f"
        }
        
	];			
									   
									   
			
			// Dispatch
			$scope.send = function(){
				dataShare.sendData($scope.text); 
         	};
			
			

		// BEGIN MID ONE HOVER EVENTS
		$scope.hoverMdTwo = function () {	
											 
				var doorTween = new TweenLite(blackDoor3, 0.5,{y:-230, alpha:0.7, ease:Power2.easeOut});
				var myTween = new TweenLite(clipedPanel3, 0.7, { delay:0.2, y:0, alpha:1, ease:Power2.easeInOut});
				
				var tween = TweenLite.fromTo("#clipedPanel3", 1, 
					{"background-position-y": "0px", "backgroundPosition-y": "0px"},
					{"background-position-y": "-230px", "backgroundPosition-y": "0px", alpha:1}
				);
				var numTween = new TweenLite(d3, 0.5,{alpha:0.1, ease:Power2.easeOut});
				var titleTween = new TweenLite(titleC, 0.5, {alpha:1, ease:Power2.easeOut});
			};
		
			
		$scope.offMdTwo = function () {	
			
			var doorTween = new TweenLite(blackDoor3, 0.7,{delay:0.2, y:0, alpha:1, ease:Power2.easeOut});
			var myTween = new TweenLite(clipedPanel3, 0.5, {y:0, ease:Power2.easeIn});
			
			var tween = TweenLite.fromTo("#clipedPanel3", 1,
				{"background-position-y": "-230px",   "backgroundPosition-y": "-230px"}, 
				{"background-position-y": "130px", "backgroundPosition-y": "130px", alpha:0, y:0}
				); 
				var numTween = new TweenLite(d3, 0.5,{alpha:0.3, ease:Power2.easeOut});
				var titleTween = new TweenLite(titleC, 0.5, {alpha:0.2, ease:Power2.easeOut});
			};
			

		
	}]);
	

}());




