/*global module:false*/
'use strict';

module.exports = function(grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('jit-grunt')(grunt);

  grunt.initConfig({

    app: {
      baseurl: ''
    },

    watch: {
      sass: {
        files: ['_scss/**/*.{scss,sass}'],
        tasks: ['compass', 'autoprefixer']
      },
      scripts: {
        files: ['javascripts/**/*.{js}'],
        tasks: ['uglify']
      },
      jekyll: {
        files: [
          '**/*.{html,yml,md,mkd,markdown}'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.{html,yml,md,mkd,markdown}',
          '.tmp/<%= app.baseurl %>/css/*.css',
          '.tmp/<%= app.baseurl %>/js/*.js',
          'images/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },

    uglify: {
      options: {
        preserveComments: false
      },
      dist: {
        files: {
          '.tmp/<%= app.baseurl %>/javascripts/scripts.js': ['javascripts/**/*.js']
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: {
            target: 'http://localhost:9000/<%= app.baseurl %>'
          },
          base: [
            '.jekyll',
            '.tmp',
            '<%= app.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: {
            target: 'http://localhost:9000/<%= app.baseurl %>'
          },
          base: [
            '<%= app.dist %>',
            '.tmp'
          ]
        }
      }
    },

    clean: {
      server: [
        '.jekyll',
        '.tmp'
      ],
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '*',
            '!.git*'
          ]
        }]
      }
    },

    jekyll: {
      options: {
        config: '_config.yml,_config.build.yml',
        src: '<%= app.app %>'
      },
      dist: {
        options: {
          dest: '<%= app.dist %>/<%= app.baseurl %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll/<%= app.baseurl %>'
        }
      }
    },

    uncss: {
      options: {
        htmlroot: '<%= app.baseurl %>',
        report: 'gzip'
      },
      dist: {
        src: '<%= app.baseurl %>/**/*.html',
        dest: '.tmp/<%= app.baseurl %>/css/blog.css'
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 3 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/<%= app.baseurl %>/css',
          src: '**/*.css',
          dest: '.tmp/<%= app.baseurl %>/css'
        }]
      }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    modernizr: {

      dist: {
        // [REQUIRED] Path to the build you're using for development.
        "devFile" : "bower_components/modernizr/modernizr.js",

        // [REQUIRED] Path to save out the built file.
        "outputFile" : "javascripts/modernizr-custom.js",

        // Based on default settings on http://modernizr.com/download/
        "extra" : {
          "shiv" : true,
          "printshiv" : false,
          "load" : true,
          "mq" : true,
          "cssclasses" : true
        },

        // Based on default settings on http://modernizr.com/download/
        "extensibility" : {
          "addtest" : false,
          "prefixed" : false,
          "teststyles" : false,
          "testprops" : false,
          "testallprops" : false,
          "hasevents" : false,
          "prefixes" : false,
          "domprefixes" : false
        },

        // By default, source is uglified before saving
        "uglify" : true,

        // Define any tests you want to implicitly include.
        "tests" : [],

        // By default, this task will crawl your project for references to Modernizr tests.
        // Set to false to disable.
        "parseFiles" : true,

        // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
        // You can override this by defining a "files" array below.
        // "files" : {
        // "src": []
        // },

        // When parseFiles = true, matchCommunityTests = true will attempt to
        // match user-contributed tests.
        "matchCommunityTests" : false,

        // Have custom Modernizr tests? Add paths to their location here.
        "customTests" : []
      }

    }
  });

  grunt.registerTask('default', ['clean:server', 'jekyll:server', 'autoprefixer', 'uglify', 'connect:livereload', 'watch']);

};
