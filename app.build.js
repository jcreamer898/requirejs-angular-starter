({
    appDir: "app",
    baseUrl: "js/",
    dir: "dist",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    //optimize: "none",

    mainConfigFile: 'app/js/app/main.js',

    packages: ["starter"],

    modules: [
        //Optimize the require-jquery.js file by applying any minification
        //that is desired via the optimize: setting above.
        {
            name: "app"
        }
    ]
})