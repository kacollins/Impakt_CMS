(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
          
            $urlRouterProvider.otherwise("/home");
            
            $stateProvider
              .state('login', {
                  url: "/",
                  templateUrl: "login.html",
                  controller: "login_controller"
              })
			  .state('home', {
				  url: "/home",
				  templateUrl: "home.html",
				  controller: "home_controller",
				  onEnter: function($state, $timeout, $rootScope){
					if ($rootScope.auth == false){
						$timeout(function(){
							$state.go('login');
						}, 0);
					}
				  }					
			  })
			  .state('contact', {
				  url: "/contact",
				  templateUrl: "contact.html",
				  controller: "contact_controller"
			  })
			  .state('about', {
				  url: "/about",
				  templateUrl: "about.html",
				  controller: "about_controller"
			  })
			  .state('register', {
				  url: "/register",
				  templateUrl: "register.html",
				  controller: "register_controller"
			  });
        });
})();
