"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");

//const dist = "./dist/";
const dist = "./../../MAMP/htdocs/Test/";


// NEXT 3 TASKS :  TECHNICAL ONES


gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});


// DEVELOPMENT BUILD
gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false, // Have Another .task for this :  gulp.task("watch", () => { Code }
                    devtool: "source-map", // DeBug Convenient
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,  // Consol Will Show the Problems

                                    corejs: 3, // Core js Configs
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist)) // Take the Resulting File & Send to dist dir
                .on("end", browsersync.reload); // If Thmth Changed -> Reload Page
});

gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*")
                .pipe(gulp.dest(dist + "/assets"))
                .on("end", browsersync.reload);
});


// NEXT 2 TASKS :  Will Be Launched By Bottom  gulp.task("default") Task  (gulp + Entr  in console)

// WATCH THE CHANGES TASK
gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html")); // WATCH Essets  &  LAUNCH Certain Task
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

// BUILD TASK :  If Thmth Was Changed BEFORE the Gulp Was Started
gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js"));



// PRODUCTION BUILD
gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist));
});


// DEFAULT TAST :  (gulp + Entr  in console)
gulp.task("default", gulp.parallel("watch", "build"));