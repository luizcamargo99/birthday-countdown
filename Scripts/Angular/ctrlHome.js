
angular.module('app').controller('HomeController', ['$scope','$interval', function ($scope, $interval) {

    $scope.Title = "MAYARA'S BIRTHDAY COUNTDOWN";

    $scope.DifferenceBetweenDates = function(date1, date2) {
        return Math.abs(date2 - date1) / (1000 * 3600 * 24);
    };

    $scope.CountDown = function () {

        const now = new Date();
        let year = now.getFullYear();
        
        if (now.getMonth() >= 8){
            year += 1;
        }

        const birthday = new Date(year+'-09-01T00:00:00');      
          
        const seconds = 60 - now.getSeconds();

        if (seconds == 60){
            $scope.seconds = 0; 
        }
        else {
            $scope.seconds = seconds;
        }

        $scope.minutes = 60 - now.getMinutes();

        const hours = 24 - now.getHours();

        if ($scope.minutes == 0) {
            $scope.hours = hours;
        }
        else {
            $scope.hours = hours - 1;
        }   

        $scope.days = parseInt($scope.DifferenceBetweenDates(now, birthday));
    }

    $interval($scope.CountDown, 1000);

    

}]);

