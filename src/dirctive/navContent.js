(function(){
    angular.module('app')
        .directive('navContent',function ()  {
            return {
                link:link
            }
        });
    function link(scope, ele, attr){
        var contentList = {
            '采集器系统配置':0,
            '采集器通用信息配置':1,
            '采集数据显示':2
        };
        var activeIndex=0;
        isShow();
        scope.$on('activeName', function (event,data) {
            activeIndex = contentList[data.tabName];
            isShow();
        });
        function isShow(){
            $(ele).children().not(activeIndex).hide();
            $(ele).children().eq(activeIndex).show();
        }

    }
})();
