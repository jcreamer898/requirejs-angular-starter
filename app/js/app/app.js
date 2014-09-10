define(function(require) {
    var angular = require("angular");

    require("ngRoute")
    require("starter");

    angular.module("app", [
        "ngRoute",
        "my.starter"
        ]);
});