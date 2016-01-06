requirejs-angular-starter
=========================

This repository is a starting place for building large scale [angular.js](http://angularjs.org) applications with [require.js](http://requirejs.org).

To get started, clone or fork the repo and use it as your starting place!

### Require.js Packages
This starter uses require.js packages to organize the app into smaller pieces. Have a look in the `starter` folder.

You'll see a `main.js`.

```js
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
```

The job of this file is to create a module, and return an object containing at least a `name`.

In the application's `main.js` you need to add the package.

```js
packages: ["starter"]
```

In `app.js` you require the package, and then utilize the `package.name`.

```js
 var starter = require("starter");

    angular.module("app", [
        "ngRoute",
        starter.name
    ]);
```


### Build
To create a build of your app, first install node, and then run...

```bash
npm install -g requirejs
```

Then run,

```bash
r.js -o app.build.js
```

This will create a `/dist` folder with the built app.

**Note: the dist folder is included in this repository, but you may want to add `dist` to your `.gitignore` to keep it out of git**
