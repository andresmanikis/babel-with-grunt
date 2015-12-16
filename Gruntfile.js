module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('basicTask', 'Log some stuff', function() {
    grunt.log.write('Logging some stuff...').ok();
    return true;
  });

  grunt.initConfig({
    clean: ['dist'],

    watch: {
      files: ['src/**/*.js'],
      tasks: ['default']
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'dist/app.js': 'src/app.js'
        }
      }
    }

  });

  grunt.registerTask('default', ['clean', 'babel']);

};