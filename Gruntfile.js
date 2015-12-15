/* global module */

module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('basicTask', 'Log some stuff', function() {
    grunt.log.write('Logging some stuff...').ok();
    return true;
  });

  grunt.registerTask('default', ['basicTask']);

};