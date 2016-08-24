(function(){
    angular.module('app.nav',[])
        .controller('NavController',NavController);

    NavController.$inject = ['$scope'];

    function NavController($scope){
        var vm = this;
        vm.navList = [
            {
                'tabName':'采集器系统配置',
                'tabActive':true
            },
            {
                'tabName':'采集器通用信息配置',
                'tabActive':false
            },
            {
                'tabName':'采集数据显示',
                'tabActive':false
            }
        ];
        vm.activeTab = activeTab;
        /*///////////////////////////////////*/
        function activeTab($index){
            clearTabActive();
            vm.navList[$index].tabActive = true;
            $scope.$emit('activeName',vm.navList[$index]);
        }
        function clearTabActive(){
            for(var i=0; i<vm.navList.length; i++){
                vm.navList[i].tabActive = false;
            }
        }
    }
})();