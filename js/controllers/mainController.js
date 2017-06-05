angular
    .module('myApp').controller('mainCtrl', function ($scope, serviceFactory) {

        $scope.title = 'check123';
        $scope.loaderBool = true;

        // Every second it get's the time
        window.setInterval(function () {
            serviceFactory.GetTimeFunc().then(
                // callback function for successful http request
                function success(response) {
                    $scope.currentTime = response.data;
                    $scope.loaderBool = false;

                },
                // callback function for error in http request
                function error(response) {
                    // log errors
                }
            );
        }, 1000);

        /*
        on start and once
         */
        //Getting IP
        serviceFactory.GetIPFunc().then(
            // callback function for successful http request
            function success(response) {

                $scope.currentIP = response.data;

                console.log($scope.currentIP);
                //   $scope.loaderBool = false;
                //   $scope.records = $scope.devices.length;

            },
            // callback function for error in http request
            function error(response) {
                // log errors
            }
        );
        //Getting Language
        serviceFactory.GetLanguageFunc().then(
            // callback function for successful http request
            function success(response) {

                $scope.currentLanguage = response.data["Accept-Language"];

                $scope.currentLanguage = $scope.currentLanguage.split(",", 1)[0];

            },
            // callback function for error in http request
            function error(response) {
                // log errors
            }
        );

        //Open sharing options by click
        $scope.openSharing = function () {
            var script = document.createElement('script');
            script.src = "//platform-api.sharethis.com/js/sharethis.js#property=5933d5b674499600110b50d9&product=sticky-share-buttons";
            script.async = 'async';
            script.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(script);


        }


        window.onload = function () {
            $scope.loaderBool = false;
        };


    });