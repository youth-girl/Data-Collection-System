(function(){
    angular.module('app')
        .config(config);

    function config($routeProvider){
        $routeProvider
            .when({
                template:'<div>1234</div>'
            })
            .otherwise({
                redirectTo:'/login'
            });
    }
})();