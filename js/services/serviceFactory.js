    var serviceId = 'serviceFactory';

    angular.module('myApp').factory(serviceId, ['$http', serviceFactory]);

    function serviceFactory($http) {

      function GetTimeFunc() {     
         return $http({
                url: 'http://time.jsontest.com/',
                method: "GET"
            });
        }

        
    function GetIPFunc() {     
         return $http({
                url: 'http://ip.jsontest.com',
                method: "GET"
            });
    }

    function GetLanguageFunc() {     
         return $http({
                url: 'http://headers.jsontest.com/',
                method: "GET"
            });
    }



        var service = {
            GetTimeFunc: GetTimeFunc,
            GetIPFunc: GetIPFunc,
            GetLanguageFunc: GetLanguageFunc
        };

        return service;
    }