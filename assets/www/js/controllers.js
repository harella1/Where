angular.module('app.controllers', [])

.controller('whereILeftMyCarCtrl', function($scope) {

})

.controller('driveToCtrl', function($scope) {

})

.controller('saveLocationCtrl', function($scope, Camera) {

      $scope.show = function (){
        var tapEnabled = true; //enable tap take picture
        var dragEnabled = true; //enable preview box drag across the screen
        var toBack = false; //send preview box to the back of the webview
        var element = angular.element($scope);
        var rect = {x: element.topleft, y: 100, width: 400, height:400};
        cordova.plugins.camerapreview.startCamera(rect, "front", tapEnabled, dragEnabled, toBack);

        cordova.plugins.camerapreview.show();
      };

      $scope.takePicture = function (options) {

         var options = {
            quality : 75,
            targetWidth: 200,
            targetHeight: 100,
            sourceType: 1
         };

         Camera.getPicture(options).then(function(imageData) {
            $scope.picture = imageData;;
         }, function(err) {
            console.log(err);
         });

      };

})

.controller('favoritesCtrl', function($scope) {

})

.controller('hereILeftMyCarCtrl', function($scope) {

})

.controller('historyCtrl', function($scope) {

})
