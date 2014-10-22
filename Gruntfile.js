'use strict';

module.exports = function(grunt) {

  var files = {
    source: 'source/*.js',
    tests: 'test/*.spec.js',
    fixtures: 'test/fixture/*.html',
    grunt: 'Gruntfile.js'
  };

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    watch: {
      source: {
        files: [files.source],
        tasks: ['test']
      },
      tests: {
        files: [files.tests, files.fixtures],
        tasks: ['test']
      },
      grunt: {
        files: [files.grunt],
        tasks: ['jshint:grunt']
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      source: [files.source],
      tests: [files.tests],
      grunt: [files.grunt]
    },

    jasmine: {
      test: {
        src: 'source/*.js',
        options: {
          vendor: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
          ],
          specs: 'test/*.spec.js'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'source',
        }
      }
    }
  });

  // Register the default tasks.
  grunt.registerTask('serve', ['connect', 'watch']);

  grunt.registerTask('test', ['newer:jshint:tests', 'newer:jshint:source', 'jasmine']);
};
