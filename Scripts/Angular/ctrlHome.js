
angular.module('app').controller('HomeController', ['$scope','$interval', function ($scope, $interval) {

    $scope.Title = "MAYARA'S BIRTHDAY COUNTDOWN";

    $scope.DifferenceBetweenDates = function(date1, date2) {
        return Math.abs(date2 - date1) / (1000 * 3600 * 24);
    };
    
    $scope.Countdown = function () {

        const now = new Date();
        let year = now.getFullYear();
        
        if (now.getMonth() >= 8){
            year += 1;
        }
        
        const birthday = new Date(`${year}-09-01T00:00:00`);     
          
        $scope.CalculateSeconds(now);

        $scope.minutes = 60 - now.getMinutes();

        $scope.CalculateHours(now); 

        $scope.days = parseInt($scope.DifferenceBetweenDates(now, birthday));
    }

    $scope.CalculateSeconds = function (now) {
        const seconds = 60 - now.getSeconds();
        $scope.seconds = seconds === 60 ? 0 : seconds;
    }

    $scope.CalculateHours = function (now) {
        const hours = 24 - now.getHours();
        $scope.hours = $scope.minutes === 0 ? hours : hours - 1;
    }

    $interval($scope.Countdown, 1000);    

}]);

