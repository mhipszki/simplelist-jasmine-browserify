'use strict';

module.exports = function(grunt) {

  var files = {
    source: 'source/*.js',
    tests: 'test/**/*.js',
    templates: 'test/fixture/*.html',
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
        tasks: ['newer:jshint:source', 'browserify', 'jasmine']
      },
      tests: {
        files: [files.tests],
        tasks: ['newer:jshint:tests', 'browserify', 'jasmine']
      },
      templates: {
        files: [files.templates],
        tasks: ['copy:templates', 'jasmine']
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
        dest: 'build/tests.js',
        options: {
          external: ['./source/app.js'],
          debug: true
        }
      }
    },

    jasmine: {
      test: {
        src: 'build/source.js',
        options: {
          keepRunner: true,
          vendor: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
          ],
          specs: 'build/tests.js',
          outfile: 'build/testRunner.html'
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
    },

    clean: {
      build: 'build'
    },

    copy: {
      templates: {
        files: [
          {
            expand: true,
            cwd: 'test/fixture',
            src: ['*.html'],
            dest: 'build/'
          }
        ]
      }
    }
  });

  // Register the default tasks.
  grunt.registerTask('serve', ['connect', 'watch']);

  grunt.registerTask('test', [
    'clean:build',
    'copy:templates',
    'jshint',
    'browserify',
    'jasmine'
  ]);
};
