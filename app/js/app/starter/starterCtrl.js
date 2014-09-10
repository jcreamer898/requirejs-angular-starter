define(function(require) {
    var starter = require("./module");

    function StarterCtrl ($log) {
        this.message = "Starter module!";

        $log.log("starter module loaded...");
    }

    StarterCtrl.$inject = ["$log"];

    return starter.controller("StarterCtrl", StarterCtrl);
});