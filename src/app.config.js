(function(){
    angular.module('app')
        .run(run);

    run.$inject = ['$rootScope','$location'];

    function run($rootScope,$location){
        $rootScope.$on('$locationChangeStart',function(){
            $location.path('/start');
        });
    }
})();
