/**
 * Created by fs on 12.04.15.
 */
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-karma');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            sources: 'lib',
            tests: 'test',
            dist: '../js-hacks/dist'
        },
        karma: {
            unit: {
                configFile: '<%= config.tests %>/karma.conf.js'
            }
        },
        bundle: {
            hello: {
                name: 'hello-world',
                src: '<%= config.sources %>/SayHello.js',
                dest: '<%= config.dist %>'
            }
        }
    });


    grunt.registerTask('test', [ 'karma:single' ]);

    grunt.registerTask('auto-test', [ 'karma:unit' ]);

    grunt.registerTask('build', [ 'bundle', 'copy' ]);

    // Default task(s).
    grunt.registerTask('default', ['test', 'build']);

};