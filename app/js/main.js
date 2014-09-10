require.config({
    paths: {
        angular: "vendor/angular/angular",
        ngRoute: "vendor/angular-route/angular-route"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        ngRoute: {
            deps: ["angular"]
        }
    },
    packages: ["starter"]
});

require(["angular", "app"], function(angular) {
    angular.bootstrap(document.documentElement, ["app"]);
});