angular.module('ui.fabric.directive', [
		'ui.fabric.canvas'
	])

	.directive('fabric', ['$timeout', 'FabricCanvas', '$window', function ($timeout, FabricCanvas, $window) {

		return {
			scope: {
				fabric: '='
			},
			controller: function ($scope, $element) {
				FabricCanvas.setElement($element);
				FabricCanvas.createCanvas();

				// Continue rendering the canvas until the user clicks
				// to avoid the "calcOffset" bug upon load.
				// $('body').on('click', 'canvas', function () {
				// 	if ($scope.fabric.setUserHasClickedCanvas) {
				// 		$scope.fabric.setUserHasClickedCanvas(true);
				// 	}
				// });

				//
				// Watching Controller Variables
				// ============================================================

				$scope.$watch('fabric.selectedObject.fontSize', function (newVal) {
					if (typeof newVal === 'string' || typeof newVal === 'number') {
						$scope.fabric.setFontSize(newVal);
						$scope.fabric.render();
					}
				});

				$scope.$watch('fabric.selectedObject.opacity', function (newVal) {
					if (typeof newVal === 'string' || typeof newVal === 'number') {
						$scope.fabric.setOpacity(newVal);
						$scope.fabric.render();
					}
				});

				$scope.$watch('fabric.selectedObject.tint', function (newVal) {
					if (typeof newVal === 'string') {
						$scope.fabric.setTint(newVal);
						$scope.fabric.render();
					}
				});
			}
		};

	}]);
