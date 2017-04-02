angular.module('app.directives', [])
  .directive('select', function () { //same as "ngSelect"
    return {
      restrict: 'E',
      scope: false,
      link: function (scope, ele) {
        ele.on('touchmove touchstart', function (e) {
          e.stopPropagation();
        })
      }
    }
  })
  .directive('blankDirective', [function () {

  }]);
