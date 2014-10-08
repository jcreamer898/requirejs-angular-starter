define(function(require) {
    var angular = require("angular"),
        name = "my.starter",
        ngModule;

    ngModule = angular.module("my.starter", [])
        .controller("StarterCtrl", require("./starterCtrl"));

    return {
        name: name,
        ngModule: ngModule
    };
});