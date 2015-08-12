'use strict';
angular.module('app', []);

angular.module('app').controller('mainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];

function MainCtrl($scope) {
    $scope.user1 = {
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

    $scope.user2 = {
        name: 'Han Solo',
        address: {
            street: 'PO Box 123',
            city: 'Mos Eisley',
            planet: 'Tattoine'
        },
        friends: [
            'Luke',
            'Leia',
            'Chewbacca'
        ]
    };
}

angular.module('app').directive('userInfoCard', function () {
    return {
        templateUrl: 'html/userInfoCard.html',
        restrict: 'E',
        scope: {
            user: '='
        },
        controller: function ($scope) {
            $scope.knightMe = function (user) {
                user.rank = 'Knight';
            };
            console.log($scope);
        }
    };
});
