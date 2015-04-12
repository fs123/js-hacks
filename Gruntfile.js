/**
 * Created by fs on 12.04.15.
 */
module.exports = function (grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    // https://www.npmjs.com/package/load-grunt-tasks
    require('load-grunt-tasks')(grunt);

    // load tasks from the specified Grunt plugin, which must be installed locally via npm
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


    grunt.registerTask('test', ['karma:single']);

    grunt.registerTask('auto-test', ['karma:unit']);

    grunt.registerTask('build', ['bundle', 'copy']);

    // Default task(s).
    grunt.registerTask('default', ['test', 'build']);

};