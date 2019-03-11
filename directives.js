myApp.directive('chipClass', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var mdChip = elem.parent().parent();
            mdChip.addClass(attrs.chipClass);
        }
    };
});

myApp.directive('chipClick', function ($parse) {
    return function (scope, elem, attrs) {
        var fn = $parse(attrs.chipClick);
        var mdChip = elem.parent().parent();
        mdChip.bind('click', function (event) {
            scope.$apply(function () {
                event.preventDefault();
                fn(scope);
            });
        });
    };
});
