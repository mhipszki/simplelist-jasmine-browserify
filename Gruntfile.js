'use strict';

module.exports = function(grunt) {

  var files = {
    source: 'source/*.js',
    tests: 'test/**/*.js',
    html: 'source/index.html',
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
        tasks: ['newer:jshint:source', 'browserify:tests', 'jasmine']
      },
      tests: {
        files: [files.tests],
        tasks: ['newer:jshint:tests', 'browserify:tests', 'jasmine']
      },
      html: {
        files: [files.html],
        tasks: ['copy:html', 'jasmine']
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

    browserify: {
      source: {
        src: ['source/*.js'],
        dest: 'build/source.js'
      },
      tests: {
        src: ['test/*.spec.js'],
        dest: 'build/tests.js'
      }
    },

    jasmine: {
      test: {
        options: {
          keepRunner: true,
          specs: 'build/tests.js',
          outfile: 'build/testRunner.html'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'build',
        }
      }
    },

    clean: {
      build: 'build'
    },

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'source',
            src: ['index.html'],
            dest: 'build/'
          }
        ]
      }
    }
  });

  // Register the default tasks.
  grunt.registerTask('serve', ['connect', 'watch']);

  grunt.registerTask('build', [
    'clean:build',
    'copy:html',
    'jshint',
    'browserify',
    'connect:server:keepalive'
  ]);

  grunt.registerTask('test', [
    'clean:build',
    'copy:html',
    'jshint',
    'browserify',
    'jasmine'
  ]);
};
