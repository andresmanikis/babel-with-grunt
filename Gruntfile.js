module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('basicTask', 'Log some stuff', function() {
    grunt.log.write('Logging some stuff...').ok();
    return true;
  });

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/app.js': 'src/app.js'
        }
      }
    }
  });

  grunt.registerTask('default', ['babel']);

};