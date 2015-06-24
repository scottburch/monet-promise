module.exports = function (grunt) {

    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            pivotal: {
                options: {
                    outfile: 'specRunner.html',
                    specs: 'specs/**/*Spec.js',
                    helpers: 'helpers/**/*Helper.js',
                    vendor: [
                        '../libs/monet.js',
                        '../src/monet-promise.js'
                    ]
                }
            }
        }

//        watch: {
//            specs: {
//                files: ['specs/**/*Spec.js', 'helpers/*Helper.js'],
//                tasks: 'jasmine:headed:build'
//            }
//        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('specRunner', ['jasmine:pivotal:build']);
//    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.registerTask('default', ['jasmine:headless']);

//    grunt.registerTask('headless', ['jasmine:headless']);
//    grunt.registerTask('headed', ['jasmine:headed:build']);
};
