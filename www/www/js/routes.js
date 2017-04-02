angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('tabsController', {
        url: '/page1',
        templateUrl: 'templates/tabsController.html',
        abstract: true
      })

      .state('tabsController.login', {
        url: '/page5',
        views: {
          'tab1': {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
          }
        }
      })

      .state('tabsController.signup', {
        url: '/page6',
        views: {
          'tab3': {
            templateUrl: 'templates/signup.html',
            controller: 'signupCtrl'
          }
        }
      })

  .state('tabsControllerLib', {
    url: '/page18',
    templateUrl: 'templates/tabsControllerLib.html',
    abstract:true
  })

  .state('tabsControllerLib.library', {
    url: '/page16',
    views: {
      'tab2': {
        templateUrl: 'templates/library.html',
        controller: 'libraryCtrl'
      }
    }
  })

  .state('tabsControllerLib.stats', {
    url: '/page17',
    views: {
      'tab4': {
        templateUrl: 'templates/stats.html',
        controller: 'statsCtrl'
      }
    }
  })

  .state('menu2', {
      url: '/page7',
      templateUrl: 'templates/upcomingEvents.html',
      controller: 'upcomingEventsCtrl'
    })


      .state('offers', {
        url: '/page8',
        templateUrl: 'templates/offers.html',
        controller: 'offersCtrl'
      })

      .state('myCart', {
        url: '/page9',
        templateUrl: 'templates/attending.html',
        controller: 'attendingCtrl'
      })

      .state('create_event', {
        url: '/create',
        templateUrl: 'templates/createEvent.html',
        controller: 'createEventCtrl'
      })

      .state('createList', {
        url: '/createList',
        templateUrl: 'templates/hosting.html',
        controller: 'hostingCtrl'
      })

      .state('lastOrders', {
        url: '/page10',
        templateUrl: 'templates/lastOrders.html',
        controller: 'lastOrdersCtrl'
      })

      .state('favourite', {
        url: '/page11',
        templateUrl: 'templates/favourite.html',
        controller: 'favouriteCtrl'
      })

      .state('settings', {
        url: '/page12',
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      })

  .state('library', {
    url: '/page18',
    templateUrl: 'templates/tabsControllerLib.html',
    controller: 'libraryCtrl'
  })

  .state('support', {
    url: '/page13',
    templateUrl: 'templates/support.html',
    controller: 'supportCtrl'
  })

      .state('checkout', {
        url: '/page16',
        templateUrl: 'templates/checkout.html',
        controller: 'checkoutCtrl'
      })

      .state('tabsController.forgotPassword', {
        url: '/page15',
        views: {
          'tab1': {
            templateUrl: 'templates/forgotPassword.html',
            controller: 'forgotPasswordCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/page1/page5')


  });
