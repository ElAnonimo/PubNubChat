'use strict';

/**
 * @ngdoc function
 * @name pnChatApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pnChatApp
 */
angular.module('pnChatApp')
  .controller('JoinCtrl', ['$scope', '$rootScope', '$location', 'Pubnub', function($scope, $rootScope, $location, Pubnub) {
		console.log('JoinCtrl initialized.');
		
		$scope.data = {
			username: 'User ' + Math.floor(Math.random() * 1000)
		};
		
		$scope.join = function() {
			console.log('Joining...');
			
			var _ref, _ref1;
			$rootScope.data || ($rootScope.data = {});
			$rootScope.data.username = (_ref = $scope.data) !== null ? _ref.username : void 0;
			$rootScope.data.city = (_ref1 = $scope.data) !== null ? _ref1.city : void 0;
			$rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__' + $scope.data.username;
			
			console.log($rootScope);
			
			Pubnub.init({
				subscribe_key: 'sub-c-1b45966e-c345-11e5-8a35-0619f8945a4f',
				publish_key: 'pub-c-a3632d67-69f2-40bb-ab5d-492aab22f456',
				uuid: $rootScope.data.uuid
			});
			
			return $location.path('/main');
		};
  }]);