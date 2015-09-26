ROOT_URL = 'http://testing.berkeley-pbl.com';
// ROOT_URL = 'http://localhost:3000'

var token = getParameterByName('token');
var email = 'davidbliu@gmail.com';
console.log(token);
var app = angular.module('goApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'HomeController'
        })
        .when('/users', {
            templateUrl : 'views/users.html',
            controller  : 'UsersController'
        })
        .when('/about', {
            templateUrl : 'views/about.html'
        })
        .when('/add', {
            templateUrl : 'views/add.html',
            controller  : 'AddController'
        })
        .when('/share', {
            templateUrl : 'views/share.html',
            controller  : 'ShareController'
        })
        .when('/insights', {
            templateUrl : 'views/insights.html',
            controller  : 'InsightsController'
        })
        .when('/settings', {
            templateUrl : 'views/settings.html',
            controller  : 'SettingsController'
        })
        .when('/tags', {
            templateUrl : 'views/tags.html',
            controller  : 'TagsController'
        })
        .otherwise({
          'redirect_to': '/'
        });
});

function tokenizedURL(url){
    if(url.indexOf('?') != -1){
        tokenized = url + '&token='+token;
    }
    else{
        tokenized =  url + '?token='+token;
    }
    return tokenized;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getTagCloud(){
  tagCloud = [];
  tagCloud.push({'name': 'WD'})
  return tagCloud;
}

function getIconImage(type){
    return image_hash[type];
}

function toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }
function getToken(){
  email = 'davidbliu@gmail.com';
  return toHex(email);
}