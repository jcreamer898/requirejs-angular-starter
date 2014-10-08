define(function(require) {
    function StarterCtrl ($log) {
        this.message = "Starter module!";

        $log.log("starter module loaded...");
    }

    StarterCtrl.$inject = ["$log"];

    return StarterCtrl;
});