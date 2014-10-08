define(function(require) {
    var angular = require("angular");

    require("ngRoute");

    var starter = require("starter");

    angular.module("app", [
        "ngRoute",
        starter.name
    ]);
});