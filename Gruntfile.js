module.exports = function(grunt) { 
    
    grunt.initConfig({
      'lodash': {
        'build': {
          // output location 
          'dest': 'build/lodash.js',
          'options': {
            // modifiers for prepared builds 
            // modern, strict, compat 
            'modifier': 'compat'
          }
        }
      },        
      jshint: {
      all: ['src/**/*.js'],
        options: {
          globals: { 
            _: false, 
            $: false,
            jasmine: false, 
              describe: false, 
              it: false,
              expect: false, 
              beforeEach: false, 
              afterEach: false  
          },
          browser: true, 
          devel: true
        } 
      },
      testem: {
        unit: {
          options: {
            framework: 'jasmine2',
            launch_in_dev: ['PhantomJS'],
            before_tests: 'grunt jshint',
            serve_files: [
              'build/lodash.js',
              'node_modules/jquery/dist/jquery.js',
              'src/**/*.js',
              'test/**/*.js'
            ],
            watch_files: [
              'src/**/*.js',
              'test/**/*.js'
            ] 
          }
        }
      }
    });
    
    // first run 'lodash' to create /build/lodash.js.
    grunt.registerTask('default', ['testem:run:unit']);
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-testem');
    grunt.loadNpmTasks('grunt-lodash');
    
};