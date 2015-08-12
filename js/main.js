'use strict';
angular.module('app', []);

angular.module('app').controller('mainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];

function MainCtrl($scope) {
    $scope.user = {
        name: 'Luke Skywalker',
        address: {
            street: 'PO Box 123',
            city: 'Secret Rebel Base',
            planet: 'Yavin 4'
        },
        friends: [
                'Han',
                'Leia',
                'Chewbacca'
            ]
    };
}

angular.module('app').directive('userInfoCard', function () {
    return {
        templateUrl: 'html/userInfoCard.html',
        restrict: 'E'
    };
});
