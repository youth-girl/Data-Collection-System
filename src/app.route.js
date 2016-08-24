(function(){
    angular.module('app')
        .config(route);

    function route($routeProvider){
        $routeProvider
            .when('/start',{
                templateUrl:'module/base/base.html',
                controller:'BaseController',
                controllerAs:'vm'
            })
            .otherwise({
                redirectTo:'/login'
            });
    }
})();