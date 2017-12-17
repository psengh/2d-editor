(function () {
    'use strict';

    angular.module('app')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['$scope', 'Fabric', 'FabricConstants', 'Keypress'];

    function EditorController($scope, Fabric, FabricConstants, Keypress) {

        $scope.file = {};
        $scope.fabric = {};
        $scope.FabricConstants = FabricConstants;

        $scope.fonts = [
            'Arial',
            'Lora',
            'Croissant One',
            'Architects Daughter',
            'Emblema One',
            'Graduate',
            'Hammersmith One',
            'Oswald',
            'Oxygen',
            'Krona One',
            'Indie Flower',
            'Courgette',
            'Gruppo',
            'Ranchers'
        ];

        $scope.zoomIn = function () {
            $scope.fabric.canvasScale += 0.1;
            $scope.fabric.setZoom()
        };
        $scope.zoomOut = function () {
            $scope.fabric.canvasScale -= 0.1;
            $scope.fabric.setZoom()
        };


        $scope.$watch('fabric.selectedObject.fontFamily', function (newVal) {
            if (typeof newVal === 'string' && newVal) {
                $scope.fabric.setFontFamily(newVal);
                $scope.fabric.render();
            }
        });

        $scope.$watch('fabric.selectedObject.text', function (newVal) {
            if (typeof newVal === 'string') {
                $scope.fabric.setText(newVal);
                $scope.fabric.render();
            }
        });

        $scope.$watch('fabric.selectedObject.fontSize', function (newVal) {
            if (typeof newVal === 'string' || typeof newVal === 'number') {
                $scope.fabric.setFontSize(newVal);
                $scope.fabric.render();
            }
        });

        $scope.$watch('fabric.canvasBackgroundColor', function (newVal) {
            if ($scope.fabric.setCanvasBackgroundColor) {
                $scope.fabric.setCanvasBackgroundColor(newVal);
            }
        });


        $scope.$watch('fabric.selectedObject.fill', function (newVal) {
            console.log(newVal);
            if (typeof newVal === 'string') {
                console.log(newVal, 'in');

                $scope.fabric.setFill(newVal);
                $scope.fabric.render();
            }
        });

        //
        // Creating Canvas Objects
        // ================================================================
        $scope.addShape = function (path) {
            $scope.fabric.addShape('http://fabricjs.com/assets/15.svg');
        };

        $scope.addImage = function (image) {
            $scope.fabric.addImage(image);
        };

        $scope.addImageUpload = function (file, invalid) {
            var reader = new FileReader();
            reader.onload = function (f) {
                var data = f.target.result;
                $scope.addImage(data);
            };
            reader.readAsDataURL(file);
        };

        //
        // Editing Canvas Size
        // ================================================================
        $scope.selectCanvas = function () {
            $scope.canvasCopy = {
                width: $scope.fabric.canvasOriginalWidth,
                height: $scope.fabric.canvasOriginalHeight
            };
        };

        $scope.setCanvasSize = function () {
            $scope.fabric.setCanvasSize($scope.canvasCopy.width, $scope.canvasCopy.height);
            $scope.fabric.setDirty(true);
            delete $scope.canvasCopy;
        };

        //
        // Init
        // ================================================================
        $scope.init = function () {
            $scope.fabric = new Fabric({
                JSONExportProperties: FabricConstants.JSONExportProperties,
                textDefaults: FabricConstants.textDefaults,
                shapeDefaults: FabricConstants.shapeDefaults,
                json: {
                    height: 857,
                    width: 1241
                }
            });
        };

        $scope.saveDiagram = function () {
            var newFile = {
                name: $scope.file.name,
                data: $scope.fabric.getJSON(),
                createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
            }
            console.log(newFile);
        }

        $scope.$on('canvas:created', $scope.init);

        Keypress.onSave(function () {
            $scope.updatePage();
        });


    }

})();