var app = angular.module('myApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'homeController'
		})
		.state('projects', {
			url: '/projects',
			templateUrl: '/templates/projects.html',
			controller: 'projectsController'
		})
		.state('about', {
			url: '/about',
			templateUrl: '/templates/about.html',
			controller: 'aboutController'
		})		
		.state('vlog', {
			url: '/vlog',
			templateUrl: '/templates/vlog.html',
			controller: 'vlogController'
		})



	$urlRouterProvider.otherwise('/');

});